# Fluxo Digital — Catálogo de Serviços Digitais

Projeto acadêmico de um catálogo interativo de serviços de TI, desenvolvido com React, Vite e Bootstrap 5.

---

## Autores

| Nome | Papel |
|------|-------|
| **Lucas Cassiano Fonseca** | Desenvolvedor Front-End |
| **Murilo do Carmo** | Desenvolvedor Front-End |

---

## Tecnologias Utilizadas

| Tecnologia | Versão | Finalidade |
|------------|--------|------------|
| [React](https://react.dev/) | 18.x | Framework de interface |
| [Vite](https://vitejs.dev/) | 5.x | Bundler e servidor de desenvolvimento |
| [Bootstrap](https://getbootstrap.com/) | 5.3.x | Grid, componentes e utilitários CSS |
| [Lucide React](https://lucide.dev/) | 0.441.x | Biblioteca de ícones SVG |

---

## Descrição do Projeto

A **Fluxo Digital** é uma aplicação que apresenta seu catálogo de serviços digitais em uma interface moderna, responsiva e acessível.

Os serviços oferecidos incluem:

- **Landing Page** — Páginas de alta conversão para captura de leads
- **Site Institucional** — Presença digital profissional para empresas
- **Loja Virtual** — E-commerce completo com checkout seguro
- **Blog Profissional** — Plataforma de conteúdo otimizada para SEO
- **Portfólio Online** — Vitrine digital para profissionais criativos
- **Otimização SEO** — Estratégias para melhorar o posicionamento nos buscadores
- **Integração com WhatsApp** — Automações e botões de contato direto

### Destaques Técnicos

- Componentes React reutilizáveis com passagem de dados via **Props**
- Renderização dinâmica dos cards com o método **`.map()`**
- Responsividade total com o sistema de **grid do Bootstrap** (`row-cols-1 row-cols-md-2 row-cols-lg-3`)
- Identidade visual com **variáveis CSS** (paleta tecnológica azul/violeta)
- Efeitos de **hover** e **transições suaves** em cards e botões
- Navbar com **collapse automático** em dispositivos móveis

---

## Estrutura de Pastas

```
fluxo-digital/
├── public/
├── src/
│   ├── componentes/
│   │   ├── Cabecalho.jsx       # Navbar responsiva
│   │   ├── BannerPrincipal.jsx # Hero section
│   │   ├── CardServico.jsx     # Card reutilizável (via Props)
│   │   ├── SecaoDestaque.jsx   # Diferenciais competitivos
│   │   └── Rodape.jsx          # Rodapé com créditos
│   ├── dados/
│   │   └── servicos.js         # Array de dados dos serviços
│   ├── App.jsx                 # Composição principal
│   ├── main.jsx                # Ponto de entrada React
│   └── index.css               # Estilos personalizados
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

---

## Como Executar o Projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) versão 18 ou superior
- npm (incluído com o Node.js)

### Passo a Passo

**1. Clone ou baixe o repositório**

```bash
git clone <url-do-repositorio>
cd fluxo-digital
```

**2. Instale as dependências**

```bash
npm install
```

**3. Inicie o servidor de desenvolvimento**

```bash
npm run dev
```

**4. Acesse no navegador**

Abra [http://localhost:5173](http://localhost:5173) no seu navegador.

---

## Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento com hot-reload |
| `npm run build` | Gera a versão de produção na pasta `dist/` |
| `npm run preview` | Pré-visualiza o build de produção localmente |

---

## Licença

Projeto desenvolvido para fins acadêmicos. Uso livre para estudo e aprendizado.
