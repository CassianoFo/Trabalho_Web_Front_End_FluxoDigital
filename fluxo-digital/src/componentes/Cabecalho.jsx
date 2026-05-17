import { Zap } from 'lucide-react'

/**
 * Cabecalho — Navbar responsiva com collapse para mobile.
 * Utiliza Bootstrap 5 (navbar-expand-md) e identidade visual da Fluxo Digital.
 */
function Cabecalho() {
  return (
    <nav
      className="navbar navbar-expand-md cabecalho"
      aria-label="Navegação principal"
    >
      <div className="container">
        {/* Marca / Logo */}
        <a className="navbar-brand" href="#inicio">
          <Zap size={22} className="brand-icon" aria-hidden="true" />
          Fluxo Digital
        </a>

        {/* Botão hambúrguer para mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menuNavegacao"
          aria-controls="menuNavegacao"
          aria-expanded="false"
          aria-label="Abrir menu de navegação"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links de navegação */}
        <div className="collapse navbar-collapse" id="menuNavegacao">
          <ul className="navbar-nav ms-auto gap-1">
            <li className="nav-item">
              <a className="nav-link" href="#inicio">
                Início
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#servicos">
                Serviços
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#diferenciais">
                Diferenciais
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contato">
                Contato
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Cabecalho
