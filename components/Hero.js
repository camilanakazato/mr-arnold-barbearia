import Image from 'next/image';
import { useState } from 'react';

const DiscountForm = () => {
  const [formData, setFormData] = useState({ email: '', phone: '' });
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');
    try {
      const res = await fetch('/api/send-discount', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tipo: 'corte', email: formData.email, telefone: formData.phone })
      });
      if (res.ok) {
        setMessage('Seu desconto de 10% está garantido! Verifique seu email e apresente o cupom na sua primeira visita.');
        setFormData({ email: '', phone: '' });
      } else {
        const data = await res.json();
        setMessage(data.error || 'Erro ao enviar cupom.');
      }
    } catch (err) {
      setMessage('Erro ao enviar cupom.');
    }
    setIsSubmitting(false);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  return (
    <div className="desconto-box">
      <h2>Ganhe 10% de desconto na primeira visita!</h2>
      <form id="desconto-form" onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Seu e-mail" value={formData.email} onChange={handleInputChange} required />
        <input type="tel" name="phone" placeholder="Seu telefone" value={formData.phone} onChange={handleInputChange} required />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Enviando...' : 'Quero meu desconto'}
        </button>
      </form>
      {message && <span id="desconto-msg">{message}</span>}
    </div>
  );
};


export default function Hero() {
  return (
    <div className="hero-content">
      <div className="hero-logo-center">
        <Image 
          src="/imgs/logo-barbearia.png" 
          alt="Mr. Arnold Barber Shop" 
          width={260} 
          height={260}
          className="logo-principal"
          priority
        />
      </div>
      <h1>Bem-vindo à Mr Arnold Barbearia</h1>
      <p>Tradição, estilo e cuidado para você se sentir único.</p>
      
      <div className="agendamento-card">
        <h2>Conheça a experiência completa da nossa barbearia — agende seu horário com praticidade!</h2>
        <div className="agendamento-opcoes">
          <p>Use o site ou baixe o app TRINKS e agende quando quiser, de onde estiver.</p>
          <div className="agendamento-botoes">
            <a href="https://www.trinks.com/mr-arnold" target="_blank" rel="noopener noreferrer" className="agendamento-btn hero-trinks-btn">
              <Image src="/imgs/alt-trinks-icon.png" alt="Trinks" width={48} height={48} />
              <span>Agendar pelo Site</span>
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.trinks.m" target="_blank" rel="noopener noreferrer" className="agendamento-btn hero-app-btn">
              <Image src="/imgs/alt-playstore-icon.png" alt="Google Play" width={48} height={48} />
              <span>Baixar App</span>
            </a>
          </div>
        </div>
      </div>
      
      <DiscountForm />
    </div>
  );
}
