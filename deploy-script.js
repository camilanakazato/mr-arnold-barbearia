const fs = require('fs');
const path = require('path');

console.log('🚀 Preparando arquivos para deploy da Mr Arnold Barbearia...\n');

// Verificar se o build existe
if (!fs.existsSync('.next')) {
  console.log('❌ Build não encontrado! Execute "npm run build" primeiro.');
  process.exit(1);
}

console.log('✅ Build encontrado!');
console.log('📦 Preparando arquivos para upload...\n');

// Lista de arquivos e pastas necessários
const filesToInclude = [
  '.next',
  'package.json',
  'next.config.js',
  'vercel.json',
  'public',
  'node_modules'
];

console.log('📋 Arquivos que serão incluídos:');
filesToInclude.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file}`);
  } else {
    console.log(`❌ ${file} (não encontrado)`);
  }
});

console.log('\n🎯 Instruções para deploy:');
console.log('1. Compacte os arquivos listados acima');
console.log('2. Faça upload na Hostinger via File Manager');
console.log('3. Extraia na raiz do domínio (public_html)');
console.log('4. Configure Node.js no painel da Hostinger');
console.log('5. Execute: npm start\n');

console.log('🔧 Configuração Node.js na Hostinger:');
console.log('- Node.js version: 18.x ou superior');
console.log('- Start command: npm start');
console.log('- Port: 3000 (ou a porta fornecida)');

console.log('\n📞 Suporte:');
console.log('- Email: mrarnoldbarbearia@gmail.com');
console.log('- WhatsApp: (67) 99894-2928');

console.log('\n✨ Deploy concluído! Seu site estará muito mais rápido!'); 