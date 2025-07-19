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
          <p className="historia-card-texto">
            Para quem busca melhorar sua autoestima e se sentir melhor consigo mesmo, Mr. Arnold é uma barbearia que te ajuda a conquistar o seu melhor com um atendimento e estrutura de qualidade, não como barbearias famosas e impessoais de Campo Grande.<br/><br/>
            Nossa equipe é formada por profissionais experientes, apaixonados pelo que fazem e prontos para oferecer um atendimento de qualidade em cada detalhe: do corte clássico ao moderno, da barba bem feita ao cuidado com a pele e o couro cabeludo.<br/><br/>
            Mr. Arnold traz a combinação perfeita de qualidade e estrutura com o seu estilo ideal!<br/><br/>
            Seja bem-vindo à Mr. Arnold — onde estilo e cuidado andam juntos.
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
            <div className="contato-whatsapp-wrapper">
              <a href="https://wa.me/5567998942928" target="_blank" rel="noopener noreferrer" className="contato-link whatsapp">
                <div className="contato-icon">
                  <Image src="/imgs/whatsapp-icon.png" alt="WhatsApp" width={32} height={32} />
                </div>
                <span>Fale conosco por aqui!</span>
              </a>
            </div>
            <div className="contato-instagram-wrapper">
              <div className="contato-instagram-bloco">
                <a href="https://www.instagram.com/mrarnoldbarbearia/" target="_blank" rel="noopener noreferrer" className="contato-link instagram">
                  <div className="contato-icon">
                    <Image src="/imgs/instagram-contato-icon.png" alt="Instagram" width={32} height={32} />
                  </div>
                  <span><strong>Segue a gente no Instagram!</strong></span>
                </a>
                <div className="contato-instagram-subtitulo-wrapper">
                  <p className="contato-instagram-subtitulo">
                    Tem corte novo, dica de cuidado e promoção que só quem acompanha aproveita.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="contato-cards-section">
          <div className="horario-card">
            <h3 className="horario-card-title">Horário de Funcionamento</h3>
            <table className="horario-tabela">
              <tbody>
                <tr>
                  <td style={{ whiteSpace: 'nowrap' }}>Segunda à Sexta:</td>
                  <td>9h - 19h</td>
                </tr>
                <tr>
                  <td>Sábados:</td>
                  <td>9h - 17h</td>
                </tr>
                <tr>
                  <td>Domingos:</td>
                  <td>Fechado</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="historia-card-wrapper">
            <HistoryCard />
          </div>
        </div>
      </div>
    </section>
  );
}
