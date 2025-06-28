import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function VideoHero({ onScrollDown }) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [isFooterVisible, setIsFooterVisible] = useState(true)
  const videoRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      
      if (scrollY > windowHeight * 0.3) {
        setIsFooterVisible(false)
      } else {
        setIsFooterVisible(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleVideoLoad = () => {
    setIsVideoLoaded(true)
  }

  return (
    <div className="video-hero-container">
      <video
        ref={videoRef}
        className="video-hero"
        src="/videos/video-inicio.mp4"
        autoPlay
        muted
        loop
        playsInline
        onLoadedData={handleVideoLoad}
        preload="metadata"
      />
      
      <div className="scroll-down-btn-container">
        <motion.button
          className="scroll-down-btn"
          onClick={onScrollDown}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <Image
            src="/imgs/green-arrow.png"
            alt="Descer"
            width={24}
            height={24}
            className="arrow-down"
          />
        </motion.button>
      </div>

      <motion.div
        className={`video-hero-footer ${!isFooterVisible ? 'hidden' : ''}`}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
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
      </motion.div>
    </div>
  )
} 