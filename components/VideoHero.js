import Image from 'next/image'

export default function VideoHero({ isScrolled }) {
  return (
    <div id="top" className="video-hero-container">
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
        <a href={isScrolled ? '#top' : '#inicio'} className="scroll-down-btn" aria-label={isScrolled ? 'Rolar para o topo' : 'Rolar para baixo'}>
          <Image
            src="/imgs/green-arrow.png"
            alt={isScrolled ? 'Subir' : 'Descer'}
            width={24}
            height={24}
            className={`arrow-down ${isScrolled ? 'arrow-up' : ''}`}
          />
        </a>
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