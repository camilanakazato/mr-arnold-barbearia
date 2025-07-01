import nodemailer from 'nodemailer';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  const { tipo, nome, email, telefone } = req.body;
  if (!email || !telefone || (tipo === 'jaboque' && !nome)) {
    return res.status(400).json({ error: 'Campos obrigatórios faltando.' });
  }

  // Caminho absoluto do banco
  const dbPath = path.join(process.cwd(), 'backup', 'mrarnold.db');
  const db = await open({ filename: dbPath, driver: sqlite3.Database });

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
      await db.run('INSERT INTO jaboque_descontos (nome, email, telefone) VALUES (?, ?, ?)', [nome, email, telefone]);
      await transporter.sendMail({
        from: 'noreplymrarnold@gmail.com',
        to: email,
        subject: 'Seu desconto especial em produtos Jaboque!',
        text: 'Parabéns! 🎉\nVocê acaba de ganhar 15% de desconto em produtos Jaboque na Barbearia Mr. Arnold. Apresente este email na sua próxima visita!',
        attachments: [
          {
            filename: 'cupomJaboque-desconto.jpg',
            path: path.join(process.cwd(), 'public', 'imgs', 'cupomJaboque-desconto.jpg'),
            cid: 'cupomjaboque@mrarnold',
          },
        ],
      });
    } else {
      await db.run('INSERT INTO desconto_emails (email, telefone) VALUES (?, ?)', [email, telefone]);
      await transporter.sendMail({
        from: 'noreplymrarnold@gmail.com',
        to: email,
        subject: 'Seu desconto especial na Barbearia Mr. Arnold!',
        text: 'Parabéns! 🎉\nVocê acaba de ganhar 10% de desconto no seu primeiro corte na Barbearia Mr. Arnold. Apresente este email na sua próxima visita!',
        attachments: [
          {
            filename: 'cupomCorte-desconto.jpg',
            path: path.join(process.cwd(), 'public', 'imgs', 'cupomCorte-desconto.jpg'),
            cid: 'cupomcorte@mrarnold',
          },
        ],
      });
    }
    res.status(200).json({ success: true });
  } catch (err) {
    console.error('Erro ao salvar desconto ou enviar email:', err);
    res.status(500).json({ error: 'Erro ao salvar dados ou enviar email: ' + err.message });
  } finally {
    await db.close();
  }
} 