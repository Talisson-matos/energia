# Escolher uma imagem base
FROM node:18

# Configurar o diretório de trabalho no container
WORKDIR /ENERGIA

# Copiar os arquivos de dependências
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar o restante do código
COPY . .

# Build da aplicação (opcional, para front-ends como React)
RUN npm run build

# Expor a porta onde a aplicação vai rodar
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]
