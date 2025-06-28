const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

console.log('📦 Mr Arnold Barbearia - Compactando Arquivos para Deploy\n');

// Verificar se o build existe
if (!fs.existsSync('.next')) {
  console.log('❌ Build não encontrado! Execute "npm run build" primeiro.');
  process.exit(1);
}

// Lista de arquivos e pastas necessários
const filesToInclude = [
  '.next',
  'package.json',
  'next.config.js',
  'vercel.json',
  'public',
  'node_modules'
];

console.log('📋 Verificando arquivos necessários:');
let allFilesExist = true;

filesToInclude.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file}`);
  } else {
    console.log(`❌ ${file} (não encontrado)`);
    allFilesExist = false;
  }
});

if (!allFilesExist) {
  console.log('\n❌ Alguns arquivos estão faltando. Verifique se o build foi feito corretamente.');
  process.exit(1);
}

// Criar arquivo ZIP
const output = fs.createWriteStream('mr-arnold-nextjs.zip');
const archive = archiver('zip', {
  zlib: { level: 9 } // Máxima compressão
});

output.on('close', function() {
  const sizeInMB = (archive.pointer() / 1024 / 1024).toFixed(2);
  console.log(`\n✅ Arquivo compactado criado com sucesso!`);
  console.log(`📦 Nome: mr-arnold-nextjs.zip`);
  console.log(`📊 Tamanho: ${sizeInMB} MB`);
  console.log(`📁 Localização: ${path.resolve('mr-arnold-nextjs.zip')}\n`);
  
  console.log('🎯 Próximos passos:');
  console.log('1. Faça upload do arquivo "mr-arnold-nextjs.zip" na Hostinger');
  console.log('2. Extraia na pasta public_html');
  console.log('3. Configure Node.js no painel');
  console.log('4. Execute: npm start\n');
  
  console.log('📞 Suporte:');
  console.log('- Email: mrarnoldbarbearia@gmail.com');
  console.log('- WhatsApp: (67) 99894-2928');
});

archive.on('error', function(err) {
  throw err;
});

archive.pipe(output);

// Adicionar arquivos ao ZIP
console.log('\n📦 Compactando arquivos...');

filesToInclude.forEach(file => {
  if (fs.existsSync(file)) {
    if (fs.statSync(file).isDirectory()) {
      archive.directory(file, file);
      console.log(`📁 Adicionando pasta: ${file}`);
    } else {
      archive.file(file, { name: file });
      console.log(`📄 Adicionando arquivo: ${file}`);
    }
  }
});

archive.finalize(); 