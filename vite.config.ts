import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import fs from 'fs'; // Importação direta do módulo fs
import path from 'path'; // Importação direta do módulo path

// Plugin para copiar o arquivo server.js após o build
const copyServerFile = () => {
  return {
    name: 'copy-server-file',
    writeBundle() { // Usar writeBundle em vez de buildEnd para garantir que o build terminou
      const __dirname = path.dirname(new URL(import.meta.url).pathname); // Compatível com ESM
      const serverFile = resolve(__dirname, 'server.js'); // Arquivo de origem
      const outputDir = resolve(__dirname, 'dist'); // Diretório de saída
      const outputFile = resolve(outputDir, 'server.js'); // Arquivo de destino

      // Verifica se o arquivo existe antes de copiar
      if (fs.existsSync(serverFile)) {
        fs.mkdirSync(outputDir, { recursive: true }); // Cria o diretório dist se não existir
        fs.copyFileSync(serverFile, outputFile);
        console.log('server.js copiado para dist/');
      } else {
        console.warn('server.js não encontrado na raiz do projeto.');
      }
    },
  };
};

// Configuração do Vite
export default defineConfig({
  plugins: [
    react(), // Plugin para suporte ao React
    copyServerFile(), // Adiciona o plugin personalizado
  ],
  build: {
    outDir: 'dist', // Diretório de saída
    sourcemap: true, // Mapas de origem para debug
    minify: 'esbuild', // Minificação com esbuild
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: [
            'react',
            'react-dom',
            'react-router-dom',
            'react-icons',
            'react-markdown',
            'rehype-react',
          ], // Chunk para bibliotecas grandes
        },
      },
    },
    target: 'es2020', // Ajustado de 'esnext' para maior compatibilidade
    cssCodeSplit: true, // Separação de CSS
    assetsInlineLimit: 4096, // Limite para assets inline
  },
  assetsInclude: ['**/*.jpg', '**/*.png', '**/*.md'], // Inclui assets
  server: {
    port: 3000, // Porta do servidor de desenvolvimento
    open: true, // Abre o navegador automaticamente
  },
  css: {
    preprocessorOptions: {
      scss: {}, // Suporte a SCSS
    },
  },
});