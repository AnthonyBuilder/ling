# Ling

Projeto React construído com Vite, TailwindCSS e shadcn/ui.

## Tecnologias

- **React 18** - Biblioteca JavaScript para interfaces de usuário
- **Vite** - Build tool rápido e moderno
- **TypeScript** - JavaScript com tipagem estática
- **TailwindCSS** - Framework CSS utility-first
- **shadcn/ui** - Biblioteca de componentes reutilizáveis

## Começando

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

```bash
npm install
```

### Desenvolvimento

```bash
npm run dev
```

Acesse [http://localhost:5173](http://localhost:5173) para visualizar o projeto.

### Build

```bash
npm run build
```

### Preview da Build

```bash
npm run preview
```

## Estrutura do Projeto

```
ling/
├── src/
│   ├── components/     # Componentes React
│   ├── lib/           # Utilitários
│   ├── App.tsx        # Componente principal
│   ├── main.tsx       # Ponto de entrada
│   └── index.css      # Estilos globais
├── public/            # Arquivos estáticos
├── index.html         # HTML principal
└── vite.config.ts     # Configuração do Vite
```

## Adicionando Componentes shadcn/ui

Para adicionar componentes do shadcn/ui:

```bash
npx shadcn@latest add button
npx shadcn@latest add card
# etc...
```

## Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm run preview` - Preview da build de produção
- `npm run lint` - Executa o linter
