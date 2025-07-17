import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  console.log('=== TESTE DE EMAIL ===');
  
  try {
    // Configuração do transporte de email
    console.log('Configurando transporte de email...');
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'noreplymrarnold@gmail.com',
        pass: 'wdty iqll zkec sprl',
      },
    });

    // Testar conexão
    console.log('Testando conexão com Gmail...');
    await transporter.verify();
    console.log('Conexão com Gmail OK');

    // Testar envio de email simples (sem anexo)
    console.log('Enviando email de teste...');
    const mailResult = await transporter.sendMail({
      from: 'noreplymrarnold@gmail.com',
      to: 'camila.nakazato67@gmail.com',
      subject: 'Teste de Email - Mr Arnold',
      text: 'Este é um email de teste para verificar se o sistema de email está funcionando.',
    });

    console.log('Email enviado com sucesso:', mailResult.messageId);
    
    res.status(200).json({ 
      success: true,
      message: 'Email enviado com sucesso',
      messageId: mailResult.messageId
    });
    
  } catch (err) {
    console.error('=== ERRO NO TESTE DE EMAIL ===');
    console.error('Erro:', err.message);
    console.error('Stack:', err.stack);
    
    res.status(500).json({ 
      error: 'Erro no teste de email',
      details: err.message 
    });
  }
} 