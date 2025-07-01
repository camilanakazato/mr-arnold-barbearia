import Image from 'next/image'

const BarberInstaCard = ({ name, avatar, instagram, bio, images, instagramUrl }) => (
  <div className="barber-insta-card">
    <div className="barber-insta-header">
      <div className="barber-insta-avatar">
        <Image src={avatar} alt={name} width={72} height={72} />
      </div>
      <div className="barber-insta-info">
        <div className="barber-insta-name">{name}</div>
        <div className="barber-insta-username">@{instagram}</div>
      </div>
    </div>
    <div className="barber-insta-bio">{bio}</div>
    <div className="barber-insta-feed">
      {images.map((img, idx) => (
        <a href={img.link} target="_blank" rel="noopener noreferrer" key={idx} className="barber-insta-feed-photo-link">
          <Image src={img.src} alt={`${name} - Corte ${idx + 1}`} width={110} height={110} className="barber-insta-feed-photo" />
        </a>
      ))}
    </div>
    <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="barber-insta-btn">
      Ver mais no Instagram
    </a>
  </div>
)

export default function Results() {
  const barbersData = [
    {
      name: 'Rafael',
      avatar: '/imgs/rafa-barber.jpg',
      instagram: 'old_rafael_barber_',
      bio: 'Cada cliente tem um estilo único, e meu foco é valorizar isso com técnica e atenção aos detalhes. Do degradê ao corte alinhado, entrego sempre o melhor.',
      instagramUrl: 'https://www.instagram.com/old_rafael_barber_/',
      images: [
        { src: '/imgs/rafa-corte1.jpg', link: 'https://www.instagram.com/p/C32v24ZudCI/?img_index=1' },
        { src: '/imgs/rafa-corte2.jpg', link: 'https://www.instagram.com/p/DAYwuaJpZQU/?img_index=1' },
        { src: '/imgs/rafa-corte3.png', link: 'https://www.instagram.com/p/CahikGmuEo2/?img_index=1' }
      ]
    },
    {
      name: 'Raul',
      avatar: '/imgs/raul-barber.jpg',
      instagram: 'raulrodasbarber',
      bio: 'Gosto de transformar cada corte em uma experiência. Trabalhar com precisão, escutar o cliente e cuidar do visual fazem parte do que me move na barbearia.',
      instagramUrl: 'https://www.instagram.com/raulrodasbarber/',
      images: [
        { src: '/imgs/raul-corte1.jpg', link: 'https://www.instagram.com/p/CmNN7PZuG5x/' },
        { src: '/imgs/raul-corte2.png', link: 'https://www.instagram.com/p/CJbaa-PDl7q/' },
        { src: '/imgs/raul-corte3.jpg', link: 'https://www.instagram.com/p/CJUizNVjxS7/' }
      ]
    },
    {
      name: 'Naka',
      avatar: '/imgs/naka-barber.jpg',
      instagram: 'nakazatobarber',
      bio: 'Renovar a autoestima dos clientes é sempre um prazer. Tenho carinho especial por cortes em cabelos cacheados, mas o clássico bem feito também tem meu respeito e dedicação.',
      instagramUrl: 'https://www.instagram.com/nakazatobarber/',
      images: [
        { src: '/imgs/naka-corte1.jpg', link: 'https://www.instagram.com/p/DFdzbgoxzd8/?img_index=1' },
        { src: '/imgs/naka-corte2.jpg', link: 'https://www.instagram.com/p/CypbBjXu5kt/?img_index=1' },
        { src: '/imgs/naka-corte3.jpg', link: 'https://www.instagram.com/p/DEs_FuUyXGG/?img_index=1' }
      ]
    }
  ]

  return (
    <section id="resultados" className="resultados">
      <h2>Confira o trabalho dos nossos profissionais - Resultados Reais</h2>
      <div className="barbers-insta-cards-row">
        {barbersData.map(barber => (
          <BarberInstaCard key={barber.name} {...barber} />
        ))}
      </div>
    </section>
  )
} 