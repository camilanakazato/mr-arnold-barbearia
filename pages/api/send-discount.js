import nodemailer from 'nodemailer';
import { supabase } from '../../lib/supabase';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  const { tipo, nome, email, telefone } = req.body;
  if (!email || !telefone || (tipo === 'jaboque' && !nome)) {
    return res.status(400).json({ error: 'Campos obrigatórios faltando.' });
  }

  // Configuração do transporte de email
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'noreplymrarnold@gmail.com',
      pass: 'wdty iqll zkec sprl',
    },
  });

  try {
    if (tipo === 'jaboque') {
      const { error } = await supabase
        .from('jaboque_descontos')
        .insert([{ nome, email, telefone }]);
      
      if (error) throw error;

      await transporter.sendMail({
        from: 'noreplymrarnold@gmail.com',
        to: email,
        subject: 'Seu desconto especial em produtos Jaboque!',
        text: 'Parabéns! 🎉\nVocê acaba de ganhar 15% de desconto em produtos Jaboque na Barbearia Mr. Arnold. Apresente este email na sua próxima visita!',
        attachments: [
          {
            filename: 'cupomJaboque-desconto.jpg',
            path: './public/imgs/cupomJaboque-desconto.jpg',
            cid: 'cupomjaboque@mrarnold',
          },
        ],
      });
    } else {
      const { error } = await supabase
        .from('desconto_emails')
        .insert([{ email, telefone }]);
      
      if (error) throw error;

      await transporter.sendMail({
        from: 'noreplymrarnold@gmail.com',
        to: email,
        subject: 'Seu desconto especial na Barbearia Mr. Arnold!',
        text: 'Parabéns! 🎉\nVocê acaba de ganhar 10% de desconto no seu primeiro corte na Barbearia Mr. Arnold. Apresente este email na sua próxima visita!',
        attachments: [
          {
            filename: 'cupomCorte-desconto.jpg',
            path: './public/imgs/cupomCorte-desconto.jpg',
            cid: 'cupomcorte@mrarnold',
          },
        ],
      });
    }
    res.status(200).json({ success: true });
  } catch (err) {
    console.error('Erro ao salvar desconto ou enviar email:', err);
    res.status(500).json({ error: 'Erro ao salvar dados ou enviar email: ' + err.message });
  }
} 