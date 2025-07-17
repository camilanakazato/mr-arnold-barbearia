// Carregar variáveis de ambiente do arquivo .env.local
require('dotenv').config({ path: '.env.local' });

const { createClient } = require('@supabase/supabase-js');
const nodemailer = require('nodemailer');

async function testConfigurations() {
  console.log('🔍 Testando configurações...\n');

  // Teste 1: Variáveis de ambiente
  console.log('1. Verificando variáveis de ambiente:');
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  
  if (!supabaseUrl || !supabaseKey) {
    console.log('❌ Variáveis do Supabase não encontradas');
    console.log('   NEXT_PUBLIC_SUPABASE_URL:', supabaseUrl ? '✅ Configurada' : '❌ Não configurada');
    console.log('   NEXT_PUBLIC_SUPABASE_ANON_KEY:', supabaseKey ? '✅ Configurada' : '❌ Não configurada');
    console.log('\n💡 Solução: Crie um arquivo .env.local com:');
    console.log('   NEXT_PUBLIC_SUPABASE_URL=sua_url_aqui');
    console.log('   NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_chave_aqui\n');
  } else {
    console.log('✅ Variáveis do Supabase configuradas\n');
  }

  // Teste 2: Conexão com Supabase
  if (supabaseUrl && supabaseKey) {
    console.log('2. Testando conexão com Supabase:');
    try {
      const supabase = createClient(supabaseUrl, supabaseKey);
      
      // Testar se as tabelas existem
      const { data: jaboqueData, error: jaboqueError } = await supabase
        .from('jaboque_descontos')
        .select('*')
        .limit(1);
      
      if (jaboqueError) {
        console.log('❌ Tabela jaboque_descontos não encontrada ou sem permissão');
        console.log('   Erro:', jaboqueError.message);
      } else {
        console.log('✅ Tabela jaboque_descontos acessível');
      }

      const { data: descontoData, error: descontoError } = await supabase
        .from('desconto_emails')
        .select('*')
        .limit(1);
      
      if (descontoError) {
        console.log('❌ Tabela desconto_emails não encontrada ou sem permissão');
        console.log('   Erro:', descontoError.message);
      } else {
        console.log('✅ Tabela desconto_emails acessível');
      }
    } catch (error) {
      console.log('❌ Erro ao conectar com Supabase:', error.message);
    }
    console.log('');
  }

  // Teste 3: Configuração do Gmail
  console.log('3. Testando configuração do Gmail:');
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'noreplymrarnold@gmail.com',
      pass: 'wdty iqll zkec sprl',
    },
  });

  try {
    await transporter.verify();
    console.log('✅ Configuração do Gmail válida');
  } catch (error) {
    console.log('❌ Erro na configuração do Gmail:', error.message);
    console.log('\n💡 Possíveis soluções:');
    console.log('   - Verificar se a senha do app está correta');
    console.log('   - Ativar autenticação de 2 fatores no Gmail');
    console.log('   - Gerar uma nova senha de app');
    console.log('   - Verificar se o email não está bloqueado');
  }
  console.log('');

  // Teste 4: Verificar se as imagens dos cupons existem
  console.log('4. Verificando arquivos de cupons:');
  const fs = require('fs');
  const path = require('path');
  
  const cupomJaboque = path.join(process.cwd(), 'public', 'imgs', 'cupomJaboque-desconto.jpg');
  const cupomCorte = path.join(process.cwd(), 'public', 'imgs', 'cupomCorte-desconto.jpg');
  
  if (fs.existsSync(cupomJaboque)) {
    console.log('✅ Cupom Jaboque encontrado');
  } else {
    console.log('❌ Cupom Jaboque não encontrado');
  }
  
  if (fs.existsSync(cupomCorte)) {
    console.log('✅ Cupom Corte encontrado');
  } else {
    console.log('❌ Cupom Corte não encontrado');
  }
}

// Executar o teste
testConfigurations().catch(console.error); 