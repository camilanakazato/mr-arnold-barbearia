import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Header({ onMenuToggle, isVisible }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 700);
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
          <li>
            <a href="#inicio">Início</a>
          </li>
          <li>
            <a href="#servicos">Serviços</a>
          </li>
          {!isMobile && (
            <>
              <li>
                <a href="#barbeiros">Profissionais</a>
              </li>
              <li>
                <a href="#produtos">Produtos</a>
              </li>
            </>
          )}
          <li>
            <a href="#contato">Contato</a>
          </li>
          <li>
            <button
              id="menu-toggle"
              onClick={onMenuToggle}
              className="menu-toggle"
              aria-label="Abrir menu lateral"
            >
              +
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
} 