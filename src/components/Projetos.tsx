import StatusBar from './StatusBar'

interface Projeto {
  codigo: string
  nome: string
  problema: string
  solucao: string
  funcionalidades: string[]
  impacto: string
  destaque?: boolean
}

const projetos: Projeto[] = [
  {
    codigo: 'PROJETO_01',
    nome: 'Sistema de Gestão de Demandas',
    destaque: true,
    problema:
      'Colaboradores registravam e acompanhavam solicitações de forma dispersa — misturando e-mail, Teams e conversas informais — sem rastreabilidade, sem métricas e sem clareza sobre o andamento de cada demanda.',
    solucao:
      'Sistema centralizado onde qualquer colaborador registra uma demanda, direciona para o setor responsável e acompanha o andamento em tempo real, com chat integrado e avaliação ao final.',
    funcionalidades: [
      'Criação e acompanhamento de demandas',
      'Direcionamento automático para setores',
      'Chat em tempo real',
      'Dashboard com métricas',
      'Sistema de avaliações',
      'Visualização do andamento',
    ],
    impacto:
      'Adotado por mais de 90% dos 400+ colaboradores, com mais de 17.900 demandas registradas.',
  },
  {
    codigo: 'PROJETO_02',
    nome: 'Sistema de Metas Estratégicas',
    problema:
      'Setores sem forma padronizada de registrar e acompanhar metas estratégicas, dificultando visão consolidada do progresso da empresa.',
    solucao:
      'Plataforma onde cada setor registra metas, atualiza andamento, com visão consolidada para a gestão.',
    funcionalidades: [
      'Registro de metas por setor',
      'Atualização de andamento',
      'Dashboard gerencial',
      'Identificação de gargalos',
      'Visualização geral do progresso',
    ],
    impacto:
      'Consolidação da visão de progresso da empresa e maior clareza na identificação de gargalos entre setores.',
  },
  {
    codigo: 'PROJETO_03',
    nome: 'Livro Caixa Digital',
    problema:
      'Lançamentos do caixa diário registrados manualmente, dificultando auditoria e rastreabilidade.',
    solucao:
      'Sistema que digitaliza lançamentos, gera o livro caixa automaticamente e mantém histórico de alterações, com assinatura e auditoria.',
    funcionalidades: [
      'Registro digital',
      'Geração automática do livro caixa',
      'Edição controlada',
      'Assinatura digital',
      'Histórico de alterações',
      'Recursos de auditoria',
    ],
    impacto:
      'Atende 40 agências e mais de 140 colaboradores, eliminando o registro manual diário das movimentações de caixa e reduzindo a probabilidade de erro humano.',
  },
  {
    codigo: 'PROJETO_04',
    nome: 'CoopKids',
    problema: 'Pais com dificuldade em organizar a mesada dos filhos de forma educativa.',
    solucao:
      'Aplicativo onde crianças cumprem tarefas diárias, acumulam pontos e recebem a mesada calculada automaticamente, com quizzes para recuperação de valores.',
    funcionalidades: [
      'Tarefas diárias',
      'Sistema de pontos',
      'Cálculo automático da mesada',
      'Descontos por tarefas não realizadas',
      'Quizzes de recuperação',
      'Acompanhamento de atividades',
    ],
    impacto:
      'Incentivo à responsabilidade e educação financeira infantil por meio de sistema gamificado.',
  },
  {
    codigo: 'PROJETO_05',
    nome: 'Gerenciador de Cadastros',
    problema:
      'Processos de abertura de contas e renovação de cadastros sem padronização, dificultando acompanhamento de desempenho dos cadastristas.',
    solucao:
      'Sistema que organiza todo o fluxo de cadastro, da abertura de contas à renovação, com dashboard de desempenho.',
    funcionalidades: [
      'Gerenciamento de processos de cadastro',
      'Acompanhamento de abertura de contas',
      'Controle de renovações',
      'Dashboard com métricas',
      'Acompanhamento de desempenho',
    ],
    impacto:
      'Atende hoje 417 colaboradores e já processou mais de 1.000 cadastros, plataforma em franco crescimento de adoção.',
  },
]

function ProjetoCard({ projeto }: { projeto: Projeto }) {
  const borderColor = projeto.destaque ? 'border-orquidea' : 'border-menta'
  return (
    <article
      className={`border ${borderColor} bg-navy-painel p-6 shadow-brutal sm:p-8 ${
        projeto.destaque ? 'md:col-span-2' : ''
      }`}
    >
      <StatusBar label={projeto.codigo} color={projeto.destaque ? 'orquidea' : 'menta'} />
      <h3 className="mt-4 font-mono text-xl font-bold text-papel-quente sm:text-2xl">
        {projeto.nome}
      </h3>

      <dl className="mt-6 space-y-4 text-sm text-papel-quente/85">
        <div>
          <dt className="font-mono text-xs tracking-widest text-orquidea">PROBLEMA</dt>
          <dd className="mt-1">{projeto.problema}</dd>
        </div>
        <div>
          <dt className="font-mono text-xs tracking-widest text-orquidea">SOLUÇÃO</dt>
          <dd className="mt-1">{projeto.solucao}</dd>
        </div>
        <div>
          <dt className="font-mono text-xs tracking-widest text-orquidea">FUNCIONALIDADES</dt>
          <dd className="mt-2">
            <ul className="flex flex-wrap gap-2">
              {projeto.funcionalidades.map((f) => (
                <li
                  key={f}
                  className="rounded-sm bg-indigo-profundo px-2.5 py-1 font-mono text-xs text-menta"
                >
                  {f}
                </li>
              ))}
            </ul>
          </dd>
        </div>
        <div>
          <dt className="font-mono text-xs tracking-widest text-orquidea">IMPACTO</dt>
          <dd className="mt-1 font-medium text-menta">{projeto.impacto}</dd>
        </div>
      </dl>
    </article>
  )
}

export default function Projetos() {
  return (
    <section id="projetos" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h2 className="font-mono text-2xl font-bold text-papel-quente sm:text-3xl">
        Projetos <span className="text-orquidea">// Estudos de Caso</span>
      </h2>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {projetos.map((p) => (
          <ProjetoCard key={p.codigo} projeto={p} />
        ))}
      </div>
    </section>
  )
}
