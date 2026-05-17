import Cabecalho from './componentes/Cabecalho'
import BannerPrincipal from './componentes/BannerPrincipal'
import CardServico from './componentes/CardServico'
import SecaoDestaque from './componentes/SecaoDestaque'
import Rodape from './componentes/Rodape'
import servicos from './dados/servicos'

/**
 * App — Componente raiz da aplicação Fluxo Digital.
 *
 * Composição da página (ordem de renderização):
 *  1. Cabecalho    — Navbar responsiva
 *  2. BannerPrincipal — Hero section
 *  3. Seção Catálogo  — Grid de CardServico gerado via .map()
 *  4. SecaoDestaque   — Diferenciais competitivos
 *  5. Rodape          — Informações e créditos
 */
function App() {
  return (
    <>
      {/* 1. Cabeçalho / Navbar */}
      <Cabecalho />

      {/* 2. Banner Principal / Hero */}
      <BannerPrincipal />

      {/* 3. Catálogo de Serviços */}
      <section id="servicos" className="secao-catalogo">
        <div className="container">
          {/* Cabeçalho da seção */}
          <div className="text-center mb-5">
            <h2 className="secao-titulo">Nossos Serviços</h2>
            <div className="linha-destaque"></div>
            <p className="secao-subtitulo mt-3">
              Soluções digitais completas para impulsionar sua presença online
              e conectar sua empresa ao mercado digital.
            </p>
          </div>

          {/* Grid responsivo de cards — 1 col (mobile) → 2 col (tablet) → 3 col (desktop) */}
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {servicos.map((servico) => (
              <CardServico
                key={servico.id}
                id={servico.id}
                titulo={servico.titulo}
                descricao={servico.descricao}
                icone={servico.icone}
                textoBotao={servico.textoBotao}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Seção de Diferenciais */}
      <SecaoDestaque />

      {/* 5. Rodapé */}
      <Rodape />
    </>
  )
}

export default App
