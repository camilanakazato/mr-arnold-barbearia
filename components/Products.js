import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('todos')

  const products = [
    // Produtos Jaboque
    {
      name: 'Pomada Classic',
      image: '/imgs/pomadaClassic-jaboque.jpg',
      category: 'jaboque',
      description: 'Pomada clássica para modelagem e fixação'
    },
    {
      name: 'Pomada Matte',
      image: '/imgs/pomadaMatte-jaboque.jpg',
      category: 'jaboque',
      description: 'Pomada matte para acabamento natural'
    },
    {
      name: 'Pomada Ultra White',
      image: '/imgs/pomadaUltraWhite-jaboque.jpg',
      category: 'jaboque',
      description: 'Pomada branca para efeito vintage'
    },
    {
      name: 'Pomada Nuvem',
      image: '/imgs/pomadaNuvem-jaboque.jpg',
      category: 'jaboque',
      description: 'Pomada para volume e textura'
    },
    {
      name: 'Pomada Em Pó',
      image: '/imgs/pomadaEmPó-Jaboque.jpg',
      category: 'jaboque',
      description: 'Pomada em pó para acabamento seco'
    },
    {
      name: 'Gel Ultra Glued',
      image: '/imgs/gelUltraGlued-jaboque.jpg',
      category: 'jaboque',
      description: 'Gel de fixação extra forte'
    },
    {
      name: 'Leave In',
      image: '/imgs/leaveIn-jaboque.jpg',
      category: 'jaboque',
      description: 'Leave in para hidratação e proteção'
    },
    {
      name: 'Shampoo',
      image: '/imgs/shampoo-jaboque.jpg',
      category: 'jaboque',
      description: 'Shampoo especializado para cabelos masculinos'
    },
    {
      name: 'Pós Barba',
      image: '/imgs/posBarba-jaboque.jpg',
      category: 'jaboque',
      description: 'Pós barba para hidratação e alívio'
    },
    {
      name: 'Shaving Cream',
      image: '/imgs/shavingcream-jaboque.jpg',
      category: 'jaboque',
      description: 'Creme de barbear para lâmina'
    },
    {
      name: 'Pente para Barba',
      image: '/imgs/penteParaBarba.jpg',
      category: 'jaboque',
      description: 'Pente especializado para barba'
    },
    {
      name: 'Balm',
      image: '/imgs/balm-jaboque.jpg',
      category: 'jaboque',
      description: 'Balm para hidratação da barba'
    },
    
    // Produtos Cavalera
    {
      name: 'Pomada Classic',
      image: '/imgs/pomadaClassic-cavalera.jpg',
      category: 'cavalera',
      description: 'Pomada clássica para modelagem'
    },
    {
      name: 'Pomada By Rum',
      image: '/imgs/pomadaByRum-cavalera.jpg',
      category: 'cavalera',
      description: 'Pomada com fragrância de rum'
    },
    {
      name: 'Pomada Brilho Premium',
      image: '/imgs/pomadaBrilhoPremium-Cavalera.jpg',
      category: 'cavalera',
      description: 'Pomada premium com brilho'
    },
    {
      name: 'Óleo',
      image: '/imgs/oleo-cavaleira.jpg',
      category: 'cavalera',
      description: 'Óleo para hidratação e brilho'
    },
    {
      name: 'Perfume',
      image: '/imgs/perfume-cavalera.jpg',
      category: 'cavalera',
      description: 'Perfume masculino'
    },
    {
      name: 'Pós Barba',
      image: '/imgs/posbarba-cavalera.jpg',
      category: 'cavalera',
      description: 'Pós barba hidratante'
    },
    {
      name: 'Shampoo',
      image: '/imgs/shampoo-cavalera.jpg',
      category: 'cavalera',
      description: 'Shampoo especializado'
    },
    {
      name: 'Tonico',
      image: '/imgs/tonico-cavalera.jpg',
      category: 'cavalera',
      description: 'Tônico facial'
    },
    {
      name: 'Sabonete Íntimo',
      image: '/imgs/saboneteIntimo-cavalera.jpg',
      category: 'cavalera',
      description: 'Sabonete íntimo masculino'
    },
    {
      name: 'Grooming',
      image: '/imgs/grooming-cavalera.jpg',
      category: 'cavalera',
      description: 'Kit de grooming completo'
    },
    {
      name: 'Balm',
      image: '/imgs/balmbyrum-cavaleira.jpg',
      category: 'cavalera',
      description: 'Balm hidratante'
    },
    
    // Produtos Walory
    {
      name: 'Shampoo',
      image: '/imgs/shampoo-walory.jpg',
      category: 'walory',
      description: 'Shampoo Walory especializado'
    }
  ]

  const categories = [
    { id: 'todos', name: 'Todos' },
    { id: 'jaboque', name: 'Jaboque' },
    { id: 'cavalera', name: 'Cavalera' },
    { id: 'walory', name: 'Walory' }
  ]

  const filteredProducts = activeCategory === 'todos' 
    ? products 
    : products.filter(product => product.category === activeCategory)

  return (
    <section className="produtos">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Nossos Produtos
      </motion.h2>

      <div className="produtos-filtros">
        {categories.map((category) => (
          <motion.button
            key={category.id}
            className={`filtro-btn ${activeCategory === category.id ? 'ativo' : ''}`}
            onClick={() => setActiveCategory(category.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category.name}
          </motion.button>
        ))}
      </div>

      <div className="produtos-carousel">
        {filteredProducts.map((product, index) => (
          <motion.div
            key={product.name}
            className="produto-card"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="produto-img-hover">
              <Image
                src={product.image}
                alt={product.name}
                width={150}
                height={150}
                className="produto-img"
              />
            </div>
            <h3>{product.name}</h3>
            <p className="produto-descricao">{product.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
} 