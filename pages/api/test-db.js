import { supabase } from '../../lib/supabase';

export default async function handler(req, res) {
  console.log('=== TESTE DE CONEXÃO COM BANCO ===');
  
  try {
    // Teste 1: Verificar se consegue conectar
    console.log('Testando conexão com Supabase...');
    
    // Teste 2: Verificar se as tabelas existem
    console.log('Verificando tabela desconto_emails...');
    const { data: descontoData, error: descontoError } = await supabase
      .from('desconto_emails')
      .select('*')
      .limit(1);
    
    if (descontoError) {
      console.error('Erro na tabela desconto_emails:', descontoError);
      return res.status(500).json({ 
        error: 'Erro na tabela desconto_emails',
        details: descontoError.message 
      });
    }
    
    console.log('Verificando tabela jaboque_descontos...');
    const { data: jaboqueData, error: jaboqueError } = await supabase
      .from('jaboque_descontos')
      .select('*')
      .limit(1);
    
    if (jaboqueError) {
      console.error('Erro na tabela jaboque_descontos:', jaboqueError);
      return res.status(500).json({ 
        error: 'Erro na tabela jaboque_descontos',
        details: jaboqueError.message 
      });
    }
    
    // Teste 3: Tentar inserir um registro de teste
    console.log('Testando inserção na tabela desconto_emails...');
    const { error: insertError } = await supabase
      .from('desconto_emails')
      .insert([{ 
        email: 'teste@teste.com', 
        telefone: '00000000000' 
      }]);
    
    if (insertError) {
      console.error('Erro na inserção:', insertError);
      return res.status(500).json({ 
        error: 'Erro na inserção',
        details: insertError.message 
      });
    }
    
    console.log('=== TESTE CONCLUÍDO COM SUCESSO ===');
    res.status(200).json({ 
      success: true,
      message: 'Conexão com banco funcionando perfeitamente',
      desconto_emails: descontoData,
      jaboque_descontos: jaboqueData
    });
    
  } catch (err) {
    console.error('=== ERRO NO TESTE ===');
    console.error('Erro:', err.message);
    console.error('Stack:', err.stack);
    
    res.status(500).json({ 
      error: 'Erro no teste de banco',
      details: err.message 
    });
  }
} 