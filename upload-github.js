const { execSync } = require('child_process');
const fs = require('fs');

console.log('🚀 Preparando upload para GitHub...\n');

// Verificar se git está instalado
try {
    execSync('git --version', { stdio: 'ignore' });
    console.log('✅ Git encontrado');
} catch (error) {
    console.log('❌ Git não encontrado. Instale o Git primeiro:');
    console.log('https://git-scm.com/downloads');
    process.exit(1);
}

// Verificar se já é um repositório git
const isGitRepo = fs.existsSync('.git');

if (!isGitRepo) {
    console.log('📁 Inicializando repositório Git...');
    try {
        execSync('git init', { stdio: 'inherit' });
        console.log('✅ Repositório Git inicializado');
    } catch (error) {
        console.log('❌ Erro ao inicializar Git');
        process.exit(1);
    }
}

// Adicionar todos os arquivos
console.log('📄 Adicionando arquivos...');
try {
    execSync('git add .', { stdio: 'inherit' });
    console.log('✅ Arquivos adicionados');
} catch (error) {
    console.log('❌ Erro ao adicionar arquivos');
    process.exit(1);
}

// Fazer commit inicial
console.log('💾 Fazendo commit inicial...');
try {
    execSync('git commit -m "🎉 Deploy inicial - Site Mr Arnold Barbearia"', { stdio: 'inherit' });
    console.log('✅ Commit realizado');
} catch (error) {
    console.log('❌ Erro ao fazer commit');
    process.exit(1);
}

console.log('\n🎯 PRÓXIMOS PASSOS:');
console.log('1. Acesse: https://github.com');
console.log('2. Crie um novo repositório chamado: mr-arnold-barbearia');
console.log('3. NÃO inicialize com README (já temos um)');
console.log('4. Copie a URL do repositório (ex: https://github.com/seu-usuario/mr-arnold-barbearia.git)');
console.log('5. Execute os comandos que aparecerão no GitHub:');
console.log('');
console.log('   git remote add origin https://github.com/seu-usuario/mr-arnold-barbearia.git');
console.log('   git branch -M main');
console.log('   git push -u origin main');
console.log('');

console.log('💡 DICAS:');
console.log('- Substitua "seu-usuario" pelo seu nome de usuário do GitHub');
console.log('- Se pedir credenciais, use seu usuário e token do GitHub');
console.log('- Depois conecte o repositório no Vercel');

console.log('\n📞 Suporte:');
console.log('- Email: mrarnoldbarbearia@gmail.com');
console.log('- WhatsApp: (67) 99894-2928'); 