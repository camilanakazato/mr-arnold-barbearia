import nodemailer from 'nodemailer';
import { supabase } from '../../lib/supabase';
import path from 'path';

export default async function handler(req, res) {
  console.log('=== INÍCIO DA REQUISIÇÃO ===');
  console.log('Método:', req.method);
  console.log('Body:', req.body);
  
  if (req.method !== 'POST') {
    console.log('Erro: Método não permitido');
    return res.status(405).json({ error: 'Método não permitido' });
  }

  const { tipo, nome, email, telefone } = req.body;
  console.log('Dados recebidos:', { tipo, nome, email, telefone });
  
  if (!email || !telefone || (tipo === 'jaboque' && !nome)) {
    console.log('Erro: Campos obrigatórios faltando');
    return res.status(400).json({ error: 'Campos obrigatórios faltando.' });
  }

  // Verificar se as variáveis de ambiente do Supabase estão configuradas
  console.log('Verificando variáveis de ambiente...');
  console.log('NEXT_PUBLIC_SUPABASE_URL:', process.env.NEXT_PUBLIC_SUPABASE_URL ? '✅ Configurada' : '❌ Não configurada');
  console.log('NEXT_PUBLIC_SUPABASE_ANON_KEY:', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? '✅ Configurada' : '❌ Não configurada');
  
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    console.error('Erro: Variáveis de ambiente do Supabase não configuradas');
    return res.status(500).json({ error: 'Configuração do banco de dados não encontrada' });
  }

  // Configuração do transporte de email
  console.log('Configurando transporte de email...');
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'noreplymrarnold@gmail.com',
      pass: 'wdty iqll zkec sprl',
    },
  });

  try {
    console.log('Iniciando processo de envio de cupom:', { tipo, email, telefone });

    if (tipo === 'jaboque') {
      console.log('Tentando inserir dados na tabela jaboque_descontos...');
      const { error: dbError } = await supabase
        .from('jaboque_descontos')
        .insert([{ nome, email, telefone }]);
      
      if (dbError) {
        console.error('Erro ao inserir no banco de dados:', dbError);
        throw new Error(`Erro no banco de dados: ${dbError.message}`);
      }

      console.log('Dados inseridos com sucesso no banco. Enviando email...');
      const mailResult = await transporter.sendMail({
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
      console.log('Email enviado com sucesso:', mailResult.messageId);
    } else {
      console.log('Tentando inserir dados na tabela desconto_emails...');
      const { error: dbError } = await supabase
        .from('desconto_emails')
        .insert([{ email, telefone }]);
      
      if (dbError) {
        console.error('Erro ao inserir no banco de dados:', dbError);
        throw new Error(`Erro no banco de dados: ${dbError.message}`);
      }

      console.log('Dados inseridos com sucesso no banco. Enviando email...');
      const mailResult = await transporter.sendMail({
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
      console.log('Email enviado com sucesso:', mailResult.messageId);
    }
    
    console.log('=== PROCESSO CONCLUÍDO COM SUCESSO ===');
    res.status(200).json({ success: true });
  } catch (err) {
    console.error('=== ERRO DETALHADO ===');
    console.error('Erro:', err.message);
    console.error('Stack:', err.stack);
    console.error('Dados da requisição:', { tipo, email, telefone });
    console.error('=== FIM DO ERRO ===');
    
    // Determinar o tipo de erro para resposta mais específica
    let errorMessage = 'Erro interno do servidor';
    if (err.message.includes('banco de dados')) {
      errorMessage = 'Erro na configuração do banco de dados';
    } else if (err.message.includes('authentication')) {
      errorMessage = 'Erro de autenticação do email';
    } else if (err.message.includes('ENOTFOUND')) {
      errorMessage = 'Erro de conexão com o servidor de email';
    } else if (err.message.includes('ENOENT')) {
      errorMessage = 'Arquivo do cupom não encontrado';
    }
    
    res.status(500).json({ error: errorMessage });
  }
} 