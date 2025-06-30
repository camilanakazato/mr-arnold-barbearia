import { useState, useEffect } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import VideoHero from '../components/VideoHero'
import Hero from '../components/Hero'
import Barbers from '../components/Barbers'
import Services from '../components/Services'
import Products from '../components/Products'
import Results from '../components/Results'
import Tips from '../components/Tips'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isHeaderVisible, setIsHeaderVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight - 100) {
        setIsHeaderVisible(true)
      } else {
        setIsHeaderVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

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
        <title>Mr Arnold Barbearia</title>
        <meta name="description" content="Mr Arnold Barbearia em Campo Grande, MS. Tradição, estilo e cuidado para você se sentir único." />
        <link rel="icon" href="/imgs/logo-barbearia.png" />
      </Head>

      <div className="app">
        <Header 
          onMenuToggle={() => setIsSidebarOpen(true)} 
          isVisible={isHeaderVisible}
        />
        
        <Sidebar 
          isOpen={isSidebarOpen} 
          onClose={() => setIsSidebarOpen(false)}
          onNavigate={scrollToSection}
        />

        <VideoHero isScrolled={isHeaderVisible} />
        
        <main>
          <section id="inicio" className="hero">
            <Hero />
          </section>
          
          <Services />
          <Barbers />
          <Products />
          <Results />
          <Tips />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  )
} 