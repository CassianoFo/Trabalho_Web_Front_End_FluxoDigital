import { Zap, Github, Linkedin } from 'lucide-react'

/**
 * Rodape — Rodapé moderno com informações da aplicação e créditos dos autores.
 * Layout responsivo em 3 colunas (desktop) → empilhado (mobile).
 */
function Rodape() {
  const anoAtual = new Date().getFullYear()

  return (
    <footer id="contato" className="rodape">
      <div className="container">
        {/* Linha superior: marca + info + autores */}
        <div className="row align-items-start g-4">
          {/* Coluna 1 — Marca e tagline */}
          <div className="col-md-4">
            <div className="rodape-marca">
              <Zap size={18} className="brand-icon" aria-hidden="true" />
              Fluxo Digital
            </div>
            <p className="rodape-tagline mb-0">
              Soluções digitais que transformam negócios.
            </p>
          </div>

          {/* Coluna 2 — Informações do projeto */}
          <div className="col-md-4 text-md-center">
            <p className="mb-1" style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.6)' }}>
              Projeto Acadêmico
            </p>
            <p className="mb-0" style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.4)' }}>
              Desenvolvimento Web Front-End
            </p>
            <p className="mb-0" style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.4)' }}>
              React + Vite + Bootstrap 5
            </p>
          </div>

          {/* Coluna 3 — Autores */}
          <div className="col-md-4 text-md-end">
            <p className="rodape-autores mb-1">
              Desenvolvido por:
            </p>
            <p className="rodape-autores mb-0">
              <strong>Lucas Cassiano Fonseca</strong>
            </p>
            <p className="rodape-autores mb-0">
              <strong>Murilo do Carmo</strong>
            </p>
          </div>
        </div>

        {/* Divisor */}
        <hr className="rodape-divider" />

        {/* Linha inferior: copyright */}
        <div className="row align-items-center">
          <div className="col-12 text-center">
            <p className="rodape-copyright mb-0">
              &copy; {anoAtual} Fluxo Digital. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Rodape
