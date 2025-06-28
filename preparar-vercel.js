const fs = require('fs');
const path = require('path');

console.log('🚀 Preparando projeto para deploy no Vercel...\n');

// Verificar arquivos essenciais
const arquivosEssenciais = [
    'package.json',
    'next.config.js',
    'pages/index.js',
    'pages/_app.js',
    'pages/_document.js',
    'styles/globals.css',
    'components/Header.js',
    'components/Hero.js',
    'components/Services.js',
    'components/Barbers.js',
    'components/Products.js',
    'components/Results.js',
    'components/Tips.js',
    'components/Contact.js',
    'components/Sidebar.js',
    'components/VideoHero.js',
    'components/LoadingSpinner.js',
    'hooks/useIntersectionObserver.js',
    'public/manifest.json',
    'public/robots.txt',
    'vercel.json'
];

console.log('📋 Verificando arquivos essenciais...');
let arquivosFaltando = [];

arquivosEssenciais.forEach(arquivo => {
    if (fs.existsSync(arquivo)) {
        console.log(`✅ ${arquivo}`);
    } else {
        console.log(`❌ ${arquivo} - FALTANDO`);
        arquivosFaltando.push(arquivo);
    }
});

if (arquivosFaltando.length > 0) {
    console.log('\n⚠️  ATENÇÃO: Alguns arquivos estão faltando!');
    console.log('Arquivos faltando:', arquivosFaltando);
} else {
    console.log('\n✅ Todos os arquivos essenciais estão presentes!');
}

// Verificar estrutura de pastas
const pastasEssenciais = [
    'components',
    'pages',
    'styles',
    'public',
    'hooks',
    'imgs',
    'videos'
];

console.log('\n📁 Verificando estrutura de pastas...');
pastasEssenciais.forEach(pasta => {
    if (fs.existsSync(pasta)) {
        const arquivos = fs.readdirSync(pasta).length;
        console.log(`✅ ${pasta}/ (${arquivos} arquivos)`);
    } else {
        console.log(`❌ ${pasta}/ - FALTANDO`);
    }
});

console.log('\n🎯 PRÓXIMOS PASSOS PARA VERCEL:');
console.log('1. Acesse: https://vercel.com');
console.log('2. Faça login/cadastro');
console.log('3. Clique em "New Project"');
console.log('4. Escolha "Upload" ou conecte GitHub');
console.log('5. Faça upload da pasta mr-arnold');
console.log('6. Aguarde o deploy automático');
console.log('7. Seu site ficará disponível em: https://mr-arnold.vercel.app');

console.log('\n💡 DICAS:');
console.log('- O Vercel detecta automaticamente que é Next.js');
console.log('- Deploy é automático e muito rápido');
console.log('- Você pode conectar seu domínio personalizado depois');
console.log('- SSL e CDN são gratuitos');

console.log('\n📞 Suporte:');
console.log('- Email: mrarnoldbarbearia@gmail.com');
console.log('- WhatsApp: (67) 99894-2928'); 