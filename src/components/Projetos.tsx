import { useState } from 'react'
import StatusBar from './StatusBar'

const capturas = import.meta.glob('/src/assets/projetos/*/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
}) as Record<string, string>

function imagensDoProjeto(slug: string): string[] {
  return Object.keys(capturas)
    .filter((caminho) => caminho.includes(`/projetos/${slug}/`))
    .sort()
    .map((caminho) => capturas[caminho])
}

interface Projeto {
  categoria: string
  nome: string
  slug: string
  problema: string
  solucao: string
  funcionalidades: string[]
  impacto: string
  destaque?: boolean
}

const projetos: Projeto[] = [
  {
    categoria: 'Gestão de demandas',
    nome: 'Sistema de Gestão de Demandas',
    slug: 'sistema-gestao-demandas',
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
    categoria: 'Metas e desempenho',
    nome: 'Sistema de Metas Estratégicas',
    slug: 'sistema-metas-estrategicas',
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
    categoria: 'Financeiro e auditoria',
    nome: 'Livro Caixa Digital',
    slug: 'livro-caixa-digital',
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
    categoria: 'Educação financeira',
    nome: 'CoopKids',
    slug: 'coopkids',
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
    categoria: 'Processos e cadastro',
    nome: 'Gerenciador de Cadastros',
    slug: 'gerenciador-cadastros',
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

function ProjetoGaleria({ imagens, alt }: { imagens: string[]; alt: string }) {
  const [indice, setIndice] = useState(0)

  if (imagens.length === 0) {
    return (
      <div className="mt-4 flex aspect-video items-center justify-center rounded-sm border border-dashed border-linha bg-papel-quente px-4 text-center">
        <p className="text-xs text-indigo-profundo/50">Prints do sistema em breve</p>
      </div>
    )
  }

  const anterior = () => setIndice((i) => (i - 1 + imagens.length) % imagens.length)
  const proxima = () => setIndice((i) => (i + 1) % imagens.length)

  return (
    <div className="relative mt-4">
      <div className="overflow-hidden rounded-sm border border-linha">
        <div
          className="flex transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${indice * 100}%)` }}
        >
          {imagens.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`${alt} — foto ${i + 1} de ${imagens.length}`}
              loading="lazy"
              className="aspect-video w-full flex-shrink-0 object-cover"
            />
          ))}
        </div>
      </div>

      {imagens.length > 1 && (
        <>
          <button
            type="button"
            onClick={anterior}
            aria-label="Foto anterior"
            className="absolute left-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border border-linha bg-papel-quente/90 text-lg leading-none text-indigo-profundo shadow-brutal-sm transition-colors hover:bg-orquidea hover:text-papel-quente"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={proxima}
            aria-label="Próxima foto"
            className="absolute right-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border border-linha bg-papel-quente/90 text-lg leading-none text-indigo-profundo shadow-brutal-sm transition-colors hover:bg-orquidea hover:text-papel-quente"
          >
            ›
          </button>
          <div className="mt-2 flex justify-center gap-1.5">
            {imagens.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndice(i)}
                aria-label={`Ir para foto ${i + 1}`}
                className={`h-1.5 w-1.5 rounded-full transition-colors ${
                  i === indice ? 'bg-orquidea' : 'bg-linha'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

function ProjetoCard({ projeto }: { projeto: Projeto }) {
  const borderColor = projeto.destaque ? 'border-orquidea' : 'border-menta'
  return (
    <article
      className={`border ${borderColor} bg-papel-cartao p-6 shadow-brutal sm:p-8 ${
        projeto.destaque ? 'md:col-span-2' : ''
      }`}
    >
      <StatusBar label={projeto.categoria} color={projeto.destaque ? 'orquidea' : 'menta'} />
      <h3 className="mt-4 text-xl font-bold text-indigo-profundo sm:text-2xl">
        {projeto.nome}
      </h3>

      <ProjetoGaleria imagens={imagensDoProjeto(projeto.slug)} alt={`Print do sistema: ${projeto.nome}`} />

      <dl className="mt-6 space-y-4 text-sm text-indigo-profundo/85">
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wide text-orquidea">Problema</dt>
          <dd className="mt-1">{projeto.problema}</dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wide text-orquidea">Solução</dt>
          <dd className="mt-1">{projeto.solucao}</dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wide text-orquidea">O que o sistema faz</dt>
          <dd className="mt-2">
            <ul className="flex flex-wrap gap-2">
              {projeto.funcionalidades.map((f) => (
                <li
                  key={f}
                  className="rounded-sm bg-indigo-profundo px-2.5 py-1 text-xs text-menta"
                >
                  {f}
                </li>
              ))}
            </ul>
          </dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wide text-orquidea">Resultado</dt>
          <dd className="mt-1 font-medium text-menta">{projeto.impacto}</dd>
        </div>
      </dl>
    </article>
  )
}

export default function Projetos() {
  return (
    <section id="projetos" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h2 className="text-2xl font-bold text-indigo-profundo sm:text-3xl">
        Projetos <span className="text-orquidea">e resultados entregues</span>
      </h2>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {projetos.map((p) => (
          <ProjetoCard key={p.nome} projeto={p} />
        ))}
      </div>
    </section>
  )
}
