const categorias = [
  {
    titulo: 'Desenvolvimento & Sistemas',
    itens: ['JavaScript', 'TypeScript', 'React', 'Tailwind CSS', 'Docker', 'Desenvolvimento de sistemas'],
  },
  {
    titulo: 'Banco de Dados',
    itens: ['MySQL (conhecimento)'],
  },
  {
    titulo: 'Infraestrutura',
    itens: ['Arquitetura de aplicações containerizadas com Docker, incluindo roteamento e proxy reverso com Traefik'],
  },
  {
    titulo: 'Dados & Performance',
    itens: ['Dashboards e visualização de métricas', 'Análise de dados', 'Identificação de gargalos operacionais'],
  },
  {
    titulo: 'Processos & Produto',
    itens: [
      'Melhoria de processos',
      'Automação de processos (Power Automate e planilhas)',
      'Levantamento de requisitos',
      'Pensamento de produto',
    ],
  },
  {
    titulo: 'Inteligência Artificial',
    itens: [
      'Uso de Claude Code para desenvolver e acelerar a construção de sistemas',
      'Automação de processos internos com IA',
      'Apoio de IA em análise de dados e construção de dashboards',
    ],
  },
  {
    titulo: 'Colaboração & Negócio',
    itens: ['Comunicação com múltiplos setores', 'Resolução de problemas', 'Criação de soluções para empresas'],
  },
]

const seguranca = [
  'Hash de informações confidenciais no banco de dados',
  'Controle de acesso baseado em papéis (RBAC)',
  'Validação de dados com Zod',
  'Sanitização de inputs e queries parametrizadas',
  'Autenticação com tokens httpOnly',
  'Proxy reverso e isolamento de containers (Traefik + Docker)',
  'Auditoria e rastreabilidade de dados',
]

export default function Competencias() {
  return (
    <section id="competencias" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h2 className="text-2xl font-semibold text-papel-quente sm:text-3xl">
        Competências e Tecnologias
      </h2>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categorias.map((cat) => (
          <div key={cat.titulo} className="rounded-md bg-navy-painel p-6">
            <h3 className="font-medium text-papel-quente">{cat.titulo}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {cat.itens.map((item) => (
                <li
                  key={item}
                  className="rounded-sm bg-indigo-profundo px-2.5 py-1 font-mono text-xs text-menta"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="rounded-md bg-navy-painel p-6 sm:col-span-2 lg:col-span-3">
          <h3 className="font-medium text-papel-quente">Segurança</h3>
          <p className="mt-3 text-sm text-papel-quente/80">
            Desenvolvo sistemas com segurança desde a arquitetura — dados sensíveis protegidos,
            acesso controlado por papéis e proteção contra as vulnerabilidades mais comuns.
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {seguranca.map((item) => (
              <li
                key={item}
                className="rounded-sm bg-indigo-profundo px-2.5 py-1 font-mono text-xs text-menta"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
