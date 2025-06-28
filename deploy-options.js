const fs = require('fs');
const { execSync } = require('child_process');

console.log('🚀 Mr Arnold Barbearia - Opções de Deploy\n');

console.log('Escolha sua opção de hospedagem:');
console.log('1. Hostinger com Node.js (Recomendado)');
console.log('2. Hostinger sem Node.js (Site Estático)');
console.log('3. Vercel (Mais fácil)\n');

// Simular escolha do usuário (você pode modificar aqui)
const choice = 1; // 1 = Node.js, 2 = Estático, 3 = Vercel

switch(choice) {
  case 1:
    console.log('✅ Opção escolhida: Hostinger com Node.js\n');
    console.log('📋 Arquivos para compactar:');
    console.log('- .next/');
    console.log('- package.json');
    console.log('- next.config.js');
    console.log('- vercel.json');
    console.log('- public/');
    console.log('- node_modules/\n');
    
    console.log('🎯 Próximos passos:');
    console.log('1. Compacte os arquivos acima');
    console.log('2. Upload via File Manager da Hostinger');
    console.log('3. Configure Node.js no painel');
    console.log('4. Execute: npm start\n');
    break;
    
  case 2:
    console.log('✅ Opção escolhida: Site Estático\n');
    
    // Backup da configuração atual
    if (fs.existsSync('next.config.js')) {
      fs.copyFileSync('next.config.js', 'next.config.backup.js');
      console.log('📋 Backup da configuração criado\n');
    }
    
    // Aplicar configuração estática
    fs.copyFileSync('next.config.static.js', 'next.config.js');
    console.log('⚙️ Configuração estática aplicada\n');
    
    try {
      console.log('🔨 Gerando site estático...');
      execSync('npm run build', { stdio: 'inherit' });
      execSync('npm run export', { stdio: 'inherit' });
      
      console.log('\n✅ Site estático gerado!');
      console.log('📁 Pasta "out/" criada com sucesso\n');
      
      console.log('📋 Arquivos para upload:');
      console.log('- Conteúdo da pasta "out/" (todos os arquivos)\n');
      
      console.log('🎯 Próximos passos:');
      console.log('1. Abra a pasta "out/"');
      console.log('2. Selecione todos os arquivos');
      console.log('3. Upload via File Manager da Hostinger');
      console.log('4. Extraia na raiz (public_html)\n');
      
      // Restaurar configuração original
      if (fs.existsSync('next.config.backup.js')) {
        fs.copyFileSync('next.config.backup.js', 'next.config.js');
        fs.unlinkSync('next.config.backup.js');
        console.log('🔄 Configuração original restaurada\n');
      }
      
    } catch (error) {
      console.log('❌ Erro ao gerar site estático:', error.message);
    }
    break;
    
  case 3:
    console.log('✅ Opção escolhida: Vercel\n');
    console.log('🎯 Próximos passos:');
    console.log('1. Acesse: vercel.com');
    console.log('2. Conecte seu GitHub/GitLab');
    console.log('3. Importe este projeto');
    console.log('4. Deploy automático!\n');
    console.log('✨ Vantagens do Vercel:');
    console.log('- Deploy automático');
    console.log('- SSL gratuito');
    console.log('- CDN global');
    console.log('- Analytics incluído');
    break;
    
  default:
    console.log('❌ Opção inválida');
}

console.log('📞 Suporte:');
console.log('- Email: mrarnoldbarbearia@gmail.com');
console.log('- WhatsApp: (67) 99894-2928\n');

console.log('🎉 Boa sorte com o deploy!'); 