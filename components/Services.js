import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Services() {
  const serviceGroups = [
    {
      title: 'Corte',
      icon: '/imgs/cabelo-icon.png',
      services: [
        { name: 'Corte', description: 'Corte personalizado com acabamento perfeito', price: 'R$35' }
      ]
    },
    {
      title: 'Barba',
      icon: '/imgs/barba-icon.png',
      services: [
        { name: 'Barba', description: 'Acabamento e alinhamento da barba', price: 'R$30' }
      ]
    },
    {
      title: 'Combo Corte e Barba',
      icon: '/imgs/combo-icon.png',
      services: [
        { name: 'Combo', description: 'Corte e barba com cuidado completo do início ao fim', price: 'R$80' }
      ]
    },
    {
      title: 'Sobrancelha',
      icon: '/imgs/sobrancelha-icon.png',
      services: [
        { name: 'Sobrancelha', description: 'Limpeza e alinhamento das sobrancelhas com técnica precisa e acabamento natural.', price: 'R$20' }
      ]
    },
    {
      title: 'Depilações',
      icon: '/imgs/depilacao-icon.png',
      services: [
        { name: 'Depilação de nariz', description: 'Remoção eficaz dos pelos indesejados com conforto e higiene.', price: 'R$30' },
        { name: 'Depilação de orelha', description: 'Remoção eficaz dos pelos indesejados com conforto e higiene.', price: 'R$30' }
      ]
    },
    {
      title: 'Tratamentos',
      icon: '/imgs/tratamento-icon.png',
      services: [
        { name: 'Tratamento Capilar', description: 'Hidratação e nutrição profunda dos fios', price: 'R$45' }
      ]
    },
    {
      title: 'Cuidados com a pele',
      icon: '/imgs/cuidados-pele-icon.png',
      services: [
        { name: 'Limpeza de Pele', description: 'Remoção de impurezas e células mortas, deixando a pele renovada e saudável.', price: 'R$40' }
      ]
    },
    {
      title: 'Higienização dos fios',
      icon: '/imgs/higienizacao-icon.png',
      services: [
        { name: 'Higienização, secagem e finalização', description: 'Limpeza profunda dos fios e couro cabeludo, com finalização na secagem. Ideal antes de um corte ou evento.', price: 'R$35' }
      ]
    }
  ]

  return (
    <section className="servicos">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Nossos Serviços
      </motion.h2>

      {serviceGroups.map((group, groupIndex) => (
        <motion.div
          key={group.title}
          className="servicos-grupo"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: groupIndex * 0.1 }}
          viewport={{ once: true }}
        >
          <h3>
            <Image
              src={group.icon}
              alt={group.title}
              width={32}
              height={32}
              className="servico-icone"
            />
            {group.title}
          </h3>
          
          <div className="servicos-cards">
            {group.services.map((service, serviceIndex) => (
              <motion.div
                key={service.name}
                className="servico-card"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <h4>{service.name}</h4>
                <p className="servico-descricao">{service.description}</p>
                <div className="servico-valor">{service.price}</div>
              </motion.div>
            ))}
            
            {/* Card de Agendamento */}
            <motion.div
              className="servico-card servico-agendamento"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <p className="servico-agendamento-texto">
                Escolha todos os serviços que deseja de uma só vez e garanta seu atendimento com nossos profissionais.<br />
                Clique para agendar pelo site ou baixe o app TRINKS e tenha tudo na palma da mão.
              </p>
              <div className="servico-agendamento-links">
                <motion.a
                  href="https://www.trinks.com/mr-arnold"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="agendamento-link"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Image
                    src="/imgs/trinks-icon.png"
                    alt="Agendar pelo site Trinks"
                    width={28}
                    height={28}
                    className="agendamento-icone"
                  />
                  Agendar pelo Site
                </motion.a>
                <motion.a
                  href="https://play.google.com/store/apps/details?id=com.trinks.m"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="agendamento-link"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Image
                    src="/imgs/play-store-icon.png"
                    alt="Baixar App Trinks"
                    width={28}
                    height={28}
                    className="agendamento-icone"
                  />
                  Baixar App
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </section>
  )
} 