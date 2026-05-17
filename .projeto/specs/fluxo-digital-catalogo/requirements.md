# Requirements Document

## Introduction

O **Fluxo Digital - Catálogo de Serviços Digitais** é uma aplicação web acadêmica desenvolvida em React com Vite, que apresenta o portfólio de serviços de TI da empresa fictícia "Fluxo Digital". A aplicação exibe um catálogo interativo de serviços digitais (landing pages, sites institucionais, loja virtual, blog profissional, portfólio online, otimização SEO e integração com WhatsApp), com identidade visual tecnológica, totalmente responsiva e estruturada em componentes reutilizáveis.

## Glossary

- **Aplicação**: A aplicação web React denominada "Fluxo Digital - Catálogo de Serviços Digitais".
- **Catálogo**: A coleção de cards de serviços digitais exibidos na página principal.
- **Card_Servico**: Componente React reutilizável que exibe as informações de um serviço digital.
- **Cabecalho**: Componente de navegação superior (navbar) da Aplicação.
- **Banner_Principal**: Componente hero section exibido no topo da página, abaixo do Cabecalho.
- **Secao_Destaque**: Componente que apresenta os diferenciais e vantagens competitivas da Fluxo Digital.
- **Rodape**: Componente de rodapé inferior da Aplicação.
- **Servico**: Objeto de dados contendo id, titulo, descricao, icone e texto do botão de um serviço digital.
- **Props**: Mecanismo do React para passagem de dados de componente pai para componente filho.
- **Icone_Lucide**: Ícone proveniente da biblioteca Lucide React associado a um Servico.
- **Paleta_Tecnologica**: Conjunto de cores definido para a identidade visual da Aplicação (azul escuro/violeta, cinza claro, cor de destaque vibrante).
- **Bootstrap**: Framework CSS versão 5 utilizado para estilização e responsividade da Aplicação.
- **Vite**: Ferramenta de build e servidor de desenvolvimento utilizada no projeto React.

---

## Requirements

### Requirement 1: Estrutura de Dados dos Serviços

**User Story:** Como desenvolvedor acadêmico, quero um arquivo centralizado de dados dos serviços, para que os dados sejam separados da lógica de apresentação e facilmente mantidos.

#### Acceptance Criteria

1. THE Aplicação SHALL conter o arquivo `src/dados/servicos.js` exportando um array de objetos JavaScript.
2. THE Aplicação SHALL incluir exatamente os seguintes sete serviços no array: Landing Page, Site Institucional, Loja Virtual, Blog Profissional, Portfólio Online, Otimização SEO e Integração com WhatsApp.
3. WHEN o array de serviços é importado, THE Aplicação SHALL disponibilizar para cada Servico os campos: `id` (identificador único numérico), `titulo` (string), `descricao` (string descritiva), `icone` (referência a componente Icone_Lucide) e `textoBotao` (string).
4. THE Aplicação SHALL associar a cada Servico um Icone_Lucide semanticamente relacionado ao tipo de serviço descrito.

---

### Requirement 2: Componente Cabeçalho

**User Story:** Como visitante, quero uma barra de navegação clara e responsiva, para que eu possa identificar a marca e navegar pela página em qualquer dispositivo.

#### Acceptance Criteria

1. THE Cabecalho SHALL exibir o nome "Fluxo Digital" como identidade da marca na barra de navegação.
2. THE Cabecalho SHALL conter links de navegação interna para as seções da página.
3. WHEN a largura da tela é inferior ao breakpoint `md` do Bootstrap, THE Cabecalho SHALL colapsar os links de navegação em um menu hambúrguer.
4. WHILE o menu hambúrguer está fechado, THE Cabecalho SHALL exibir apenas o nome da marca e o botão de toggle.
5. WHEN o botão de toggle é acionado, THE Cabecalho SHALL expandir ou recolher o menu de navegação.
6. THE Cabecalho SHALL aplicar cores da Paleta_Tecnologica para manter consistência visual com o restante da Aplicação.

---

### Requirement 3: Componente Banner Principal

**User Story:** Como visitante, quero uma seção hero impactante ao acessar a página, para que eu compreenda imediatamente a proposta de valor da Fluxo Digital.

#### Acceptance Criteria

1. THE Banner_Principal SHALL exibir um título principal com mensagem sobre transformação digital.
2. THE Banner_Principal SHALL exibir um subtítulo complementar ao título principal.
3. THE Banner_Principal SHALL conter um botão de chamada para ação (call-to-action).
4. WHEN o cursor é posicionado sobre o botão de chamada para ação, THE Banner_Principal SHALL aplicar um efeito visual de hover definido no CSS personalizado.
5. THE Banner_Principal SHALL utilizar cores da Paleta_Tecnologica como fundo e texto para criar contraste visual adequado.
6. THE Banner_Principal SHALL ser responsivo, adaptando layout e tipografia para telas de diferentes tamanhos utilizando utilitários do Bootstrap.

---

### Requirement 4: Componente Card de Serviço

**User Story:** Como visitante, quero visualizar cada serviço em um card individual e bem estruturado, para que eu possa entender rapidamente o que cada serviço oferece.

#### Acceptance Criteria

1. THE Card_Servico SHALL receber os dados de um Servico exclusivamente via Props do componente pai.
2. THE Card_Servico SHALL exibir o Icone_Lucide correspondente ao Servico recebido via Props.
3. THE Card_Servico SHALL exibir o `titulo` do Servico recebido via Props.
4. THE Card_Servico SHALL exibir a `descricao` do Servico recebido via Props.
5. THE Card_Servico SHALL exibir um botão com o texto definido em `textoBotao` do Servico recebido via Props.
6. WHEN o cursor é posicionado sobre o Card_Servico, THE Card_Servico SHALL aplicar uma transição visual suave definida no CSS personalizado.
7. THE Card_Servico SHALL aplicar espaçamentos internos utilizando classes utilitárias do Bootstrap para garantir hierarquia visual clara.

---

### Requirement 5: Renderização do Catálogo

**User Story:** Como desenvolvedor acadêmico, quero que os cards sejam gerados dinamicamente a partir dos dados, para que a adição de novos serviços não exija alterações no template de apresentação.

#### Acceptance Criteria

1. THE Aplicação SHALL importar o array de serviços do arquivo `src/dados/servicos.js` no componente `App.jsx`.
2. WHEN o array de serviços é carregado, THE Aplicação SHALL utilizar o método `.map()` do JavaScript para renderizar um Card_Servico para cada Servico do array.
3. THE Aplicação SHALL atribuir a propriedade `key` única a cada Card_Servico renderizado pelo `.map()`, utilizando o campo `id` do Servico.
4. THE Aplicação SHALL organizar os Card_Servico em um grid responsivo utilizando o sistema Row/Col do Bootstrap com espaçamento `g-4`.
5. WHEN o array de serviços contém sete itens, THE Aplicação SHALL renderizar exatamente sete Card_Servico na página.

---

### Requirement 6: Componente Seção Destaque

**User Story:** Como visitante, quero ver os diferenciais da Fluxo Digital destacados na página, para que eu possa avaliar as vantagens competitivas da empresa.

#### Acceptance Criteria

1. THE Secao_Destaque SHALL exibir pelo menos três diferenciais, vantagens competitivas ou métricas de sucesso da Fluxo Digital.
2. THE Secao_Destaque SHALL organizar os diferenciais utilizando o sistema Row/Col do Bootstrap para layout responsivo.
3. THE Secao_Destaque SHALL aplicar padding vertical utilizando a classe `py-5` do Bootstrap para espaçamento adequado.
4. THE Secao_Destaque SHALL utilizar cores da Paleta_Tecnologica para manter consistência visual com o restante da Aplicação.
5. WHEN a largura da tela é inferior ao breakpoint `md` do Bootstrap, THE Secao_Destaque SHALL empilhar os diferenciais verticalmente em coluna única.

---

### Requirement 7: Componente Rodapé

**User Story:** Como visitante, quero um rodapé com informações da aplicação e créditos dos autores, para que eu possa identificar os responsáveis pelo projeto acadêmico.

#### Acceptance Criteria

1. THE Rodape SHALL exibir o nome da aplicação "Fluxo Digital".
2. THE Rodape SHALL exibir os créditos dos autores: Lucas Cassiano Fonseca e Murilo do Carmo.
3. THE Rodape SHALL exibir informações de contexto acadêmico do projeto.
4. THE Rodape SHALL aplicar cores da Paleta_Tecnologica para manter consistência visual com o restante da Aplicação.
5. THE Rodape SHALL ser responsivo, adaptando o layout para telas de diferentes tamanhos utilizando utilitários do Bootstrap.

---

### Requirement 8: Identidade Visual e Estilização

**User Story:** Como visitante, quero uma interface visualmente coesa e moderna, para que a aplicação transmita profissionalismo e credibilidade tecnológica.

#### Acceptance Criteria

1. THE Aplicação SHALL definir a Paleta_Tecnologica no arquivo `src/index.css` utilizando variáveis CSS, contendo: cor primária (azul escuro ou violeta tecnológico), cor de fundo (cinza claro) e cor de destaque vibrante para botões e elementos interativos.
2. THE Aplicação SHALL importar o Bootstrap 5 como dependência do projeto e aplicar suas classes de grid e utilitários em todos os componentes.
3. THE Aplicação SHALL importar a biblioteca Lucide React como dependência do projeto para uso dos ícones nos Card_Servico.
4. THE Aplicação SHALL definir transições CSS suaves no arquivo `src/index.css` para elementos interativos como cards e botões.
5. THE Aplicação SHALL aplicar tipografia consistente em todos os componentes, utilizando fontes adequadas para contexto tecnológico.
6. WHEN qualquer componente é renderizado em tela com largura inferior a 768px, THE Aplicação SHALL adaptar o layout para garantir legibilidade e usabilidade em dispositivos móveis.

---

### Requirement 9: Configuração e Execução do Projeto

**User Story:** Como desenvolvedor acadêmico, quero um projeto configurado com Vite e React, para que o ambiente de desenvolvimento seja rápido e o projeto possa ser executado com comandos padrão.

#### Acceptance Criteria

1. THE Aplicação SHALL ser configurada como projeto React com Vite, contendo os arquivos `package.json`, `vite.config.js` e estrutura padrão de diretórios.
2. WHEN o comando `npm install` é executado no diretório raiz do projeto, THE Aplicação SHALL instalar todas as dependências necessárias sem erros.
3. WHEN o comando `npm run dev` é executado após a instalação das dependências, THE Aplicação SHALL iniciar o servidor de desenvolvimento Vite e disponibilizar a aplicação em `localhost`.
4. THE Aplicação SHALL conter o arquivo `README.md` na raiz do projeto com: nome do projeto, nomes dos autores (Lucas Cassiano Fonseca e Murilo do Carmo), tecnologias utilizadas (React, Vite, Bootstrap 5, Lucide React), descrição breve e instruções de execução (`npm install` e `npm run dev`).

---

### Requirement 10: Composição e Organização dos Componentes

**User Story:** Como desenvolvedor acadêmico, quero que o App.jsx componha todos os componentes em ordem lógica, para que a página apresente uma narrativa visual coerente ao visitante.

#### Acceptance Criteria

1. THE Aplicação SHALL importar e renderizar os componentes na seguinte ordem no `App.jsx`: Cabecalho, Banner_Principal, seção do Catálogo com os Card_Servico, Secao_Destaque e Rodape.
2. THE Aplicação SHALL organizar os arquivos de componentes no diretório `src/componentes/` com os nomes: `Cabecalho.jsx`, `BannerPrincipal.jsx`, `CardServico.jsx`, `SecaoDestaque.jsx` e `Rodape.jsx`.
3. THE Aplicação SHALL organizar os arquivos de dados no diretório `src/dados/` com o nome `servicos.js`.
4. WHEN todos os componentes são renderizados juntos, THE Aplicação SHALL apresentar uma página completa sem erros de console relacionados a Props ausentes ou keys duplicadas.
