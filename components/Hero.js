import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
  const [formData, setFormData] = useState({ email: '', phone: '' })
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simular envio do formulário
    setTimeout(() => {
      setMessage('Desconto enviado! Verifique seu e-mail.')
      setFormData({ email: '', phone: '' })
      setIsSubmitting(false)
    }, 1000)
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Image
          src="/imgs/logo-barbearia.png"
          alt="Logo Mr Arnold Barbearia"
          width={220}
          height={220}
          className="logo-hero"
          priority
        />
        <h1>Bem-vindo à Mr Arnold Barbearia</h1>
        <p>Tradição, estilo e cuidado para você se sentir único.</p>
      </motion.div>
      
      <motion.div
        className="agendamento-card"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2>Conheça a experiência completa da nossa barbearia — agende seu horário com praticidade!</h2>
        <div className="agendamento-opcoes">
          <p>Use o site ou baixe o app TRINKS e agende quando quiser, de onde estiver.</p>
          <div className="agendamento-botoes">
            <motion.a
              href="https://www.trinks.com/mr-arnold"
              target="_blank"
              rel="noopener noreferrer"
              className="agendamento-btn trinks-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src="/imgs/trinks-icon.png"
                alt="TRINKS"
                width={24}
                height={24}
              />
              <span>Agendar pelo Site</span>
            </motion.a>
            <motion.a
              href="https://play.google.com/store/apps/details?id=com.trinks.m"
              target="_blank"
              rel="noopener noreferrer"
              className="agendamento-btn app-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src="/imgs/play-store-icon.png"
                alt="Play Store"
                width={24}
                height={24}
              />
              <span>Baixar App</span>
            </motion.a>
          </div>
        </div>
      </motion.div>
      
      <motion.div
        className="desconto-box"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <h2>Ganhe 10% de desconto na primeira visita!</h2>
        <form onSubmit={handleSubmit} id="desconto-form">
          <input
            type="email"
            name="email"
            placeholder="Seu e-mail"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Seu telefone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isSubmitting ? 'Enviando...' : 'Quero meu desconto'}
          </motion.button>
        </form>
        {message && (
          <motion.span
            id="desconto-msg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="success-message"
          >
            {message}
          </motion.span>
        )}
      </motion.div>
    </section>
  )
} 