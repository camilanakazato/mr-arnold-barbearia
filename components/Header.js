import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Header({ onMenuToggle, isVisible }) {
  const [isMobile, setIsMobile] = useState(false);
  const [isGalaxyFold, setIsGalaxyFold] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setIsMobile(width <= 700);
      
      // Detectar Galaxy Fold Folded (690x829)
      const isGalaxyFoldFolded = Math.abs(width - 690) <= 1 && Math.abs(height - 829) <= 1;
      setIsGalaxyFold(isGalaxyFoldFolded);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <header className={`site-header ${isVisible ? 'visible' : ''}`}>
      <nav className="navbar">
        <div className="logo-nav-row">
          <Image
            src="/imgs/logo-barbearia.png"
            alt="Logo Mr Arnold Barbearia"
            width={60}
            height={60}
            className="logo-barbearia-nav"
          />
        </div>
        
        <ul className="nav-links">
          <li className="nav-inicio">
            <a href="#inicio">Início</a>
          </li>
          <li className="nav-servicos">
            <a href="#servicos">Serviços</a>
          </li>
          <li className="nav-profissionais">
            <a href="#profissionais">Profissionais</a>
          </li>
          <li className="nav-produtos">
            <a href="#produtos">Produtos</a>
          </li>
          <li className="nav-resultados">
            <a href="#resultados">Resultados</a>
          </li>
          <li className="nav-dicas">
            <a href="#dicas">Dicas</a>
          </li>
          <li className="nav-contato">
            <a href="#contato">Contato</a>
          </li>
        </ul>
        
        {/* Botão da sidebar sempre visível */}
        <button
          id="menu-toggle"
          onClick={onMenuToggle}
          className="menu-toggle"
          aria-label="Abrir menu lateral"
        >
          +
        </button>
      </nav>
    </header>
  )
} 