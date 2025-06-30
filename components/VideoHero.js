import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export default function VideoHero() {
  const videoRef = useRef(null)
  const [isVideoVisible, setIsVideoVisible] = useState(true)

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setIsVideoVisible(entry.isIntersecting && entry.intersectionRatio > 0.5)
      },
      { threshold: 0.5 }
    )
    if (videoRef.current) {
      observer.observe(videoRef.current)
    }
    return () => {
      if (videoRef.current) observer.unobserve(videoRef.current)
    }
  }, [])

  // Função para scroll suave para o topo
  const scrollToTop = (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div id="top" className="video-hero-container" ref={videoRef}>
      <video
        className="video-hero"
        src="/videos/video-inicio.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
      
      <div className="scroll-down-btn-container">
        {isVideoVisible ? (
          <a href="#inicio" className="scroll-down-btn" aria-label="Rolar para baixo">
            <Image
              src="/imgs/green-arrow.png"
              alt="Descer"
              width={24}
              height={24}
              className="arrow-down"
            />
          </a>
        ) : (
          <a href="#top" className="scroll-down-btn" aria-label="Voltar ao topo" onClick={scrollToTop}>
            <Image
              src="/imgs/green-arrow.png"
              alt="Subir"
              width={24}
              height={24}
              className="arrow-down arrow-up"
            />
          </a>
        )}
      </div>

      <div className="video-hero-footer">
        <Image
          src="/imgs/logo-barbearia.png"
          alt="Logo Mr Arnold Barbearia"
          width={80}
          height={80}
          className="footer-logo"
          priority
        />
        <div className="footer-title">Mr Arnold Barbearia</div>
        <ul className="footer-nav">
          <li><a href="#inicio">Início</a></li>
          <li><a href="#servicos">Serviços</a></li>
          <li><a href="#barbeiros">Profissionais</a></li>
          <li><a href="#produtos">Produtos</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </div>
    </div>
  )
} 