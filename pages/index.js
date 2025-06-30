import { useState, useEffect } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import VideoHero from '../components/VideoHero'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Barbers from '../components/Barbers'
import Products from '../components/Products'
import Results from '../components/Results'
import Tips from '../components/Tips'
import Contact from '../components/Contact'
import Sidebar from '../components/Sidebar'

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  // Smooth scroll para âncoras
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <Head>
        <title>Mr Arnold Barbearia - Tradição, Estilo e Cuidado</title>
        <meta name="description" content="Barbearia Mr Arnold em Campo Grande/MS. Cortes modernos, barba bem feita e produtos de qualidade. Agende seu horário online!" />
      </Head>

      <div className="app">
        <Header onMenuToggle={() => setIsSidebarOpen(true)} />
        
        <Sidebar 
          isOpen={isSidebarOpen} 
          onClose={() => setIsSidebarOpen(false)}
          onNavigate={scrollToSection}
        />

        <VideoHero />
        
        <main>
          <section id="inicio" className="hero">
            <Hero />
          </section>

          <section id="servicos">
            <Services />
          </section>

          <section id="barbeiros">
            <Barbers />
          </section>

          <section id="produtos" className="bg-verde">
            <Products />
          </section>

          <section id="resultados" className="bg-gradiente-cinza">
            <Results />
          </section>

          <section id="dicas" className="bg-gradiente-verde">
            <Tips />
          </section>

          <section id="contato">
            <Contact />
          </section>
        </main>
      </div>
    </>
  )
} 