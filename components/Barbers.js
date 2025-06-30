import Image from 'next/image'

export default function Barbers() {
  return (
    <section id="barbeiros" className="barbeiros">
      <h2>Nossos Profissionais</h2>
      <div className="barbeiros-lista">
        <div className="barbeiro-card">
          <Image src="/imgs/rafa-barber.jpg" alt="Barbeiro Rafael" width={300} height={300} />
          <h3>Rafael</h3>
          <p>Atendimento de qualidade com técnica e um toque personalizado para você.</p>
          <a href="https://www.instagram.com/old_rafael_barber_/" target="_blank" rel="noopener noreferrer" className="instagram-link">@old_rafael_barber_</a>
        </div>
        <div className="barbeiro-card">
          <Image src="/imgs/raul-barber.jpg" alt="Barbeiro Raul" width={300} height={300} />
          <h3>Raul</h3>
          <p>Cortes e barbas com excelência, técnica e atenção aos seus detalhes.</p>
          <a href="https://www.instagram.com/raulrodasbarber/" target="_blank" rel="noopener noreferrer" className="instagram-link">@raulrodasbarber</a>
        </div>
        <div className="barbeiro-card">
          <Image src="/imgs/naka-barber.jpg" alt="Barbeira Naka" width={300} height={300} />
          <h3>Naka</h3>
          <p>Precisão, delicadeza e estilo em cada atendimento, pensado especialmente para você.</p>
          <a href="https://www.instagram.com/nakazatobarber/" target="_blank" rel="noopener noreferrer" className="instagram-link">@nakazatobarber</a>
        </div>
      </div>
    </section>
  )
} 