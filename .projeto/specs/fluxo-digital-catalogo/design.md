# Technical Design Document

## Fluxo Digital — Catálogo de Serviços Digitais

---

## 1. Visão Geral da Arquitetura

A aplicação é uma SPA (Single Page Application) React renderizada no cliente, sem roteamento entre páginas. Toda a composição ocorre em `App.jsx`, que monta os componentes em sequência vertical e injeta os dados de `servicos.js` via props no `CardServico`.

```
App.jsx
├── Cabecalho
├── BannerPrincipal
├── <section id="catalogo">   ← gerado dentro do App.jsx
│   └── CardServico × 7      ← via .map() sobre servicos[]
├── SecaoDestaque
└── Rodape
```

---

## 2. Estrutura de Pastas

```
fluxo-digital/
├── public/
│   └── vite.svg
├── src/
│   ├── componentes/
│   │   ├── Cabecalho.jsx
│   │   ├── BannerPrincipal.jsx
│   │   ├── CardServico.jsx
│   │   ├── SecaoDestaque.jsx
│   │   └── Rodape.jsx
│   ├── dados/
│   │   └── servicos.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

---

## 3. Configuração do Projeto

### 3.1 Dependências (`package.json`)

```json
{
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "bootstrap": "^5.3.3",
    "lucide-react": "^0.441.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.1",
    "vite": "^5.4.8"
  }
}
```

### 3.2 `vite.config.js`

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

### 3.3 `src/main.jsx`

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './index.css'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
```

> **Nota:** `bootstrap.bundle.min.js` é necessário para o comportamento de collapse da navbar.

---

## 4. Design System

### 4.1 Paleta de Cores (variáveis CSS em `index.css`)

| Variável              | Valor hex   | Uso                                      |
|-----------------------|-------------|------------------------------------------|
| `--cor-primaria`      | `#0f172a`   | Fundo do Cabeçalho, Rodapé e Banner      |
| `--cor-secundaria`    | `#1e3a5f`   | Fundo alternativo, hover de cards        |
| `--cor-destaque`      | `#6366f1`   | Botões, ícones ativos, bordas de hover   |
| `--cor-destaque-hover`| `#4f46e5`   | Estado hover dos botões                  |
| `--cor-fundo`         | `#f1f5f9`   | Fundo geral da página                    |
| `--cor-texto-claro`   | `#ffffff`   | Texto sobre fundos escuros               |
| `--cor-texto-escuro`  | `#1e293b`   | Texto sobre fundos claros                |
| `--cor-card-fundo`    | `#ffffff`   | Fundo dos cards de serviço               |
| `--cor-card-borda`    | `#e2e8f0`   | Borda padrão dos cards                   |

### 4.2 Tipografia

- **Fonte principal:** `'Inter', system-ui, sans-serif` — importada via Google Fonts
- **Hierarquia:**
  - `h1` (Banner): `3rem` bold, `line-height: 1.2`
  - `h2` (títulos de seção): `2rem` semibold
  - `h5` (título do card): `1.1rem` semibold
  - `p` (corpo): `1rem`, `line-height: 1.6`

### 4.3 Transições e Efeitos

```css
/* Card hover */
.card-servico {
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}
.card-servico:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 32px rgba(99, 102, 241, 0.18);
  border-color: var(--cor-destaque);
}

/* Botão CTA hover */
.btn-cta {
  transition: background-color 0.3s ease, transform 0.2s ease;
}
.btn-cta:hover {
  background-color: var(--cor-destaque-hover);
  transform: scale(1.04);
}
```

---

## 5. Design dos Componentes

### 5.1 `src/dados/servicos.js`

Schema do objeto `Servico`:

```js
{
  id: Number,          // identificador único (1–7)
  titulo: String,      // nome do serviço
  descricao: String,   // descrição de 2–3 linhas
  icone: Component,    // componente Lucide React importado
  textoBotao: String   // texto do botão de ação
}
```

Mapeamento de serviços e ícones Lucide:

| # | Serviço                  | Ícone Lucide       |
|---|--------------------------|--------------------|
| 1 | Landing Page             | `Rocket`           |
| 2 | Site Institucional       | `Building2`        |
| 3 | Loja Virtual             | `ShoppingCart`     |
| 4 | Blog Profissional        | `BookOpen`         |
| 5 | Portfólio Online         | `Briefcase`        |
| 6 | Otimização SEO           | `TrendingUp`       |
| 7 | Integração com WhatsApp  | `MessageCircle`    |

---

### 5.2 `Cabecalho.jsx`

**Estrutura Bootstrap:**
```
<nav .navbar .navbar-expand-md .navbar-dark>
  <div .container>
    <a .navbar-brand>  ← "Fluxo Digital" com ícone Zap
    <button .navbar-toggler>  ← menu hambúrguer
    <div .collapse .navbar-collapse>
      <ul .navbar-nav .ms-auto>
        <li><a href="#inicio">Início</a>
        <li><a href="#servicos">Serviços</a>
        <li><a href="#diferenciais">Diferenciais</a>
        <li><a href="#contato">Contato</a>
```

**Estilo:** fundo `var(--cor-primaria)`, brand com cor `var(--cor-destaque)`.

---

### 5.3 `BannerPrincipal.jsx`

**Estrutura Bootstrap:**
```
<section id="inicio" .banner-principal>
  <div .container .py-5>
    <div .row .align-items-center .min-vh-75>
      <div .col-lg-7>
        <h1>  ← título principal
        <p .lead>  ← subtítulo
        <a .btn .btn-cta>  ← botão CTA
      <div .col-lg-5 .d-none .d-lg-block>
        ← decoração visual / ícone grande
```

**Estilo:** fundo com gradiente `linear-gradient(135deg, var(--cor-primaria) 0%, var(--cor-secundaria) 100%)`, texto branco.

---

### 5.4 `CardServico.jsx`

**Props recebidas:**
```js
{
  id: Number,
  titulo: String,
  descricao: String,
  Icone: Component,   // componente Lucide (com inicial maiúscula)
  textoBotao: String
}
```

**Estrutura Bootstrap:**
```
<div .col>
  <div .card .card-servico .h-100 .p-4>
    <div .card-body .d-flex .flex-column>
      <div .icone-wrapper .mb-3>  ← ícone Lucide 40px
      <h5 .card-title .mb-2>     ← titulo
      <p .card-text .flex-grow-1> ← descricao
      <button .btn .btn-servico .mt-3> ← textoBotao
```

**Estilo:** borda `var(--cor-card-borda)`, hover eleva o card com sombra violeta.

---

### 5.5 `SecaoDestaque.jsx`

**Diferenciais exibidos (4 itens em grid 2×2 → 4 colunas em desktop):**

| Ícone         | Métrica / Diferencial         |
|---------------|-------------------------------|
| `CheckCircle` | +200 projetos entregues        |
| `Clock`       | Entrega em até 15 dias         |
| `HeadphonesIcon` | Suporte técnico dedicado    |
| `Award`       | Qualidade certificada          |

**Estrutura Bootstrap:**
```
<section id="diferenciais" .secao-destaque .py-5>
  <div .container>
    <h2 .text-center .mb-5>
    <div .row .g-4 .row-cols-1 .row-cols-md-2 .row-cols-lg-4>
      <div .col> × 4
        <div .diferencial-card .text-center .p-4>
          ← ícone grande
          ← número/métrica em destaque
          ← descrição curta
```

**Estilo:** fundo `var(--cor-fundo)`, cards com borda superior colorida `var(--cor-destaque)`.

---

### 5.6 `Rodape.jsx`

**Estrutura Bootstrap:**
```
<footer .rodape .py-4>
  <div .container>
    <div .row .align-items-center>
      <div .col-md-4>  ← nome + tagline
      <div .col-md-4 .text-center>  ← copyright
      <div .col-md-4 .text-end>  ← autores
```

**Estilo:** fundo `var(--cor-primaria)`, texto `var(--cor-texto-claro)` com opacidade reduzida para elementos secundários.

---

### 5.7 `App.jsx`

**Lógica de composição:**
```jsx
import servicos from './dados/servicos'

// Seção catálogo gerada inline no App:
<section id="servicos" className="py-5">
  <div className="container">
    <h2>Nossos Serviços</h2>
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      {servicos.map(servico => (
        <CardServico key={servico.id} {...servico} />
      ))}
    </div>
  </div>
</section>
```

> O spread `{...servico}` passa todas as propriedades do objeto como props individuais para `CardServico`.

---

## 6. Fluxo de Dados

```
servicos.js (array)
    │
    ▼
App.jsx — importa array → .map() → <CardServico key={id} {...servico} />
                                          │
                                          ▼
                                   CardServico.jsx
                                   recebe: { id, titulo, descricao, Icone, textoBotao }
                                   renderiza: ícone + título + descrição + botão
```

Todos os outros componentes (Cabecalho, BannerPrincipal, SecaoDestaque, Rodape) são **stateless** e não recebem props — seus dados são estáticos e definidos internamente.

---

## 7. Responsividade

| Breakpoint Bootstrap | Colunas do Catálogo | Colunas dos Diferenciais |
|----------------------|---------------------|--------------------------|
| `xs` (< 576px)       | 1 coluna            | 1 coluna                 |
| `md` (≥ 768px)       | 2 colunas           | 2 colunas                |
| `lg` (≥ 992px)       | 3 colunas           | 4 colunas                |

Classes Bootstrap aplicadas no grid do catálogo:
```
row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4
```

---

## 8. Acessibilidade

- Navbar com `aria-label="Navegação principal"` e `aria-expanded` no botão toggler
- Ícones Lucide com `aria-hidden="true"` (decorativos) e texto visível nos botões
- Contraste de cores atende WCAG AA (texto branco sobre `#0f172a` e `#1e3a5f`)
- Botões com estados `:focus-visible` estilizados no CSS personalizado
