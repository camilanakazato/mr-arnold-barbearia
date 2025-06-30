import Image from 'next/image'

export default function Results() {
  return (
    <section className="resultados-reais">
      <h2>Confira o trabalho dos nossos profissionais - <br />Resultados Reais</h2>

      {/* Rafael */}
      <div className="resultados-barbeiro">
        <h3>Rafael</h3>
        <p className="resultados-citacao">"Cada cliente tem um estilo único, e meu foco é valorizar isso com técnica e atenção aos detalhes. Do degradê ao corte alinhado, entrego sempre o melhor."</p>
        <div className="resultados-fotos">
          <div className="resultados-card-foto">
            <Image src="/imgs/rafa-corte1.jpg" alt="Corte por Rafael 1" width={300} height={300} />
          </div>
          <div className="resultados-card-foto">
            <Image src="/imgs/rafa-corte2.jpg" alt="Corte por Rafael 2" width={300} height={300} />
          </div>
          <div className="resultados-card-foto">
            <Image src="/imgs/rafa-corte3.png" alt="Corte por Rafael 3" width={300} height={300} />
          </div>
          <a href="https://www.instagram.com/old_rafael_barber_/" target="_blank" rel="noopener noreferrer" className="resultados-card-instagram">
            <p>Quero conhecer mais sobre o Rafael</p>
            <Image src="/imgs/instagram-icon.png" alt="Instagram" width={50} height={50} />
          </a>
        </div>
      </div>

      {/* Raul */}
      <div className="resultados-barbeiro">
        <h3>Raul</h3>
        <p className="resultados-citacao">"Dedicação total para deixar você com a melhor aparência possível. Cada corte é único e feito com muito carinho."</p>
        <div className="resultados-fotos">
          <div className="resultados-card-foto">
            <Image src="/imgs/raul-corte1.jpg" alt="Corte por Raul 1" width={300} height={300} />
          </div>
          <div className="resultados-card-foto">
            <Image src="/imgs/raul-corte2.png" alt="Corte por Raul 2" width={300} height={300} />
          </div>
          <div className="resultados-card-foto">
            <Image src="/imgs/raul-corte3.jpg" alt="Corte por Raul 3" width={300} height={300} />
          </div>
          <a href="https://www.instagram.com/raulrodasbarber/" target="_blank" rel="noopener noreferrer" className="resultados-card-instagram">
            <p>Quero conhecer mais sobre o Raul</p>
            <Image src="/imgs/instagram-icon.png" alt="Instagram" width={50} height={50} />
          </a>
        </div>
      </div>

      {/* Naka */}
      <div className="resultados-barbeiro">
        <h3>Naka</h3>
        <p className="resultados-citacao">"Renovar a autoestima dos clientes é sempre um prazer. Tenho carinho especial por cortes em cabelos cacheados, mas o clássico bem feito também tem meu respeito e dedicação."</p>
        <div className="resultados-fotos">
          <div className="resultados-card-foto">
            <Image src="/imgs/naka-corte1.jpg" alt="Corte por Naka 1" width={300} height={300} />
          </div>
          <div className="resultados-card-foto">
            <Image src="/imgs/naka-corte2.jpg" alt="Corte por Naka 2" width={300} height={300} />
          </div>
          <div className="resultados-card-foto">
            <Image src="/imgs/naka-corte3.jpg" alt="Corte por Naka 3" width={300} height={300} />
          </div>
          <a href="https://www.instagram.com/nakazatobarber/" target="_blank" rel="noopener noreferrer" className="resultados-card-instagram">
            <p>Quero conhecer mais sobre a Naka</p>
            <Image src="/imgs/instagram-icon.png" alt="Instagram" width={50} height={50} />
          </a>
        </div>
      </div>
    </section>
  )
} 