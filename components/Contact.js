import Image from 'next/image';

export default function Contact() {
  return (
    <section className="contato">
      <h2>Localização & Atendimento</h2>
      <div className="contato-container">
        {/* Coluna da Esquerda */}
        <div className="contato-coluna-esquerda">
          <div className="contato-info">
            <p><strong>Endereço:</strong><br />Rua Dr Arthur Jorge, 1054 - Centro, Campo Grande/MS</p>
            <p><strong>Telefone:</strong><br />(67) 99894-2928</p>
            <p><strong>Email:</strong><br />mrarnoldbarbearia@gmail.com</p>
          </div>
          <div className="contato-redes">
            <a href="https://api.whatsapp.com/send/?phone=5567992823631&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="contato-link whatsapp">
              <Image src="/imgs/whatsapp-icon.png" alt="WhatsApp" width={32} height={32} />
              <span>Fale conosco por aqui!</span>
            </a>
            <a href="https://www.instagram.com/mrarnoldbarbearia/" target="_blank" rel="noopener noreferrer" className="contato-link instagram">
              <Image src="/imgs/instagram-contato-icon.png" alt="Instagram" width={32} height={32} />
              <div>
                <span>Segue a gente no Instagram!</span>
                <p className="contato-descricao">Tem corte novo, dica de cuidado e promoção que só quem acompanha aproveita.</p>
              </div>
            </a>
          </div>
        </div>

        {/* Coluna da Direita */}
        <div className="contato-coluna-direita">
          <div className="historia-card">
            <h3>A História da Mr. Arnold</h3>
            <p>A Mr. Arnold Barbearia nasceu da paixão de um jovem casal, Raul e Naka, que sonhavam em criar um espaço onde a tradição da barbearia clássica encontrasse as tendências modernas. O nome é uma homenagem ao seu amado gato, Mr. Arnold, que representa a independência, o estilo e o conforto que desejavam oferecer aos seus clientes. Hoje, a barbearia é um ponto de encontro para amigos, um lugar para relaxar e, claro, para sair com um visual impecável.</p>
          </div>
          <div className="horario-funcionamento">
            <h3>Horário de Funcionamento</h3>
            <div className="horarios">
              <div className="horario-item">
                <span className="dia">Segunda a Sexta:</span>
                <span className="horario">08:00 - 19:00</span>
              </div>
              <div className="horario-item">
                <span className="dia">Sábado:</span>
                <span className="horario">08:00 - 18:00</span>
              </div>
              <div className="horario-item">
                <span className="dia">Domingo:</span>
                <span className="horario">Fechado</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
