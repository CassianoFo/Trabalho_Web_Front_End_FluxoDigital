import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import ModalEmBreve from './ModalEmBreve'

/**
 * CardServico — Componente reutilizável para exibir um serviço digital.
 * Ao clicar no botão, abre o modal "Em Breve" com animação de engrenagem.
 *
 * Props:
 *  @param {number}    id          - Identificador único do serviço
 *  @param {string}    titulo      - Nome do serviço
 *  @param {string}    descricao   - Descrição do serviço
 *  @param {Component} icone       - Componente de ícone Lucide React
 *  @param {string}    textoBotao  - Texto do botão de ação
 */
function CardServico({ titulo, descricao, icone: Icone, textoBotao }) {
  const [modalAberto, setModalAberto] = useState(false)

  return (
    <>
      <div className="col">
        <div className="card-servico p-4 d-flex flex-column h-100">
          {/* Ícone do serviço */}
          <div className="icone-wrapper mb-3" aria-hidden="true">
            <Icone size={26} strokeWidth={1.75} />
          </div>

          {/* Título */}
          <h5 className="card-title mb-2">{titulo}</h5>

          {/* Descrição */}
          <p className="card-text flex-grow-1">{descricao}</p>

          {/* Botão de ação — abre o modal Em Breve */}
          <button
            className="btn-servico mt-3"
            type="button"
            aria-label={`Saiba mais sobre ${titulo}`}
            onClick={() => setModalAberto(true)}
          >
            {textoBotao}
            <ArrowRight size={15} aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Modal Em Breve */}
      <ModalEmBreve
        visivel={modalAberto}
        nomeServico={titulo}
        aoFechar={() => setModalAberto(false)}
      />
    </>
  )
}

export default CardServico
