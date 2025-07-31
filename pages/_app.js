import Head from 'next/head'
import '../styles/globals.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Mr Arnold Barbearia - Tradição, Estilo e Cuidado</title>
        <meta name="description" content="Barbearia Mr Arnold em Campo Grande/MS. Cortes modernos, barba bem feita e produtos de qualidade. Agende seu horário online!" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="barbearia, corte masculino, barba, Campo Grande, MS, Mr Arnold" />
        <meta name="author" content="Mr Arnold Barbearia" />
        
        {/* Favicon */}
        <link rel="icon" type="image/png" href="/imgs/logo-barbearia.png" />
        <link rel="apple-touch-icon" href="/imgs/logo-barbearia.png" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Mr Arnold Barbearia" />
        <meta property="og:description" content="Tradição, estilo e cuidado para você se sentir único." />
        <meta property="og:image" content="/imgs/logo-barbearia.png" />
        <meta property="og:url" content="https://mrarnold.com.br" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mr Arnold Barbearia" />
        <meta name="twitter:description" content="Tradição, estilo e cuidado para você se sentir único." />
        <meta name="twitter:image" content="/imgs/logo-barbearia.png" />
        
        {/* Preconnect para performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
        
        {/* Preload crítico */}
        <link rel="preload" href="/videos/video-inicio.mp4" as="video" type="video/mp4" />



        {/* Script de aplicação forçada para Galaxy Fold */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Função para aplicar estilos forçados
              function applyGalaxyFoldStyles() {
                // Verificar se já está sendo executada para evitar duplicação
                if (window.galaxyFoldApplying) {
                  return;
                }
                window.galaxyFoldApplying = true;
                
                // Detecção com tolerância para decimais
                const isGalaxyFold = Math.abs(window.innerWidth - 690) <= 1 && Math.abs(window.innerHeight - 829) <= 1;
                
                if (isGalaxyFold) {
                  // Verificar se já aplicou os estilos para evitar reaplicação
                  const existingCards = document.querySelectorAll('.produto-card');
                  if (existingCards.length > 0) {
                    const firstCard = existingCards[0];
                    const currentMaxWidth = window.getComputedStyle(firstCard).maxWidth;
                    if (currentMaxWidth === '280px') {
                      return; // Já aplicou os estilos, não precisa reaplicar
                    }
                  }
                  
                  // Aplicar estilos nos cards de produtos (incluindo o primeiro) - APENAS GALAXY FOLD
                  const cards = document.querySelectorAll('.galaxy-fold-folded .produto-card');
                  cards.forEach(card => {
                    card.style.setProperty('width', '100%', 'important');
                    card.style.setProperty('max-width', '280px', 'important');
                    card.style.setProperty('min-height', '320px', 'important');
                    card.style.setProperty('background-color', '#1a2e1a', 'important');
                    card.style.setProperty('border', '2px solid #00ff00', 'important');
                    card.style.setProperty('border-radius', '12px', 'important');
                    card.style.setProperty('display', 'flex', 'important');
                    card.style.setProperty('flex-direction', 'column', 'important');
                    card.style.setProperty('align-items', 'center', 'important');
                    card.style.setProperty('margin', '0 auto', 'important');
                    card.style.setProperty('padding', '1rem', 'important');
                    card.style.setProperty('box-sizing', 'border-box', 'important');
                    /* FORÇAR POSIÇÃO CENTRALIZADA IDÊNTICA */
                    card.style.setProperty('display', 'flex', 'important');
                    card.style.setProperty('justify-content', 'center', 'important');
                    card.style.setProperty('align-items', 'center', 'important');
                  });
                  
                  // Forçar centralização nos slides - APENAS GALAXY FOLD
                  const slides = document.querySelectorAll('.galaxy-fold-folded .swiper-slide');
                  slides.forEach(slide => {
                    slide.style.setProperty('margin', '0', 'important');
                    slide.style.setProperty('padding', '0', 'important');
                    slide.style.setProperty('gap', '0', 'important');
                    slide.style.setProperty('width', '100%', 'important');
                    slide.style.setProperty('max-width', '100%', 'important');
                    slide.style.setProperty('display', 'flex', 'important');
                    slide.style.setProperty('justify-content', 'center', 'important');
                    slide.style.setProperty('align-items', 'center', 'important');
                  });
                  
                  // Forçar configurações do carrossel - APENAS GALAXY FOLD
                  const carouselContainer = document.querySelector('.galaxy-fold-folded .produtos-carousel-outer');
                  if (carouselContainer) {
                    carouselContainer.style.setProperty('max-width', '400px', 'important');
                    carouselContainer.style.setProperty('width', '100%', 'important');
                    carouselContainer.style.setProperty('margin', '0 auto', 'important');
                    carouselContainer.style.setProperty('padding', '0 1rem', 'important');
                    carouselContainer.style.setProperty('box-sizing', 'border-box', 'important');
                  }
                  
                  // Forçar display dos cards de produtos
                  const produtoCards = document.querySelectorAll('.produto-card');
                  produtoCards.forEach(card => {
                    card.style.setProperty('display', 'block', 'important');
                    card.style.setProperty('width', '100%', 'important');
                    card.style.setProperty('max-width', '100%', 'important');
                    card.style.setProperty('margin', '0', 'important');
                    card.style.setProperty('padding', '1rem', 'important');
                    card.style.setProperty('box-sizing', 'border-box', 'important');
                    card.style.setProperty('border', '2px solid #2ecc40', 'important');
                    card.style.setProperty('border-radius', '12px', 'important');
                    card.style.setProperty('background', '#1a2e1a', 'important');
                  });
                  
                  // Remover elementos de navegação
                  const navElements = document.querySelectorAll('.swiper-button-next, .swiper-button-prev, .swiper-pagination');
                  navElements.forEach(element => {
                    element.style.setProperty('display', 'none', 'important');
                    element.style.setProperty('visibility', 'hidden', 'important');
                    element.style.setProperty('opacity', '0', 'important');
                    element.style.setProperty('pointer-events', 'none', 'important');
                  });
                }
              }
              
              // Função para aplicar estilos específicos para Asus Zenbook Fold
              function applyAsusZenbookFoldStyles() {
                const isAsusZenbookFold = Math.abs(window.innerWidth - 853) <= 1 && Math.abs(window.innerHeight - 1280) <= 1;
                if (isAsusZenbookFold) {
                  const contatoContainer = document.querySelector('.contato-container');
                  const contatoInfo = document.querySelector('.contato-info');
                  const contatoSection = document.querySelector('.contato-cards-section');
                  
                  if (contatoContainer) {
                    contatoContainer.style.setProperty('display', 'flex', 'important');
                    contatoContainer.style.setProperty('flex-direction', 'column', 'important');
                    contatoContainer.style.setProperty('align-items', 'center', 'important');
                    contatoContainer.style.setProperty('gap', '3rem', 'important');
                  }
                  
                  if (contatoInfo) {
                    contatoInfo.style.setProperty('order', '1', 'important');
                    contatoInfo.style.setProperty('margin-bottom', '2rem', 'important');
                  }
                  
                  if (contatoSection) {
                    // Aplicar estilos inline diretamente
                    contatoSection.style.cssText = 'order: 2 !important; margin: 0 auto 12rem auto !important; margin-top: 12rem !important; justify-content: flex-start !important; position: relative !important; top: 12rem !important; z-index: 9999 !important;';
                    
                    // Também aplicar via setProperty como backup
                    contatoSection.style.setProperty('order', '2', 'important');
                    contatoSection.style.setProperty('margin', '0 auto 12rem auto', 'important');
                    contatoSection.style.setProperty('margin-top', '12rem', 'important');
                    contatoSection.style.setProperty('justify-content', 'flex-start', 'important');

                    contatoSection.style.setProperty('position', 'relative', 'important');
                    contatoSection.style.setProperty('top', '12rem', 'important');
                    contatoSection.style.setProperty('z-index', '9999', 'important');
                  }
                  
                  // Aplicar margem nos cards individuais
                  const horarioCard = document.querySelector('.horario-card');
                  const historiaCard = document.querySelector('.historia-card');
                  
                  if (horarioCard) {
                    horarioCard.style.cssText = 'margin-top: 6rem !important; position: relative !important; top: 6rem !important; z-index: 9999 !important;';
                    horarioCard.style.setProperty('margin-top', '6rem', 'important');
                    horarioCard.style.setProperty('position', 'relative', 'important');
                    horarioCard.style.setProperty('top', '6rem', 'important');
                    horarioCard.style.setProperty('z-index', '9999', 'important');
                  }
                  
                  if (historiaCard) {
                    historiaCard.style.cssText = 'margin-top: 6rem !important; position: relative !important; top: 6rem !important; z-index: 9999 !important;';
                    historiaCard.style.setProperty('margin-top', '6rem', 'important');
                    historiaCard.style.setProperty('position', 'relative', 'important');
                    historiaCard.style.setProperty('top', '6rem', 'important');
                    historiaCard.style.setProperty('z-index', '9999', 'important');
                  }
                }
              }
              
              // Aplicar estilos quando a página carregar
              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', () => {
                  applyGalaxyFoldStyles();
                  applyAsusZenbookFoldStyles();
                });
              } else {
                applyGalaxyFoldStyles();
                applyAsusZenbookFoldStyles();
              }
              
              // Verificar se já foi inicializado para evitar duplicação
              if (window.galaxyFoldInitialized) {
                return;
              }
              window.galaxyFoldInitialized = true;
              
              // Aplicar estilos quando a janela redimensionar (com debounce)
              window.addEventListener('resize', () => {
                if (window.resizeTimeoutGalaxyFold) {
                  clearTimeout(window.resizeTimeoutGalaxyFold);
                }
                window.resizeTimeoutGalaxyFold = setTimeout(() => {
                  applyGalaxyFoldStyles();
                  applyAsusZenbookFoldStyles();
                }, 1000);
              });
              
              // Aplicar estilos periodicamente para garantir (menos frequente)
              setInterval(() => {
                applyGalaxyFoldStyles();
                applyAsusZenbookFoldStyles();
              }, 10000);
              
              // Verificação mais frequente para Asus Zenbook Fold
              setInterval(applyAsusZenbookFoldStyles, 1000);
              
              // Forçar aplicação a cada 500ms para garantir
              setInterval(() => {
                const isAsusZenbookFold = Math.abs(window.innerWidth - 853) <= 1 && Math.abs(window.innerHeight - 1280) <= 1;
                if (isAsusZenbookFold) {
                  const contatoSection = document.querySelector('.contato-cards-section');
                  const horarioCard = document.querySelector('.horario-card');
                  const historiaCard = document.querySelector('.historia-card');
                  
                  if (contatoSection) {
                    contatoSection.style.cssText = 'margin: 0 auto 12rem auto !important; margin-top: 12rem !important; outline: 5px solid red !important; position: relative !important; top: 12rem !important; z-index: 9999 !important;';
                    contatoSection.style.setProperty('margin', '0 auto 12rem auto', 'important');
                    contatoSection.style.setProperty('margin-top', '12rem', 'important');
                    contatoSection.style.setProperty('outline', '5px solid red', 'important');
                    contatoSection.style.setProperty('position', 'relative', 'important');
                    contatoSection.style.setProperty('top', '12rem', 'important');
                    contatoSection.style.setProperty('z-index', '9999', 'important');
                  }
                  
                  if (horarioCard) {
                    horarioCard.style.cssText = 'margin-top: 6rem !important; outline: 5px solid blue !important; position: relative !important; top: 6rem !important; z-index: 9999 !important;';
                    horarioCard.style.setProperty('margin-top', '6rem', 'important');
                    horarioCard.style.setProperty('outline', '5px solid blue', 'important');
                    horarioCard.style.setProperty('position', 'relative', 'important');
                    horarioCard.style.setProperty('top', '6rem', 'important');
                    horarioCard.style.setProperty('z-index', '9999', 'important');
                  }
                  
                  if (historiaCard) {
                    historiaCard.style.cssText = 'margin-top: 6rem !important; outline: 5px solid blue !important; position: relative !important; top: 6rem !important; z-index: 9999 !important;';
                    historiaCard.style.setProperty('margin-top', '6rem', 'important');
                    historiaCard.style.setProperty('outline', '5px solid blue', 'important');
                    historiaCard.style.setProperty('position', 'relative', 'important');
                    historiaCard.style.setProperty('top', '6rem', 'important');
                    historiaCard.style.setProperty('z-index', '9999', 'important');
                  }
                }
              }, 500);
            `
          }}
        />
        
        {/* Script de debug separado */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Funções de debug disponíveis globalmente
              window.debugAsusZenbookFold = function() {
                console.log('=== DEBUG ASUS ZENBOOK FOLD ===');
                console.log('Dimensões da tela:', window.innerWidth, 'x', window.innerHeight);
                
                const isAsusZenbookFold = Math.abs(window.innerWidth - 853) <= 1 && Math.abs(window.innerHeight - 1280) <= 1;
                console.log('É Asus Zenbook Fold?', isAsusZenbookFold);
                
                if (isAsusZenbookFold) {
                  console.log('✅ Dimensão detectada corretamente');
                  
                  const contatoSection = document.querySelector('.contato-cards-section');
                  const horarioCard = document.querySelector('.horario-card');
                  const historiaCard = document.querySelector('.historia-card');
                  
                  console.log('Elementos encontrados:');
                  console.log('- contato-cards-section:', contatoSection);
                  console.log('- horario-card:', horarioCard);
                  console.log('- historia-card:', historiaCard);
                  
                  if (contatoSection) {
                    const computedStyle = window.getComputedStyle(contatoSection);
                    console.log('Estilos aplicados em .contato-cards-section:');
                    console.log('- margin-top:', computedStyle.marginTop);
                    console.log('- outline:', computedStyle.outline);
                  }
                  
                  if (horarioCard) {
                    const computedStyle = window.getComputedStyle(horarioCard);
                    console.log('Estilos aplicados em .horario-card:');
                    console.log('- margin-top:', computedStyle.marginTop);
                    console.log('- outline:', computedStyle.outline);
                  }
                  
                  if (historiaCard) {
                    const computedStyle = window.getComputedStyle(historiaCard);
                    console.log('Estilos aplicados em .historia-card:');
                    console.log('- margin-top:', computedStyle.marginTop);
                    console.log('- outline:', computedStyle.outline);
                  }
                } else {
                  console.log('❌ Dimensão não detectada como Asus Zenbook Fold');
                  console.log('Dimensão atual:', window.innerWidth, 'x', window.innerHeight);
                  console.log('Dimensão esperada: 853 x 1280');
                }
                
                console.log('=== FIM DEBUG ===');
              };
              
              window.forceAsusZenbookFoldStyles = function() {
                console.log('🔧 FORÇANDO APLICAÇÃO DOS ESTILOS ASUS ZENBOOK FOLD');
                
                const contatoSection = document.querySelector('.contato-cards-section');
                const horarioCard = document.querySelector('.horario-card');
                const historiaCard = document.querySelector('.historia-card');
                
                if (contatoSection) {
                  contatoSection.style.setProperty('margin-top', '12rem', 'important');
                  console.log('✅ Estilos aplicados em .contato-cards-section');
                } else {
                  console.log('❌ .contato-cards-section não encontrado');
                }
                
                if (horarioCard) {
                  horarioCard.style.setProperty('margin-top', '6rem', 'important');
                  console.log('✅ Estilos aplicados em .horario-card');
                } else {
                  console.log('❌ .horario-card não encontrado');
                }
                
                if (historiaCard) {
                  historiaCard.style.setProperty('margin-top', '6rem', 'important');
                  console.log('✅ Estilos aplicados em .historia-card');
                } else {
                  console.log('❌ .historia-card não encontrado');
                }
                
                console.log('🔧 FIM DA FORÇAÇÃO DOS ESTILOS');
              };
              

            `
          }}
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
} 