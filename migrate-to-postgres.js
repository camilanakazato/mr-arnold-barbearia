require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js')
const sqlite3 = require('sqlite3');
const { open } = require('sqlite');
const path = require('path');

// Configuração do Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Erro: As variáveis de ambiente NEXT_PUBLIC_SUPABASE_URL e NEXT_PUBLIC_SUPABASE_ANON_KEY são obrigatórias');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function migrateData() {
  try {
    // Abrir conexão com SQLite
    const dbPath = path.join(process.cwd(), 'backup', 'mrarnold.db');
    const sqliteDb = await open({ 
      filename: dbPath, 
      driver: sqlite3.Database 
    });

    console.log('Iniciando migração dos dados...');

    // Migrar dados da tabela jaboque_descontos
    const jaboqueDescontos = await sqliteDb.all('SELECT * FROM jaboque_descontos');
    for (const row of jaboqueDescontos) {
      const { error } = await supabase
        .from('jaboque_descontos')
        .insert([{
          nome: row.nome,
          email: row.email,
          telefone: row.telefone,
          created_at: row.created_at || new Date().toISOString()
        }]);
      if (error) {
        console.error('Erro ao inserir em jaboque_descontos:', error);
        continue;
      }
    }
    console.log(`Migrados ${jaboqueDescontos.length} registros da tabela jaboque_descontos`);

    // Migrar dados da tabela desconto_emails
    const descontoEmails = await sqliteDb.all('SELECT * FROM desconto_emails');
    for (const row of descontoEmails) {
      const { error } = await supabase
        .from('desconto_emails')
        .insert([{
          email: row.email,
          telefone: row.telefone,
          created_at: row.created_at || new Date().toISOString()
        }]);
      if (error) {
        console.error('Erro ao inserir em desconto_emails:', error);
        continue;
      }
    }
    console.log(`Migrados ${descontoEmails.length} registros da tabela desconto_emails`);

    // Migrar dados da tabela contatos
    const contatos = await sqliteDb.all('SELECT * FROM contatos');
    for (const row of contatos) {
      const { error } = await supabase
        .from('contatos')
        .insert([{
          nome: row.nome,
          email: row.email,
          telefone: row.telefone,
          created_at: row.created_at || new Date().toISOString()
        }]);
      if (error) {
        console.error('Erro ao inserir em contatos:', error);
        continue;
      }
    }
    console.log(`Migrados ${contatos.length} registros da tabela contatos`);

    await sqliteDb.close();
    console.log('Migração concluída com sucesso!');
  } catch (error) {
    console.error('Erro durante a migração:', error);
    process.exit(1);
  }
}

migrateData(); 