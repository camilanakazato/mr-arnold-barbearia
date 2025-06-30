import Image from 'next/image';
import Slider from 'react-slick';

export default function Tips() {
  const tips = [
    {
      title: 'Dica 1: Hidratação da Barba',
      image: '/imgs/dica1.jpg',
      legend: 'Use óleos e balms específicos para barba. Eles hidratam os fios e a pele, evitam a coceira e deixam a barba mais macia e alinhada.'
    },
    {
      title: 'Dica 2: Escovação Correta',
      image: '/imgs/dica2.jpg',
      legend: 'Penteie sua barba diariamente. Isso ajuda a desembaraçar, remover pelos soltos e treinar os fios para crescerem na direção certa.'
    },
    {
      title: 'Dica 3: Lavagem Adequada',
      image: '/imgs/dica3.jpg',
      legend: 'Lave a barba com shampoo próprio para ela, de 2 a 3 vezes por semana. Shampoos comuns podem ressecar a pele do rosto.'
    },
    {
      title: 'Dica 4: Apare Regularmente',
      image: '/imgs/dica4.jpg',
      legend: 'Mesmo que esteja deixando a barba crescer, aparar as pontas e definir o formato a cada 2-3 semanas ajuda a manter um visual limpo e saudável.'
    },
    {
      title: 'Dica 5: Cuidado com a Pele',
      image: '/imgs/dica5.jpg',
      legend: 'Não se esqueça da pele sob a barba. A esfoliação semanal remove células mortas e previne pelos encravados, garantindo um crescimento saudável.'
    }
  ];

  const sliderSettings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <section className="dicas">
      <h2>Dicas de Cuidado</h2>
      
      <div className="dicas-carousel-container">
        <Slider {...sliderSettings}>
          {tips.map((tip, index) => (
            <div key={index}>
              <div className="dica-slide">
                <h3 className="dica-titulo">{tip.title}</h3>
                <Image
                  src={tip.image}
                  alt={tip.title}
                  width={400}
                  height={300}
                  className="dica-img"
                />
                <p className="dica-legenda">{tip.legend}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
} 