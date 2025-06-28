import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Contact() {
  return (
    <section className="contato">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Localização & Atendimento
      </motion.h2>
      
      <div className="contato-info">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p><strong>Endereço:</strong> Rua Dr Arthur Jorge, 1054 - Centro, Campo Grande/MS</p>
          <p><strong>Telefone:</strong> (67) 99894-2928</p>
          <p><strong>Email:</strong> mrarnoldbarbearia@gmail.com</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="contato-redes"
        >
          <motion.a
            href="https://api.whatsapp.com/send/?phone=5567992823631&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="contato-link whatsapp"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src="/imgs/whatsapp-icon.png"
              alt="WhatsApp"
              width={24}
              height={24}
            />
            Fale conosco por aqui!
          </motion.a>
          
          <motion.a
            href="https://www.instagram.com/mrarnoldbarbearia/"
            target="_blank"
            rel="noopener noreferrer"
            className="contato-link instagram"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src="/imgs/instagram-contato-icon.png"
              alt="Instagram"
              width={24}
              height={24}
            />
            Segue a gente no Instagram!
            <br />
            <span className="contato-descricao">
              Tem corte novo, dica de cuidado e promoção que só quem acompanha aproveita.
            </span>
          </motion.a>
        </motion.div>
      </div>
      
      <motion.div
        className="horario-funcionamento"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <h3>Horário de Funcionamento</h3>
        <div className="horarios">
          <div className="horario-item">
            <span className="dia">Segunda a Sexta:</span>
            <span className="horario">08:00 - 19:00</span>
          </div>
          <div className="horario-item">
            <span className="dia">Sábado:</span>
            <span className="horario">08:00 - 18:00</span>
          </div>
          <div className="horario-item">
            <span className="dia">Domingo:</span>
            <span className="horario">Fechado</span>
          </div>
        </div>
      </motion.div>
    </section>
  )
} 