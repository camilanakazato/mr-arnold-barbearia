import Image from 'next/image';
import { useState } from 'react';

export default function Tips() {
  const tips = [
    {
      title: 'Lave o cabelo e a barba regularmente com produtos adequados.',
      mainImage: '/imgs/slide1.jpg',
      productImages: ['/imgs/shampoo-cavalera.jpg', '/imgs/shampoo-jaboque.jpg'],
      text: 'Nossos profissionais indicam o Shampoo para Barba | Cavalera ou Shampoo 2 em 1 | Jaboque — limpeza eficaz que remove impurezas sem ressecar, deixando os fios saudáveis e perfumados.'
    },
    {
      title: 'Hidrate a pele após o barbear.',
      mainImage: '/imgs/slide2.jpg',
      productImages: ['/imgs/posbarba-cavalera.jpg', '/imgs/balmclassic-cavalera.jpg'],
      text: 'Nossos profissionais indicam o Pós-barba Classic | Cavalera e o Balm Classic | Cavalera — acalmam a pele, evitam irritações e hidratam profundamente após o barbear.'
    },
    {
      title: 'Visite seu barbeiro a cada 2 ou 3 semanas para manter o corte alinhado.',
      mainImage: '/imgs/slide3.jpg',
      productImages: ['/imgs/pomadaByRum-cavalera.jpg', '/imgs/ativadordeCachos-cavalera.jpg'],
      text: 'Nossos profissionais indicam a Pomada by Rum | Cavalera — para finalizar com estilo e controle — ou o Ativador de Cachos | Cavalera, ideal para definir, hidratar e valorizar cabelos cacheados.'
    },
    {
      title: 'Use óleos e balms para manter a barba macia e saudável.',
      mainImage: '/imgs/slide4.jpg',
      productImages: ['/imgs/balm-jaboque.jpg', '/imgs/oleo-cavaleira.jpg', '/imgs/oleo-jaboque.jpg'],
      text: 'Nossos profissionais indicam o Óleo Premium | Cavalera e o Balm para Barba | Jaboque — nutrem os fios, reduzem o frizz e deixam a barba com toque suave e aparência bem cuidada.'
    },
    {
      title: 'Autoestima começa com cuidado. E cuidado começa na escolha certa: venha viver a experiência Mr. Arnold.',
      mainImage: '/imgs/slide5.jpg',
      productImages: [],
      text: 'Sinta-se em casa enquanto cuida do seu visual. Aqui você é sempre prioridade.'
    }
  ];

  // Flip state for the tarot card
  const [flipped, setFlipped] = useState(false);

  return (
    <section id="dicas" className="dicas dicas-grid">
      <h2>Dicas de Cuidado</h2>
      <div className="dicas-grid-cards tarot-layout">
        {/* Linha 1 */}
        {tips.map((tip, idx) => (
          <div className="dica-card" key={idx}>
            <div className="dica-card-title">{tip.title}</div>
            <div className="dica-card-main-img">
              <Image src={tip.mainImage} alt={tip.title} width={340} height={200} />
            </div>
            {tip.productImages.length > 0 && (
              <>
                <div className="dica-card-products">
                  {tip.productImages.map((img, i) => (
                    <Image src={img} alt="Produto" width={80} height={80} key={i} className="dica-card-product-img" />
                  ))}
                </div>
                <hr className="dica-card-divider" />
              </>
            )}
            {/* Linha laranja após a imagem principal do card 5 */}
            {idx === 4 && tip.productImages.length === 0 && (
              <hr className="dica-card-divider" />
            )}
            <div className="dica-card-text">{tip.text}</div>
          </div>
        ))}
        <div className={`dica-card tarot-card${flipped ? ' flipped' : ''}`} onClick={() => setFlipped(f => !f)}>
          <div className="tarot-card-inner">
            <div className="tarot-card-front" style={{ background: '#e55808', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <Image src="/imgs/alt-trinks-icon.png" alt="Trinks" width={120} height={120} className="tarot-logo-img" />
            </div>
            <div className="tarot-card-back">
              <div className="tarot-card-back-content">
                <div className="tarot-card-back-text">Sua autoestima merece esse cuidado</div>
                <a href="https://www.trinks.com/mr-arnold" target="_blank" rel="noopener noreferrer" className="tarot-card-btn">Agendar pelo site</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 