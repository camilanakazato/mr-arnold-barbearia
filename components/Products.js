import { useState } from 'react'
import Image from 'next/image'
import Slider from 'react-slick'

// Componente para o formulário de desconto Jaboque
const JaboqueDiscountForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' })
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulação de envio
    setTimeout(() => {
      setMessage('Desconto enviado! Verifique seu e-mail.')
      setFormData({ name: '', email: '', phone: '' })
      setIsSubmitting(false)
    }, 1000)
  }

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="desconto-jaboque-box">
      <h3>15% de desconto em produtos Jaboque!</h3>
      <p>Cadastre-se para garantir seu desconto exclusivo em toda a linha Jaboque.</p>
      <form id="jaboque-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Seu nome" value={formData.name} onChange={handleInputChange} required />
        <input type="email" name="email" placeholder="Seu e-mail" value={formData.email} onChange={handleInputChange} required />
        <input type="tel" name="phone" placeholder="Seu telefone" value={formData.phone} onChange={handleInputChange} required />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Enviando...' : 'Quero meu desconto Jaboque'}
        </button>
      </form>
      {message && <span id="jaboque-msg">{message}</span>}
    </div>
  )
}

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('todos')

  const products = [
    { name: 'Ativador de Cachos | Cavalera', image: '/imgs/ativadordeCachos-cavalera.jpg', category: 'cavalera', description: 'Hidrata e define os cachos, controlando o frizz e proporcionando um visual natural e saudável.' },
    { name: 'Balm by Rum | Cavalera', image: '/imgs/balmbyrum-cavaleira.jpg', category: 'cavalera', description: 'Hidratante multifuncional para barba e pele. Perfeito para acalmar irritações e manter os fios alinhados com um toque sofisticado.' },
    { name: 'Balm Classic | Cavalera', image: '/imgs/balmclassic-cavalera.jpg', category: 'cavalera', description: 'Ideal para o cuidado diário da barba, acalma a pele, hidrata e ajuda a modelar os fios com suavidade.' },
    { name: 'Grooming | Cavalera', image: '/imgs/grooming-cavalera.jpg', category: 'cavalera', description: 'Modelador versátil que oferece fixação flexível e textura aos fios, ideal para criar penteados estruturados com aspecto natural.' },
    { name: 'Óleo | Cavalera', image: '/imgs/oleo-cavaleira.jpg', category: 'cavalera', description: 'Nutre e hidrata profundamente os fios da barba, conferindo brilho, maciez e um perfume marcante.' },
    { name: 'Pomada Brilho Premium | Cavalera', image: '/imgs/pomadaBrilhoPremium-Cavalera.jpg', category: 'cavalera', description: 'Oferece alta fixação com efeito de brilho molhado, perfeita para penteados clássicos e definidos.' },
    { name: 'Pomada by Rum | Cavalera', image: '/imgs/pomadaByRum-cavalera.jpg', category: 'cavalera', description: 'Com fragrância exclusiva de rum, oferece fixação média e acabamento natural para um estilo despojado.' },
    { name: 'Pomada Classic | Cavalera', image: '/imgs/pomadaClassic-cavalera.jpg', category: 'cavalera', description: 'Versátil e de fácil aplicação, permite modelar o cabelo com fixação média e acabamento natural.' },
    { name: 'Pós Barba | Cavalera', image: '/imgs/posbarba-cavalera.jpg', category: 'cavalera', description: 'Loção pós-barba que acalma, hidrata e refresca a pele, prevenindo irritações e deixando uma sensação de bem-estar.' },
    { name: 'Shampoo | Cavalera', image: '/imgs/shampoo-cavalera.jpg', category: 'cavalera', description: 'Limpeza profunda e hidratação para cabelo e barba, com uma fragrância marcante e masculina.' },
    { name: 'Balm | Jaboque', image: '/imgs/balm-jaboque.jpg', category: 'jaboque', description: 'Cuidado completo para a barba, hidrata, amacia e ajuda a alinhar os fios, deixando-os mais saudáveis.' },
    { name: 'Gel Ultra Glued | Jaboque', image: '/imgs/gelUltraGlued-jaboque.jpg', category: 'jaboque', description: 'Fixação extrema para penteados que exigem durabilidade e resistência, sem deixar resíduos.' },
    { name: 'Grooming | Jaboque', image: '/imgs/grooming-jaboque.jpg', category: 'jaboque', description: 'Modelador líquido que encorpa os fios e facilita o penteado, oferecendo fixação leve e natural.' },
    { name: 'Leave In | Jaboque', image: '/imgs/leaveIn-jaboque.jpg', category: 'jaboque', description: 'Creme sem enxágue que hidrata, protege e controla o frizz, ideal para o uso diário.' },
    { name: 'Óleo | Jaboque', image: '/imgs/oleo-jaboque.jpg', category: 'jaboque', description: 'Gotas de hidratação e brilho para a barba, deixando os fios macios, perfumados e fáceis de pentear.' },
    { name: 'Pente para Barba | Jaboque', image: '/imgs/penteParaBarba.jpg', category: 'jaboque', description: 'Pente de madeira que desembaraça os fios sem gerar estática, ideal para a saúde da barba.' },
    { name: 'Pomada Classic | Jaboque', image: '/imgs/pomadaClassic-jaboque.jpg', category: 'jaboque', description: 'Pomada à base de água com fixação forte e brilho moderado, ideal para penteados clássicos.' },
    { name: 'Pomada em Pó | Jaboque', image: '/imgs/pomadaEmPó-Jaboque.jpg', category: 'jaboque', description: 'Oferece volume e textura com acabamento matte, perfeita para um look moderno e descontraído.' },
    { name: 'Pomada Matte | Jaboque', image: '/imgs/pomadaMatte-jaboque.jpg', category: 'jaboque', description: 'Acabamento seco e natural com alta fixação, ideal para modelar sem deixar o cabelo com brilho.' },
    { name: 'Pomada Nuvem | Jaboque', image: '/imgs/pomadaNuvem-jaboque.jpg', category: 'jaboque', description: 'Textura leve e flexível que permite remodelar o penteado ao longo do dia, com acabamento suave.' },
    { name: 'Pomada Ultra White | Jaboque', image: '/imgs/pomadaUltraWhite-jaboque.jpg', category: 'jaboque', description: 'Pomada com efeito platinado temporário, ideal para penteados ousados e com personalidade.' },
    { name: 'Pós Barba | Jaboque', image: '/imgs/posBarba-jaboque.jpg', category: 'jaboque', description: 'Refresca e acalma a pele após o barbear, ajudando a fechar os poros e a evitar irritações.' },
    { name: 'Shampoo | Jaboque', image: '/imgs/shampoo-jaboque.jpg', category: 'jaboque', description: 'Limpa e purifica o couro cabeludo, controlando a oleosidade e deixando uma sensação de frescor.' },
    { name: '- Shaving Cream | Jaboque', image: '/imgs/shavingcream-jaboque.jpg', category: 'jaboque', description: 'Creme de barbear que facilita o deslizar da lâmina, protege a pele e hidrata durante o barbear.' },
    { name: 'Shampoo | Walory', image: '/imgs/shampoo-walory.jpg', category: 'walory', description: 'Formulado para as necessidades do cabelo masculino, limpa, fortalece e dá brilho aos fios.' }
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

  const sliderSettings = {
    dots: true,
    infinite: filteredProducts.length > 4,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 4, slidesToScroll: 2 } },
      { breakpoint: 900, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 1 } }
    ]
  }

  return (
    <section id="produtos" className="produtos">
      <h2>Produtos</h2>

      <div className="produtos-filtros">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`filtro-btn ${activeCategory === category.id ? 'ativo' : ''}`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="produtos-carousel-container">
        <Slider {...sliderSettings}>
          {filteredProducts.map((product) => (
            <div key={product.image} className="produto-card-wrapper">
              <div className="produto-card">
                <div className="produto-img-container">
                  <Image src={product.image} alt={product.name} layout="fill" objectFit="cover" className="produto-img" />
                </div>
                <h3>{product.name}</h3>
                <p className="produto-descricao">{product.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      
      <JaboqueDiscountForm />
    </section>
  )
} 