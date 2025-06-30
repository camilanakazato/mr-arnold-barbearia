import Image from 'next/image'

export default function Services() {
  // O card de agendamento é repetido, então podemos defini-lo como um componente para reutilização
  const AgendamentoCard = () => (
    <div className="servico-card servico-agendamento">
      <p className="servico-agendamento-texto">
        Escolha todos os serviços que deseja de uma só vez e garanta seu atendimento com nossos profissionais.<br/>
        Clique para agendar pelo site ou baixe o app TRINKS e tenha tudo na palma da mão.
      </p>
      <div className="servico-agendamento-links">
        <a href="https://www.trinks.com/mr-arnold" target="_blank" rel="noopener noreferrer" className="agendamento-link">
          <Image src="/imgs/trinks-icon.png" alt="Agendar pelo site Trinks" width={28} height={28} className="agendamento-icone" /> Agendar pelo Site
        </a>
        <a href="https://play.google.com/store/apps/details?id=com.trinks.m" target="_blank" rel="noopener noreferrer" className="agendamento-link">
          <Image src="/imgs/play-store-icon.png" alt="Baixar App Trinks" width={28} height={28} className="agendamento-icone" /> Baixar App
        </a>
      </div>
    </div>
  );

  return (
    <section className="servicos">
      <h2>Serviços</h2>
      
      <div className="servicos-grupo">
        <h3><Image src="/imgs/cabelo-icon.png" alt="Cabelo" width={56} height={56} className="servico-icone" /> Cabelo</h3>
        <div className="servicos-cards">
          <div className="servico-card">
            <h4>Corte</h4>
            <p className="servico-descricao">Corte completo com tesoura e máquina ou somente tesoura, finalizado com estilo e atenção aos detalhes.</p>
            <div className="servico-valor">R$50</div>
          </div>
          <div className="servico-card">
            <h4>Corte apenas máquina</h4>
            <p className="servico-descricao">Corte prático e uniforme somente com máquina, ideal para quem prefere simplicidade e agilidade. <em>*degradê não incluso.</em></p>
            <div className="servico-valor">R$35</div>
          </div>
          <div className="servico-card">
            <h4>Pézinho</h4>
            <p className="servico-descricao">Retoque no acabamento do cabelo para manter o corte sempre alinhado</p>
            <div className="servico-valor">R$20</div>
          </div>
          <AgendamentoCard />
        </div>
      </div>

      <div className="servicos-grupo">
        <h3><Image src="/imgs/barba-icon.png" alt="Barba" width={56} height={56} className="servico-icone" /> Barba</h3>
        <div className="servicos-cards">
          <div className="servico-card">
            <h4>Barba</h4>
            <p className="servico-descricao">Design de barba com definição e toalha quente para um acabamento impecável.</p>
            <div className="servico-valor">R$45</div>
          </div>
          <div className="servico-card">
            <h4>Barba apenas máquina</h4>
            <p className="servico-descricao">Aparação da barba com máquina, para um visual limpo e natural, sem navalha.</p>
            <div className="servico-valor">R$20</div>
          </div>
          <div className="servico-card">
            <h4>Barboterapia</h4>
            <p className="servico-descricao">Tratamento completo para barba com esfoliação, hidratação, toalha quente e finalização.</p>
            <div className="servico-valor">R$65</div>
          </div>
          <AgendamentoCard />
        </div>
      </div>

      <div className="servicos-grupo">
        <h3><Image src="/imgs/combo-icon.png" alt="Combo Corte e Barba" width={56} height={56} className="servico-icone" /> Corte e Barba</h3>
        <div className="servicos-cards">
          <div className="servico-card">
            <h4>Combo</h4>
            <p className="servico-descricao">Corte e barba com cuidado completo do início ao fim</p>
            <div className="servico-valor">R$80</div>
          </div>
          <AgendamentoCard />
        </div>
      </div>

      <div className="servicos-grupo">
        <h3><Image src="/imgs/sobrancelha-icon.png" alt="Sobrancelha" width={56} height={56} className="servico-icone" /> Sobrancelha</h3>
        <div className="servicos-cards">
          <div className="servico-card">
            <h4>Sobrancelha</h4>
            <p className="servico-descricao">Limpeza e alinhamento das sobrancelhas com técnica precisa e acabamento natural.</p>
            <div className="servico-valor">R$20</div>
          </div>
          <AgendamentoCard />
        </div>
      </div>

      <div className="servicos-grupo">
        <h3><Image src="/imgs/depilacao-icon.png" alt="Depilação" width={56} height={56} className="servico-icone" /> Depilações</h3>
        <div className="servicos-cards">
          <div className="servico-card">
            <h4>Depilação de nariz</h4>
            <p className="servico-descricao">Remoção eficaz dos pelos indesejados com conforto e higiene.</p>
            <div className="servico-valor">R$30</div>
          </div>
          <div className="servico-card">
            <h4>Depilação de orelha</h4>
            <p className="servico-descricao">Remoção eficaz dos pelos indesejados com conforto e higiene.</p>
            <div className="servico-valor">R$30</div>
          </div>
          <AgendamentoCard />
        </div>
      </div>
    </section>
  )
} 