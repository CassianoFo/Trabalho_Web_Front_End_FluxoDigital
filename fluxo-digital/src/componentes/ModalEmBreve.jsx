import { Settings, X } from 'lucide-react'

/**
 * ModalEmBreve — Modal exibido ao clicar nos botões de serviço.
 * Informa ao visitante que mais detalhes estarão disponíveis em breve.
 *
 * Props:
 *  @param {boolean}  visivel       - Controla se o modal está aberto
 *  @param {string}   nomeServico   - Nome do serviço clicado
 *  @param {Function} aoFechar      - Callback para fechar o modal
 */
function ModalEmBreve({ visivel, nomeServico, aoFechar }) {
  if (!visivel) return null

  return (
    /* Overlay escuro */
    <div
      className="modal-embreve-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-titulo"
      onClick={aoFechar}
    >
      {/* Caixa do modal — clique interno não fecha */}
      <div
        className="modal-embreve-caixa"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botão fechar */}
        <button
          className="modal-embreve-fechar"
          onClick={aoFechar}
          aria-label="Fechar modal"
          type="button"
        >
          <X size={20} />
        </button>

        {/* Ícone de engrenagem animado */}
        <div className="modal-embreve-icone" aria-hidden="true">
          <div className="engrenagem-externa">
            <Settings size={64} className="engrenagem-gira" strokeWidth={1.5} />
          </div>
          <div className="engrenagem-pequena">
            <Settings size={32} className="engrenagem-gira-inverso" strokeWidth={1.5} />
          </div>
        </div>

        {/* Conteúdo textual */}
        <h3 id="modal-titulo" className="modal-embreve-titulo">
          Em Breve!
        </h3>

        <p className="modal-embreve-servico">{nomeServico}</p>

        <p className="modal-embreve-texto">
          Estamos preparando maiores informações sobre este serviço.
          <br />
          Em breve você poderá conferir todos os detalhes aqui.
        </p>

        {/* Badge de status */}
        <div className="modal-embreve-badge">
          <Settings size={13} aria-hidden="true" />
          Página em manutenção
        </div>

        <button
          className="modal-embreve-btn"
          onClick={aoFechar}
          type="button"
        >
          Entendido
        </button>
      </div>
    </div>
  )
}

export default ModalEmBreve
