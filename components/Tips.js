import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export default function Tips() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const tips = [
    {
      title: 'Dica 1: Hidratação Diária',
      image: '/imgs/dica1.jpg',
      legend: 'Mantenha seu cabelo hidratado diariamente com produtos específicos para seu tipo de fio. Isso garante brilho, maciez e saúde capilar.'
    },
    {
      title: 'Dica 2: Escovação Correta',
      image: '/imgs/dica2.jpg',
      legend: 'Escove seu cabelo com cuidado, começando pelas pontas e subindo gradualmente. Isso evita quebra e danos aos fios.'
    },
    {
      title: 'Dica 3: Proteção Solar',
      image: '/imgs/dica3.jpg',
      legend: 'Proteja seu cabelo do sol usando chapéus ou produtos com proteção UV. O sol pode ressecar e danificar os fios.'
    },
    {
      title: 'Dica 4: Alimentação Balanceada',
      image: '/imgs/dica4.jpg',
      legend: 'Uma alimentação rica em vitaminas e minerais é essencial para a saúde dos cabelos. Consuma frutas, verduras e proteínas.'
    },
    {
      title: 'Dica 5: Visitas Regulares',
      image: '/imgs/dica5.jpg',
      legend: 'Mantenha visitas regulares à barbearia para cortes e tratamentos. Isso garante que seu cabelo sempre esteja em dia.'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % tips.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [tips.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % tips.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + tips.length) % tips.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <section className="dicas">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Dicas de Cuidado
      </motion.h2>
      
      <div className="dicas-carousel-container">
        <motion.button
          className="dicas-carousel-arrow left"
          onClick={prevSlide}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          &#8592;
        </motion.button>
        
        <div className="dicas-carousel">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              className="dica-slide"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="dica-titulo">{tips[currentSlide].title}</h3>
              <Image
                src={tips[currentSlide].image}
                alt={tips[currentSlide].title}
                width={320}
                height={240}
                className="dica-img"
              />
              <p className="dica-legenda">{tips[currentSlide].legend}</p>
            </motion.div>
          </AnimatePresence>
        </div>
        
        <motion.button
          className="dicas-carousel-arrow right"
          onClick={nextSlide}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          &#8594;
        </motion.button>
      </div>
      
      <div className="dicas-carousel-indicators">
        {tips.map((_, index) => (
          <motion.button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </section>
  )
} 