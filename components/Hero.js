import { useState } from 'react'
import Image from 'next/image'

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
    <>
      <div className="hero-content">
        <Image
          src="/imgs/logo-barbearia.png"
          alt="Logo Mr Arnold Barbearia"
          width={220}
          height={220}
          className="logo-hero"
          style={{display:'block',margin:'0 auto 20px auto',maxWidth:'220px',width:'50%',height:'auto'}}
          priority
        />
        <h1>Bem-vindo à Mr Arnold Barbearia</h1>
        <p>Tradição, estilo e cuidado para você se sentir único.</p>
      </div>
      
      <div className="agendamento-card">
        <h2>Conheça a experiência completa da nossa barbearia — agende seu horário com praticidade!</h2>
        <div className="agendamento-opcoes">
          <p>Use o site ou baixe o app TRINKS e agende quando quiser, de onde estiver.</p>
          <div className="agendamento-botoes">
            <a
              href="https://www.trinks.com/mr-arnold"
              target="_blank"
              rel="noopener noreferrer"
              className="agendamento-btn trinks-btn"
            >
              <Image
                src="/imgs/trinks-icon.png"
                alt="TRINKS"
                width={24}
                height={24}
              />
              <span>Agendar pelo Site</span>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.trinks.m"
              target="_blank"
              rel="noopener noreferrer"
              className="agendamento-btn app-btn"
            >
              <Image
                src="/imgs/play-store-icon.png"
                alt="Play Store"
                width={24}
                height={24}
              />
              <span>Baixar App</span>
            </a>
          </div>
        </div>
      </div>
      
      <div className="desconto-box">
        <h2>Ganhe 10% de desconto na primeira visita!</h2>
        <form id="desconto-form" onSubmit={handleSubmit}>
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
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Enviando...' : 'Quero meu desconto'}
          </button>
        </form>
        {message && <span id="desconto-msg">{message}</span>}
      </div>
    </>
  )
} 