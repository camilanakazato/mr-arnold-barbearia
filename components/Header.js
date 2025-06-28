import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Header({ onMenuToggle }) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.header
      className={`header ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="navbar">
        <div className="logo-nav">
          <Image
            src="/imgs/logo-barbearia.png"
            alt="Logo Mr Arnold Barbearia"
            width={60}
            height={60}
            className="logo-barbearia-nav"
            priority
          />
          <a href="#inicio" className="logo-link" onClick={(e) => {
            e.preventDefault()
            scrollToSection('inicio')
          }}>
            Mr Arnold
          </a>
        </div>
        
        <ul className="nav-links">
          <li className="nav-link-item">
            <a href="#inicio" onClick={(e) => {
              e.preventDefault()
              scrollToSection('inicio')
            }}>
              Início
            </a>
          </li>
          <li className="nav-link-item">
            <a href="#servicos" onClick={(e) => {
              e.preventDefault()
              scrollToSection('servicos')
            }}>
              Serviços
            </a>
          </li>
          <li className="nav-link-item">
            <a href="#barbeiros" onClick={(e) => {
              e.preventDefault()
              scrollToSection('barbeiros')
            }}>
              Profissionais
            </a>
          </li>
          <li className="nav-link-item">
            <a href="#produtos" onClick={(e) => {
              e.preventDefault()
              scrollToSection('produtos')
            }}>
              Produtos
            </a>
          </li>
          <li className="nav-link-item">
            <a href="#contato" onClick={(e) => {
              e.preventDefault()
              scrollToSection('contato')
            }}>
              Contato
            </a>
          </li>
          <li>
            <motion.button
              id="menu-toggle"
              className="menu-toggle"
              aria-label="Abrir menu lateral"
              onClick={onMenuToggle}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              +
            </motion.button>
          </li>
        </ul>
      </nav>
    </motion.header>
  )
} 