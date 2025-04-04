# Arquitetura do projeto

## Tecnologias utilizadas

- **React**: Biblioteca para construção de interface;
- **Vite**: Ferramenta para desenvolvimento rápido;
- **Scss**: Pré-processador css (estilização);
- **MarkDown**: Construção dos textos;



## Estrutura de pastas

ENERGIA/
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── docs/
│   ├── architecture.md
├── public/
│   └── bolt.svg
├── src/
│   ├── main.tsx
│   ├── vite-env.d.ts
│   ├── assets/
│   │   ├── crane-3109757_640.jpg
│   │   ├── dna-163710_640.jpg
│   │   ├── fire-171229_640.jpg
│   │   ├── light-5083606_640.jpg
│   │   ├── lightning-2702168_640.jpg
│   │   ├── lights-1285111_640.jpg
│   │   ├── nuclear-power-plant-4535760_640.jpg
│   │   └── vitrola-810479_640.jpg
│   ├── components/
│   │   ├── Breadcrumb.tsx
│   │   ├── Input.tsx
│   │   └── main/
│   │       ├── Header.tsx
│   │       ├── Footer.tsx
│   │       └── Sidebar.tsx
│   ├── content/
│   │   ├── AcusticaText.tsx
│   │   ├── EletricaText.tsx
│   │   ├── EnergiaText.tsx
│   │   ├── MecanicaText.tsx
│   │   ├── NuclearText.tsx 
│   │   ├── OpticaText.tsx 
│   │   ├── QuimicaText.tsx 
│   │   └── TermicaText.tsx
│   ├── layout/
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   └── Main.tsx
│   ├── pages/   
│   │   ├── Energia.tsx
│   │   ├── EnerigaAcustica.tsx
│   │   ├── EnerigaNuclear.tsx 
│   │   ├── EnerigaOptica.tsx 
│   │   ├── EnerigaQuimica.tsx 
│   │   └── EnerigaTermica.tsx
│   └── styles/
│       ├── base/
│       ├── components/
│       ├── layout/
│       ├── themes/
│       └── utils/


## Configuração do Projeto

Para instalar e rodar:

```bash
npm install
npm run dev
