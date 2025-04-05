import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Configuração do Vite
export default defineConfig({
  plugins: [
    react(), // Plugin para suporte ao React   
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
          ], 
        },
      },
    },
    target: 'es2020', // Ajustado de 'esnext' para maior compatibilidade
    cssCodeSplit: true, // Separação de CSS
    assetsInlineLimit: 4096, // Limite para assets inline
  },
  assetsInclude: ['**/*.jpg', '**/*.png', '**/*.md'], // Inclui assets
  server: {
    port: 3333, // Porta do servidor de desenvolvimento
    open: true, // Abre o navegador automaticamente
  },
  css: {
    preprocessorOptions: {
      scss: {}, // Suporte a SCSS
    },
  },
});