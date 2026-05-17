import {
  Rocket,
  Building2,
  ShoppingCart,
  BookOpen,
  Briefcase,
  TrendingUp,
  MessageCircle,
} from 'lucide-react'

/**
 * Array de serviços digitais oferecidos pela Fluxo Digital.
 * Cada objeto contém:
 *  - id:          Identificador único numérico
 *  - titulo:      Nome do serviço
 *  - descricao:   Descrição resumida do serviço
 *  - icone:       Componente de ícone da biblioteca Lucide React
 *  - textoBotao:  Texto exibido no botão de ação do card
 */
const servicos = [
  {
    id: 1,
    titulo: 'Landing Page',
    descricao:
      'Páginas de alta conversão criadas para capturar leads e apresentar sua oferta de forma objetiva e persuasiva, com design focado em resultados.',
    icone: Rocket,
    textoBotao: 'Quero minha Landing Page',
  },
  {
    id: 2,
    titulo: 'Site Institucional',
    descricao:
      'Presença digital profissional para sua empresa, com páginas de apresentação, missão, equipe e contato — transmitindo credibilidade e confiança.',
    icone: Building2,
    textoBotao: 'Criar Site Institucional',
  },
  {
    id: 3,
    titulo: 'Loja Virtual',
    descricao:
      'E-commerce completo com catálogo de produtos, carrinho de compras, checkout seguro e integração com meios de pagamento para vender online 24h.',
    icone: ShoppingCart,
    textoBotao: 'Montar minha Loja Virtual',
  },
  {
    id: 4,
    titulo: 'Blog Profissional',
    descricao:
      'Plataforma de conteúdo otimizada para SEO, com categorias, tags e layout editorial moderno para posicionar sua marca como autoridade no segmento.',
    icone: BookOpen,
    textoBotao: 'Criar meu Blog',
  },
  {
    id: 5,
    titulo: 'Portfólio Online',
    descricao:
      'Vitrine digital para profissionais criativos e freelancers exibirem seus projetos com elegância, atraindo novos clientes e oportunidades.',
    icone: Briefcase,
    textoBotao: 'Montar meu Portfólio',
  },
  {
    id: 6,
    titulo: 'Otimização SEO',
    descricao:
      'Estratégias técnicas e de conteúdo para melhorar o posicionamento do seu site nos mecanismos de busca, aumentando o tráfego orgânico qualificado.',
    icone: TrendingUp,
    textoBotao: 'Otimizar meu SEO',
  },
  {
    id: 7,
    titulo: 'Integração com WhatsApp',
    descricao:
      'Conecte seu site ao WhatsApp Business com botões de contato, chatbots e automações para atender clientes em tempo real e aumentar as conversões.',
    icone: MessageCircle,
    textoBotao: 'Integrar WhatsApp',
  },
]

export default servicos
