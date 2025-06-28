# 🚀 Guia de Deploy - Mr Arnold Barbearia na Hostinger

## Opção 1: Hostinger com Node.js (Recomendado)

### 1. Preparar o Projeto
```bash
# No seu computador
npm run build
```

### 2. Compactar Arquivos
Crie um arquivo ZIP com:
- ✅ `node_modules/` (pasta completa)
- ✅ `.next/` (pasta do build)
- ✅ `package.json`
- ✅ `next.config.js`
- ✅ `vercel.json`
- ✅ `public/` (imagens e vídeos)
- ✅ `styles/` (CSS)
- ✅ `components/` (componentes React)
- ✅ `pages/` (páginas Next.js)
- ✅ `hooks/` (hooks personalizados)

### 3. Upload na Hostinger
1. Acesse o **File Manager** da Hostinger
2. Navegue até a **raiz do domínio** (public_html)
3. Faça upload do arquivo ZIP
4. Extraia o conteúdo

### 4. Configurar Node.js
1. No painel da Hostinger, vá em **Node.js**
2. Configure:
   - **Node.js version**: 18.x ou superior
   - **Start command**: `npm start`
   - **Port**: 3000 (ou a porta fornecida pela Hostinger)

### 5. Instalar Dependências
1. Acesse o **Terminal** da Hostinger
2. Execute:
```bash
cd public_html
npm install --production
```

### 6. Iniciar o Servidor
```bash
npm start
```

---

## Opção 2: Site Estático (Alternativa)

### 1. Modificar Configuração
Edite o `next.config.js`:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // ... resto da configuração
}
```

### 2. Build e Export
```bash
npm run build
npm run export
```

### 3. Upload da Pasta `out/`
1. A pasta `out/` contém o site estático
2. Faça upload via FTP para `public_html/`
3. **Importante**: Todos os arquivos da pasta `out/` devem ir para a raiz

---

## ⚠️ Considerações Importantes

### Para Node.js:
- ✅ **Melhor performance**
- ✅ **SSR funcionando**
- ✅ **Todas as otimizações ativas**
- ❌ **Mais complexo de configurar**
- ❌ **Pode ter custo adicional**

### Para Site Estático:
- ✅ **Mais simples de configurar**
- ✅ **Funciona em qualquer hospedagem**
- ✅ **Menor custo**
- ❌ **Perde algumas otimizações**
- ❌ **SSR não funciona**

---

## 🔧 Configurações Adicionais

### Domínio Personalizado
1. Configure o domínio na Hostinger
2. Aponte para a pasta correta
3. Configure SSL (HTTPS)

### Otimizações
1. **Cache**: Configure cache para imagens e CSS
2. **Compressão**: Ative GZIP
3. **CDN**: Use CDN da Hostinger se disponível

---

## 📞 Suporte

Se encontrar problemas:
1. Verifique os logs do Node.js
2. Confirme se todas as dependências estão instaladas
3. Teste localmente antes do upload
4. Entre em contato com o suporte da Hostinger

---

**Recomendação**: Use a **Opção 1 (Node.js)** se possível, pois mantém todas as otimizações de performance implementadas! 