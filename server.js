import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import nodemailer from 'nodemailer';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

let db;
(async () => {
  db = await open({
    filename: './mrarnold.db',
    driver: sqlite3.Database
  });
  
  // Drop e recria a tabela desconto_emails
  await db.exec(`DROP TABLE IF EXISTS desconto_emails`);
  await db.exec(`CREATE TABLE desconto_emails (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT NOT NULL,
    telefone TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )`);

  await db.exec(`CREATE TABLE IF NOT EXISTS contatos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    email TEXT NOT NULL,
    telefone TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )`);
  await db.exec(`CREATE TABLE IF NOT EXISTS jaboque_descontos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    email TEXT NOT NULL,
    telefone TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )`);
})();

// Configuração do transporte de email (ajuste para seu provedor)
const transporter = nodemailer.createTransport({
  service: 'gmail', // ou outro serviço
  auth: {
    user: 'noreplymrarnold@gmail.com', // novo email para envio
    pass: 'wdty iqll zkec sprl' // senha de app fornecida
  }
});

app.post('/api/desconto', async (req, res) => {
  const { email, telefone } = req.body;
  if (!email || !telefone) return res.status(400).json({ error: 'Email e telefone são obrigatórios.' });
  try {
    await db.run('INSERT INTO desconto_emails (email, telefone) VALUES (?, ?)', [email, telefone]);
    // Envia apenas o cupom de corte
    await transporter.sendMail({
      from: 'noreplymrarnold@gmail.com',
      to: email,
      subject: 'Seu desconto especial na Barbearia Mr. Arnold!',
      text: 'Parabéns! 🎉\nVocê acaba de ganhar um desconto especial na Barbearia Mr. Arnold.\nApresente o cartão em anexo na sua próxima visita e aproveite!',
      attachments: [
        {
          filename: 'cupomCorte-desconto.jpg',
          path: './imgs/cupomCorte-desconto.jpg',
          cid: 'cupomcorte@mrarnold'
        }
      ]
    });
    res.status(200).json({ success: true });
  } catch (err) {
    console.error('Erro ao salvar desconto ou enviar email:', err);
    res.status(500).json({ error: 'Erro ao salvar dados ou enviar email: ' + err.message });
  }
});

app.post('/api/contato', async (req, res) => {
  const { nome, email, telefone } = req.body;
  if (!nome || !email || !telefone) return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
  try {
    await db.run('INSERT INTO contatos (nome, email, telefone) VALUES (?, ?, ?)', [nome, email, telefone]);
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao salvar contato.' });
  }
});

app.post('/api/jaboque', async (req, res) => {
  const { nome, email, telefone } = req.body;
  if (!nome || !email || !telefone) return res.status(400).json({ error: 'Nome, email e telefone são obrigatórios.' });
  try {
    await db.run('INSERT INTO jaboque_descontos (nome, email, telefone) VALUES (?, ?, ?)', [nome, email, telefone]);
    // Envia apenas o cupom Jaboque
    await transporter.sendMail({
      from: 'noreplymrarnold@gmail.com',
      to: email,
      subject: 'Seu desconto especial em produtos Jaboque!',
      text: 'Parabéns! 🎉\nVocê acaba de ganhar um desconto especial na Barbearia Mr. Arnold.\nApresente o cartão em anexo na sua próxima visita e aproveite!',
      attachments: [
        {
          filename: 'cupomJaboque-desconto.jpg',
          path: './imgs/cupomJaboque-desconto.jpg',
          cid: 'cupomjaboque@mrarnold'
        }
      ]
    });
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao salvar desconto Jaboque ou enviar email: ' + err.message });
  }
});

// Endpoint para listar registros (para debug)
app.get('/api/desconto', async (req, res) => {
  try {
    const registros = await db.all('SELECT * FROM desconto_emails ORDER BY created_at DESC');
    res.status(200).json(registros);
  } catch (err) {
    console.error('Erro ao listar registros:', err);
    res.status(500).json({ error: 'Erro ao listar registros: ' + err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
}); 