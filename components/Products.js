import { useState } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// Componente para o formulário de desconto Jaboque
const JaboqueDiscountForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' })
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');
    try {
      const res = await fetch('/api/send-discount', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tipo: 'jaboque', nome: formData.name, email: formData.email, telefone: formData.phone })
      });
      if (res.ok) {
        setMessage('Seu desconto de 15% na linha Jaboque está garantido! Verifique seu email e apresente o cupom na sua próxima visita.');
        setFormData({ name: '', email: '', phone: '' });
      } else {
        const data = await res.json();
        setMessage(data.error || 'Erro ao enviar desconto.');
      }
    } catch (err) {
      setMessage('Erro ao enviar desconto.');
    }
    setIsSubmitting(false);
  }

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="desconto-jaboque-box">
      <h3 className="desconto-jaboque-title">15% de desconto em produtos Jaboque!</h3>
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
    { name: 'Ativador de Cachos | Cavalera', image: '/imgs/ativadordeCachos-cavalera.jpg', category: 'cavalera', description: 'Realce os cachos com definição, maciez e controle de frizz. Ideal para quem quer estilo com movimento natural.' },
    { name: 'Balm by Rum | Cavalera', image: '/imgs/balmbyrum-cavaleira.jpg', category: 'cavalera', description: 'Hidratante multifuncional para barba e pele. Perfeito para acalmar irritações e manter os fios alinhados com um toque sofisticado.' },
    { name: 'Balm Classic | Cavalera', image: '/imgs/balmclassic-cavalera.jpg', category: 'cavalera', description: 'Clássico e eficaz: hidrata, suaviza e perfuma a barba, proporcionando um visual bem cuidado todos os dias.' },
    { name: 'Grooming | Cavalera', image: '/imgs/grooming-cavalera.jpg', category: 'cavalera', description: 'Modelador versátil para barba e cabelo. Controle, hidratação e estilo num só produto.' },
    { name: 'Óleo p/ Barba | Cavalera', image: '/imgs/oleo-cavaleira.jpg', category: 'cavalera', description: 'Hidratação intensa com fragrância marcante. Deixa a barba macia, brilhante e com toque suave.' },
    { name: 'Pomada Brilho Premium | Cavalera', image: '/imgs/pomadaBrilhoPremium-Cavalera.jpg', category: 'cavalera', description: 'Acabamento brilhante com fixação forte. Ideal para penteados sofisticados e duradouros.' },
    { name: 'Pomada by Rum | Cavalera', image: '/imgs/pomadaByRum-cavalera.jpg', category: 'cavalera', description: 'Fixação e textura na medida certa, com aroma exclusivo. Um toque de personalidade para o seu penteado.' },
    { name: 'Pomada Classic | Cavalera', image: '/imgs/pomadaClassic-cavalera.jpg', category: 'cavalera', description: 'Firme na fixação, suave no visual. Versátil para diferentes estilos, com toque clássico e moderno.' },
    { name: 'Pós Barba | Cavalera', image: '/imgs/posbarba-cavalera.jpg', category: 'cavalera', description: 'Acalma, hidrata e refresca após o barbear. Sensação suave e perfumada para finalizar com estilo.' },
    { name: 'Shampoo | Cavalera', image: '/imgs/shampoo-cavalera.jpg', category: 'cavalera', description: 'Limpa sem ressecar, eliminando impurezas e controle de odores. Essencial para manter a barba saudável e cheirosa.' },
    { name: 'Tônico capilar | Cavalera', image: '/imgs/tonico-cavalera.jpg', category: 'cavalera', description: 'Fortalece a raiz e estimula o crescimento dos fios. Ideal para quem busca saúde e vigor no cabelo.' },
    { name: 'Sabonete Íntimo | Cavalera', image: '/imgs/saboneteIntimo-cavalera.jpg', category: 'cavalera', description: 'Higiene diária com frescor e proteção. Fórmula suave e eficaz para cuidados íntimos masculinos.' },
    { name: 'Perfume Classic | Cavalera', image: '/imgs/perfume-cavalera.jpg', category: 'cavalera', description: 'Fragrância elegante e marcante. Perfeito para quem quer deixar sua identidade registrada por onde passa.' },
    { name: 'Balm | Jaboque', image: '/imgs/balm-jaboque.jpg', category: 'jaboque', description: 'Nutre profundamente a barba. Um cuidado diário para quem preza conforto e aparência impecável.' },
    { name: 'Gel Ultra Glued | Jaboque', image: '/imgs/gelUltraGlued-jaboque.jpg', category: 'jaboque', description: 'Fixação extrema para penteados que duram o dia inteiro. Ideal para quem quer estilo com firmeza e sem frizz.' },
    { name: 'Grooming | Jaboque', image: '/imgs/grooming-jaboque.jpg', category: 'jaboque', description: 'Alinha os fios sem pesar. Praticidade e elegância no cuidado diário da barba e cabelo.' },
    { name: 'Leave-In | Jaboque', image: '/imgs/leaveIn-jaboque.jpg', category: 'jaboque', description: 'Tratamento sem enxágue que hidrata, desembaraça e fortalece. Essencial para manter os fios saudáveis e macios.' },
    { name: 'Óleo p/ Barba | Jaboque', image: '/imgs/oleo-jaboque.jpg', category: 'jaboque', description: 'Rico em óleos naturais, nutre profundamente e elimina o ressecamento da barba com leveza e estilo.' },
    { name: 'Pente para Barba', image: '/imgs/penteParaBarba.jpg', category: 'jaboque', description: 'Ideal para alinhar, desembaraçar e distribuir produtos uniformemente. Um acessório indispensável para manter o visual em dia.' },
    { name: 'Pomada Classic | Jaboque', image: '/imgs/pomadaClassic-jaboque.jpg', category: 'jaboque', description: 'Fixação média e acabamento natural. Ideal para quem busca praticidade e estilo no dia a dia.' },
    { name: 'Pomada em Pó | Jaboque', image: '/imgs/pomadaEmPó-Jaboque.jpg', category: 'jaboque', description: 'Volume instantâneo e fixação leve. Solução prática para levantar o visual em segundos.' },
    { name: 'Pomada Matte | Jaboque', image: '/imgs/pomadaMatte-jaboque.jpg', category: 'jaboque', description: 'Visual seco e natural com total controle. Perfeita para looks modernos e despojados.' },
    { name: 'Pomada Nuvem | Jaboque', image: '/imgs/pomadaNuvem-jaboque.jpg', category: 'jaboque', description: 'Textura leve como o nome sugere, com fixação suave. Ideal para modelar sem pesar.' },
    { name: 'Pomada Ultra White | Jaboque', image: '/imgs/pomadaUltraWhite-jaboque.jpg', category: 'jaboque', description: 'Fórmula suave que modela com leveza, controla o frizz e mantém o aspecto natural dos fios. Ideal para um visual alinhado e discreto no dia a dia.' },
    { name: 'Pós barba | Jaboque', image: '/imgs/posBarba-jaboque.jpg', category: 'jaboque', description: 'Evita irritações e vermelhidão com ação calmante. Um toque de cuidado que sua pele merece.' },
    { name: 'Shampoo 2 em 1 | Jaboque', image: '/imgs/shampoo-jaboque.jpg', category: 'jaboque', description: 'Cuidado completo para cabelo e barba. Limpeza, hidratação e praticidade em um único produto.' },
    { name: 'Shaving Cream | Jaboque', image: '/imgs/shavingcream-jaboque.jpg', category: 'jaboque', description: 'Creme hidratante que facilita o deslizar da lâmina, reduzindo irritações. Proporciona um barbear preciso, suave e confortável.' },
    { name: 'Shampoo | Walory', image: '/imgs/shampoo-walory.jpg', category: 'walory', description: 'Limpeza profunda e brilho intenso com tecnologia profissional. Resultado de salão no seu banho diário.' }
  ]

  const categories = [
    { id: 'todos', name: 'Todos' },
    { id: 'jaboque', name: 'Jaboque' },
    { id: 'cavalera', name: 'Cavalera' },
    { id: 'walory', name: 'Walory' }
  ]

  let filteredProducts = activeCategory === 'todos' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  if (activeCategory === 'jaboque') {
    filteredProducts = filteredProducts.filter(product => product.name !== 'Pente para Barba');
  }

  // Centralizar slide único para Walory
  const isWalorySingle = activeCategory === 'walory' && filteredProducts.length === 1;

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
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={24}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            1200: { slidesPerView: 4 },
            900: { slidesPerView: 3 },
            600: { slidesPerView: 2 },
            0: { slidesPerView: 1 }
          }}
          style={{ paddingBottom: '3.5rem' }}
          centeredSlides={isWalorySingle}
        >
          {filteredProducts.map((product) => (
            <SwiperSlide key={product.image}>
              <div className="produto-card">
                <h3>{product.name.replace('Pente para Barba | Jaboque', 'Pente para Barba').replace(/^\-\s*/, '')}</h3>
                <div className="produto-img-container">
                  <Image src={product.image} alt={product.name} layout="fill" objectFit="cover" className="produto-img" />
                </div>
                <p className="produto-descricao">{product.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      <JaboqueDiscountForm />
    </section>
  )
} 