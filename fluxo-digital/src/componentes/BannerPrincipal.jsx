import { ArrowRight, Globe, Sparkles } from 'lucide-react'

/**
 * BannerPrincipal — Seção hero com título impactante, subtítulo e botão CTA.
 * Fundo com gradiente tecnológico e decoração visual animada.
 */
function BannerPrincipal() {
  return (
    <section id="inicio" className="banner-principal">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Conteúdo textual */}
          <div className="col-lg-7">
            {/* Badge de destaque */}
            <div className="badge-topo">
              <Sparkles size={13} aria-hidden="true" />
              Soluções Digitais para o seu Negócio
            </div>

            {/* Título principal */}
            <h1>
              Transforme sua{' '}
              <span className="destaque-titulo">presença digital</span>{' '}
              e acelere seus resultados
            </h1>

            {/* Subtítulo */}
            <p className="subtitulo">
              Da landing page ao e-commerce, do SEO à integração com WhatsApp —
              a Fluxo Digital entrega soluções de TI completas para conectar sua
              empresa ao mundo online.
            </p>

            {/* Botão CTA */}
            <a href="#servicos" className="btn-cta">
              Explorar Serviços
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>

          {/* Decoração visual — visível apenas em telas grandes */}
          <div className="col-lg-5 d-none d-lg-flex banner-decoracao">
            <div className="circulo-externo">
              <div className="circulo-interno">
                <Globe
                  size={80}
                  className="icone-central"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BannerPrincipal
