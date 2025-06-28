import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Results() {
  const barberResults = [
    {
      name: 'Rafael',
      phrase: 'Cada cliente tem um estilo único, e meu foco é valorizar isso com técnica e atenção aos detalhes. Do degradê ao corte alinhado, entrego sempre o melhor.',
      works: [
        {
          image: '/imgs/rafa-corte1.jpg',
          link: 'https://www.instagram.com/p/C32v24ZudCI/?img_index=1',
          legend: 'Corte moderno, alinhado com a sua identidade.'
        },
        {
          image: '/imgs/rafa-corte2.jpg',
          link: 'https://www.instagram.com/p/DAYwuaJpZQU/?img_index=1',
          legend: 'Estilo e precisão em cada detalhe do corte.'
        },
        {
          image: '/imgs/rafa-corte3.png',
          link: 'https://www.instagram.com/p/CahikGmuEo2/?img_index=1',
          legend: 'Do clássico ao atual, sempre com excelência no atendimento.'
        }
      ],
      instagram: 'https://www.instagram.com/old_rafael_barber_/'
    },
    {
      name: 'Naka',
      phrase: 'Renovar a autoestima dos clientes é sempre um prazer. Tenho carinho especial por cortes em cabelos cacheados, mas o clássico bem feito também tem meu respeito e dedicação.',
      works: [
        {
          image: '/imgs/naka-corte1.jpg',
          link: 'https://www.instagram.com/p/DFdzbgoxzd8/?img_index=1',
          legend: 'Corte infantil com cuidado, paciência e um toque de estilo para os pequenos.'
        },
        {
          image: '/imgs/naka-corte2.jpg',
          link: 'https://www.instagram.com/p/CypbBjXu5kt/?img_index=1',
          legend: 'Sobrancelha alinhada realça o olhar e valoriza o rosto. Cuidamos de cada detalhe.'
        },
        {
          image: '/imgs/naka-corte3.jpg',
          link: 'https://www.instagram.com/p/DEs_FuUyXGG/?img_index=1',
          legend: 'Corte pensado para valorizar a textura natural dos fios. Respeito, técnica e estilo para cabelos cacheados e crespos.'
        }
      ],
      instagram: 'https://www.instagram.com/nakazatobarber/'
    },
    {
      name: 'Raul',
      phrase: 'Dedicação total para deixar você com a melhor aparência possível. Cada corte é único e feito com muito carinho.',
      works: [
        {
          image: '/imgs/raul-corte1.jpg',
          link: 'https://www.instagram.com/p/example1/',
          legend: 'Corte clássico com acabamento perfeito.'
        },
        {
          image: '/imgs/raul-corte2.png',
          link: 'https://www.instagram.com/p/example2/',
          legend: 'Barba bem feita e alinhada.'
        },
        {
          image: '/imgs/raul-corte3.jpg',
          link: 'https://www.instagram.com/p/example3/',
          legend: 'Combo corte e barba com excelência.'
        }
      ],
      instagram: 'https://www.instagram.com/raul_barber/'
    }
  ]

  return (
    <section className="resultados">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Confira o trabalho dos nossos profissionais - Resultados Reais
      </motion.h2>
      
      <div className="portfolio-barbeiros">
        {barberResults.map((barber, barberIndex) => (
          <motion.div
            key={barber.name}
            className="portfolio-linha"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: barberIndex * 0.2 }}
            viewport={{ once: true }}
          >
            <h3>{barber.name}</h3>
            <p className="barbeiro-frase">{barber.phrase}</p>
            
            <div className="portfolio-cards">
              {barber.works.map((work, workIndex) => (
                <motion.a
                  key={workIndex}
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portfolio-card"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    src={work.image}
                    alt={`Corte ${barber.name} ${workIndex + 1}`}
                    width={200}
                    height={200}
                    className="portfolio-img"
                  />
                  <div className="portfolio-legenda">{work.legend}</div>
                </motion.a>
              ))}
              
              <motion.a
                href={barber.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-card portfolio-card-instagram"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="portfolio-legenda">Quero conhecer mais sobre o {barber.name}</div>
                <Image
                  src="/imgs/instagram-icon.png"
                  alt="Instagram"
                  width={32}
                  height={32}
                  className="portfolio-instagram-icon"
                />
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
} 