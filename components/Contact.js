import Image from 'next/image';
import { useState } from 'react';

const HistoryCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className={`historia-card ${isFlipped ? 'flipped' : ''}`} onClick={() => setIsFlipped(!isFlipped)}>
      <div className="historia-card-inner">
        <div className="historia-card-front">
          <Image src="/imgs/logo-barbearia.png" alt="Mr. Arnold" width={120} height={120} className="historia-card-logo" />
          <h3 className="historia-card-title">Já conhece a Mr. Arnold?</h3>
          <p>(Clique para saber mais)</p>
        </div>
        <div className="historia-card-back">
          <h3 className="historia-card-title">Nossa História</h3>
          <p className="historia-card-texto">
            Fundada em 2024, a Mr. Arnold Barbearia nasceu da paixão por resgatar a tradição das barbearias clássicas, adaptando-a ao homem moderno. Nosso espaço é um refúgio onde a arte da barbearia é celebrada com excelência e um atendimento que faz você se sentir em casa.
            <br/><br/>
            Com uma equipe de barbeiros experientes e apaixonados pelo que fazem, oferecemos mais do que cortes e barbas: entregamos uma experiência de cuidado e bem-estar. Cada detalhe, desde nossas toalhas quentes até a seleção de produtos premium, foi pensado para garantir sua satisfação.
            <br/><br/>
            Venha para a Mr. Arnold e descubra um lugar onde tradição e estilo se encontram.
          </p>
        </div>
      </div>
    </div>
  );
};

export default function Contact() {
  return (
    <section id="contato" className="contato">
      <h2>Localização & Atendimento</h2>
      <div className="contato-container">
        <div className="contato-info">
          <p><strong>Endereço:</strong> Rua Dr Arthur Jorge, 1054 - Centro, Campo Grande/MS</p>
          <p><strong>Telefone:</strong> (67) 99894-2928</p>
          <p><strong>Email:</strong> mrarnoldbarbearia@gmail.com</p>
          
          <div className="contato-redes">
            <a href="https://wa.me/5567998942928" target="_blank" rel="noopener noreferrer">
              <Image src="/imgs/whatsapp-icon.png" alt="WhatsApp" width={32} height={32} />
              <span>Fale conosco por aqui!</span>
            </a>
            <a href="https://www.instagram.com/mrarnoldbarbearia/" target="_blank" rel="noopener noreferrer">
              <Image src="/imgs/instagram-contato-icon.png" alt="Instagram" width={32} height={32} />
              <span><strong>Segue a gente no Instagram!</strong><br/>Tem corte novo, dica de cuidado e promoção que só quem acompanha aproveita.</span>
            </a>
          </div>
        </div>
        
        <div className="historia-card-container">
          <HistoryCard />
        </div>
      </div>
    </section>
  );
}
