import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Barbers() {
  const barbers = [
    {
      name: 'Rafael',
      image: '/imgs/rafa-barber.jpg',
      description: 'Especialista em cortes modernos e degradês. Cada cliente tem um estilo único, e meu foco é valorizar isso com técnica e atenção aos detalhes.',
      instagram: 'https://www.instagram.com/old_rafael_barber_/'
    },
    {
      name: 'Naka',
      image: '/imgs/naka-barber.jpg',
      description: 'Especialista em cabelos cacheados e crespos. Renovar a autoestima dos clientes é sempre um prazer. Tenho carinho especial por cortes em cabelos cacheados.',
      instagram: 'https://www.instagram.com/nakazatobarber/'
    },
    {
      name: 'Raul',
      image: '/imgs/raul-barber.jpg',
      description: 'Especialista em barbas e tratamentos. Dedicação total para deixar você com a melhor aparência possível.',
      instagram: 'https://www.instagram.com/raul_barber/'
    }
  ]

  return (
    <section className="barbeiros">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Nossos Profissionais
      </motion.h2>
      
      <div className="barbeiros-grid">
        {barbers.map((barber, index) => (
          <motion.div
            key={barber.name}
            className="barbeiro-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <Image
              src={barber.image}
              alt={`${barber.name} - Barbeiro`}
              width={200}
              height={200}
              className="barbeiro-img"
            />
            <h3>{barber.name}</h3>
            <p>{barber.description}</p>
            <motion.a
              href={barber.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="instagram-link"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver Instagram
            </motion.a>
          </motion.div>
        ))}
      </div>
    </section>
  )
} 