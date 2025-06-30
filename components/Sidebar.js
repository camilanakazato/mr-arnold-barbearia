import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export default function Sidebar({ isOpen, onClose, onNavigate }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleNavigation = (sectionId) => {
    onNavigate(sectionId)
    onClose()
  }

  const menuItems = [
    { id: 'inicio', label: 'Início' },
    { id: 'servicos', label: 'Serviços' },
    { id: 'barbeiros', label: 'Profissionais' },
    { id: 'produtos', label: 'Produtos' },
    { id: 'resultados', label: 'Resultados reais' },
    { id: 'dicas', label: 'Dicas' },
    { id: 'contato', label: 'Contato' },
    { id: 'contato', label: 'Localização' }
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="sidebar-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              background: 'rgba(16,21,16,0.55)',
              zIndex: 9998,
              cursor: 'pointer'
            }}
          />

          {/* Sidebar */}
          <motion.aside
            className={`sidebar-menu${isOpen ? ' open' : ''}`}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              width: '300px',
              height: '100vh',
              background: '#101510',
              boxShadow: '-4px 0 24px rgba(46,204,64,0.18)',
              zIndex: 9999,
              padding: '2.5rem 1.5rem 1.5rem 1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem'
            }}
          >
            {/* Close Button */}
            <motion.button
              className="close-sidebar"
              onClick={onClose}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{
                position: 'absolute',
                top: '18px',
                right: '18px',
                background: '#FF6B35',
                color: '#fff',
                border: 'none',
                borderRadius: '50%',
                width: '38px',
                height: '38px',
                fontSize: '2rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(255,107,53,0.13)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10001
              }}
              aria-label="Fechar menu lateral"
            >
              -
            </motion.button>

            {/* Menu Items */}
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '1.2rem'
            }}>
              {menuItems.map((item, index) => (
                <motion.li
                  key={item.id + index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.a
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavigation(item.id)
                    }}
                    whileHover={{ x: 10 }}
                    style={{
                      color: '#2ecc40',
                      fontSize: '1.2rem',
                      textDecoration: 'none',
                      fontWeight: '600',
                      transition: 'color 0.2s',
                      display: 'block',
                      padding: '0.5rem 0'
                    }}
                  >
                    {item.label}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
} 