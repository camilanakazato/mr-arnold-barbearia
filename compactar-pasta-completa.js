const archiver = require('archiver');
const fs = require('fs');
const path = require('path');

// Configurações
const outputFileName = 'mr-arnold-completo.zip';
const sourceDir = '.'; // Pasta atual (mr-arnold)

// Verificar se o arquivo de saída já existe e removê-lo
if (fs.existsSync(outputFileName)) {
    fs.unlinkSync(outputFileName);
    console.log(`Arquivo ${outputFileName} existente removido.`);
}

// Criar stream de saída
const output = fs.createWriteStream(outputFileName);
const archive = archiver('zip', {
    zlib: { level: 9 } // Máxima compressão
});

// Eventos do archive
output.on('close', () => {
    const sizeInMB = (archive.pointer() / 1024 / 1024).toFixed(2);
    console.log(`✅ Compactação concluída com sucesso!`);
    console.log(`📦 Arquivo: ${outputFileName}`);
    console.log(`📊 Tamanho: ${sizeInMB} MB`);
    console.log(`📁 Pasta compactada: ${sourceDir}`);
    console.log('\n🚀 Próximos passos para o Hostinger:');
    console.log('1. Faça upload do arquivo .zip para o Hostinger');
    console.log('2. Extraia o arquivo no diretório raiz do seu domínio');
    console.log('3. A pasta mr-arnold será criada automaticamente');
    console.log('4. Configure o Node.js e execute npm install');
    console.log('5. Inicie o servidor com npm start');
});

archive.on('error', (err) => {
    throw err;
});

// Conectar o archive ao stream de saída
archive.pipe(output);

// Função para verificar se um arquivo deve ser incluído
function shouldIncludeFile(filePath) {
    const excludePatterns = [
        /node_modules/,
        /\.next/,
        /\.git/,
        /\.vscode/,
        /\.DS_Store/,
        /Thumbs\.db/,
        /desktop\.ini/,
        /\.log$/,
        /\.tmp$/,
        /\.temp$/
    ];

    return !excludePatterns.some(pattern => pattern.test(filePath));
}

// Função para adicionar arquivos recursivamente
function addFilesToArchive(dirPath, archivePath = '') {
    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
        const fullPath = path.join(dirPath, item);
        const relativePath = path.join(archivePath, item);
        
        if (shouldIncludeFile(relativePath)) {
            const stat = fs.statSync(fullPath);
            
            if (stat.isDirectory()) {
                console.log(`📁 Adicionando pasta: ${relativePath}`);
                addFilesToArchive(fullPath, relativePath);
            } else {
                console.log(`📄 Adicionando arquivo: ${relativePath}`);
                archive.file(fullPath, { name: relativePath });
            }
        } else {
            console.log(`⏭️  Pulando: ${relativePath}`);
        }
    }
}

console.log('🚀 Iniciando compactação da pasta mr-arnold...');
console.log('📁 Compactando todos os arquivos e pastas...\n');

// Adicionar todos os arquivos da pasta atual
addFilesToArchive(sourceDir);

// Finalizar o archive
archive.finalize(); 