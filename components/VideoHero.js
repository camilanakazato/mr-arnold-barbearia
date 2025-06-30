import Image from 'next/image'

export default function VideoHero() {
  return (
    <div className="video-hero-container">
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
        <a href="#inicio" className="scroll-down-btn" aria-label="Rolar para baixo">
          <Image
            src="/imgs/green-arrow.png"
            alt="Descer"
            width={24}
            height={24}
            className="arrow-down"
          />
        </a>
      </div>
    </div>
  )
} 