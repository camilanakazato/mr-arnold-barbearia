import Image from 'next/image'

const BarberPortfolio = ({ name, quote, images, instagramUrl }) => (
  <div className="portfolio-linha">
    <h3>{name}</h3>
    <p className="barbeiro-frase">{quote}</p>
    <div className="portfolio-cards">
      {images.map((img, index) => (
        <a href={img.link} target="_blank" rel="noopener noreferrer" className="portfolio-card" key={index}>
          <Image src={img.src} alt={`${name} - Corte ${index + 1}`} width={250} height={250} objectFit="cover" />
          <div className="portfolio-legenda">{img.caption}</div>
        </a>
      ))}
      <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="portfolio-card portfolio-card-instagram">
        <div className="portfolio-legenda">Quero conhecer mais sobre o {name}</div>
        <Image src="/imgs/instagram-icon.png" alt="Instagram" className="portfolio-instagram-icon" width={64} height={64} />
      </a>
    </div>
  </div>
);

export default function Results() {
  const barbersData = [
    {
      name: 'Rafael',
      quote: 'Cada cliente tem um estilo único, e meu foco é valorizar isso com técnica e atenção aos detalhes. Do degradê ao corte alinhado, entrego sempre o melhor.',
      instagramUrl: 'https://www.instagram.com/old_rafael_barber_/',
      images: [
        { src: '/imgs/rafa-corte1.jpg', caption: 'Corte moderno, alinhado com a sua identidade.', link: 'https://www.instagram.com/p/C32v24ZudCI/?img_index=1' },
        { src: '/imgs/rafa-corte2.jpg', caption: 'Estilo e precisão em cada detalhe do corte.', link: 'https://www.instagram.com/p/DAYwuaJpZQU/?img_index=1' },
        { src: '/imgs/rafa-corte3.png', caption: 'Do clássico ao atual, sempre com excelência no atendimento.', link: 'https://www.instagram.com/p/CahikGmuEo2/?img_index=1' }
      ]
    },
    {
      name: 'Raul',
      quote: 'Gosto de transformar cada corte em uma experiência. Trabalhar com precisão, escutar o cliente e cuidar do visual fazem parte do que me move na barbearia.',
      instagramUrl: 'https://www.instagram.com/raulrodasbarber/',
      images: [
        { src: '/imgs/raul-corte1.jpg', caption: 'Visual renovado com técnica e personalidade.', link: 'https://www.instagram.com/p/CmNN7PZuG5x/' },
        { src: '/imgs/raul-corte2.png', caption: 'Seu estilo valorizado com acabamento profissional.', link: 'https://www.instagram.com/p/CJbaa-PDl7q/' },
        { src: '/imgs/raul-corte3.jpg', caption: 'Corte bem feito é autoestima em dia.', link: 'https://www.instagram.com/p/CJUizNVjxS7/' }
      ]
    },
    {
      name: 'Naka',
      quote: 'Renovar a autoestima dos clientes é sempre um prazer. Tenho carinho especial por cortes em cabelos cacheados, mas o clássico bem feito também tem meu respeito e dedicação.',
      instagramUrl: 'https://www.instagram.com/nakazatobarber/',
      images: [
        { src: '/imgs/naka-corte1.jpg', caption: 'Corte infantil com cuidado, paciência e um toque de estilo para os pequenos.', link: 'https://www.instagram.com/p/DFdzbgoxzd8/?img_index=1' },
        { src: '/imgs/naka-corte2.jpg', caption: 'Sobrancelha alinhada realça o olhar e valoriza o rosto. Cuidamos de cada detalhe.', link: 'https://www.instagram.com/p/CypbBjXu5kt/?img_index=1' },
        { src: '/imgs/naka-corte3.jpg', caption: 'Corte pensado para valorizar a textura natural dos fios. Respeito, técnica e estilo para cabelos cacheados e crespos.', link: 'https://www.instagram.com/p/DEs_FuUyXGG/?img_index=1' }
      ]
    }
  ];

  return (
    <section id="resultados" className="resultados">
      <h2>Confira o trabalho dos nossos profissionais - Resultados Reais</h2>
      <div className="portfolio-barbeiros">
        {barbersData.map(barber => (
          <BarberPortfolio
            key={barber.name}
            name={barber.name}
            quote={barber.quote}
            images={barber.images}
            instagramUrl={barber.instagramUrl}
          />
        ))}
      </div>
    </section>
  )
} 