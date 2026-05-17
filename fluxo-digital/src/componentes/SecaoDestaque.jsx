import { CheckCircle, Clock, Headphones, Award } from 'lucide-react'

/**
 * Dados dos diferenciais competitivos da Fluxo Digital.
 * Definidos localmente pois são conteúdo estático desta seção.
 */
const diferenciais = [
  {
    id: 1,
    icone: CheckCircle,
    numero: '+200',
    titulo: 'Projetos Entregues',
    descricao:
      'Mais de 200 projetos digitais concluídos com sucesso para clientes de diversos segmentos.',
  },
  {
    id: 2,
    icone: Clock,
    numero: '15 dias',
    titulo: 'Prazo de Entrega',
    descricao:
      'Entregamos projetos completos em até 15 dias úteis, sem abrir mão da qualidade.',
  },
  {
    id: 3,
    icone: Headphones,
    numero: '24/7',
    titulo: 'Suporte Dedicado',
    descricao:
      'Equipe de suporte técnico disponível para atender e resolver qualquer demanda rapidamente.',
  },
  {
    id: 4,
    icone: Award,
    numero: '100%',
    titulo: 'Satisfação Garantida',
    descricao:
      'Trabalhamos até você estar completamente satisfeito com o resultado final do projeto.',
  },
]

/**
 * SecaoDestaque — Exibe os diferenciais e vantagens competitivas da Fluxo Digital.
 * Grid responsivo: 1 coluna (mobile) → 2 colunas (tablet) → 4 colunas (desktop).
 */
function SecaoDestaque() {
  return (
    <section id="diferenciais" className="secao-destaque">
      <div className="container">
        {/* Cabeçalho da seção */}
        <div className="text-center mb-5">
          <h2 className="secao-titulo">Por que escolher a Fluxo Digital?</h2>
          <div className="linha-destaque"></div>
          <p className="secao-subtitulo mt-3">
            Combinamos tecnologia, agilidade e comprometimento para entregar
            soluções digitais que realmente fazem a diferença.
          </p>
        </div>

        {/* Grid de diferenciais */}
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {diferenciais.map(({ id, icone: Icone, numero, titulo, descricao }) => (
            <div className="col" key={id}>
              <div className="diferencial-card">
                {/* Ícone */}
                <div className="diferencial-icone" aria-hidden="true">
                  <Icone size={28} strokeWidth={1.75} />
                </div>

                {/* Métrica em destaque */}
                <div className="diferencial-numero">{numero}</div>

                {/* Título */}
                <div className="diferencial-titulo">{titulo}</div>

                {/* Descrição */}
                <p className="diferencial-descricao">{descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SecaoDestaque
