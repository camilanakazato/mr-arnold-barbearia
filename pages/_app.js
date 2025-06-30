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
      </Head>
      <Component {...pageProps} />
    </>
  )
} 