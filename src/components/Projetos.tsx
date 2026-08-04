import { useEffect, useState } from 'react'
import StatusBar from './StatusBar'
import BrowserFrame from './BrowserFrame'

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

function Lightbox({
  imagens,
  alt,
  indice,
  onFechar,
  onAnterior,
  onProxima,
}: {
  imagens: string[]
  alt: string
  indice: number
  onFechar: () => void
  onAnterior: () => void
  onProxima: () => void
}) {
  useEffect(() => {
    const aoTeclar = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onFechar()
      if (e.key === 'ArrowLeft') onAnterior()
      if (e.key === 'ArrowRight') onProxima()
    }
    window.addEventListener('keydown', aoTeclar)
    return () => window.removeEventListener('keydown', aoTeclar)
  }, [onFechar, onAnterior, onProxima])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-grafite/90 p-4"
      onClick={onFechar}
      role="dialog"
      aria-modal="true"
    >
      <button
        type="button"
        onClick={onFechar}
        aria-label="Fechar"
        className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-papel/40 text-xl leading-none text-papel hover:bg-papel/10"
      >
        ×
      </button>

      <img
        src={imagens[indice]}
        alt={`${alt} — foto ${indice + 1} de ${imagens.length}`}
        className="max-h-[85vh] max-w-full object-contain"
        onClick={(e) => e.stopPropagation()}
      />

      {imagens.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              onAnterior()
            }}
            aria-label="Foto anterior"
            className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-papel/40 text-2xl leading-none text-papel hover:bg-papel/10 sm:left-6"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              onProxima()
            }}
            aria-label="Próxima foto"
            className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-papel/40 text-2xl leading-none text-papel hover:bg-papel/10 sm:right-6"
          >
            ›
          </button>
        </>
      )}
    </div>
  )
}

function ProjetoGaleria({ imagens, alt, slug }: { imagens: string[]; alt: string; slug: string }) {
  const [indice, setIndice] = useState(0)
  const [aberta, setAberta] = useState(false)

  if (imagens.length === 0) {
    return (
      <div className="mt-4 flex aspect-video items-center justify-center border border-dashed border-nevoa bg-osso px-4 text-center">
        <p className="text-xs text-grafite/50">Prints do sistema em breve</p>
      </div>
    )
  }

  const anterior = () => setIndice((i) => (i - 1 + imagens.length) % imagens.length)
  const proxima = () => setIndice((i) => (i + 1) % imagens.length)

  return (
    <div className="relative mt-4">
      <BrowserFrame titulo={`sistema/${slug}`}>
        <div className="overflow-hidden">
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
                onClick={() => {
                  setIndice(i)
                  setAberta(true)
                }}
                className="aspect-video w-full flex-shrink-0 cursor-zoom-in object-cover"
              />
            ))}
          </div>
        </div>
      </BrowserFrame>

      {aberta && (
        <Lightbox
          imagens={imagens}
          alt={alt}
          indice={indice}
          onFechar={() => setAberta(false)}
          onAnterior={anterior}
          onProxima={proxima}
        />
      )}

      {imagens.length > 1 && (
        <>
          <button
            type="button"
            onClick={anterior}
            aria-label="Foto anterior"
            className="absolute left-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border border-nevoa bg-papel/90 text-lg leading-none text-grafite shadow-elevado-sm transition-colors hover:bg-terracota hover:text-papel"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={proxima}
            aria-label="Próxima foto"
            className="absolute right-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border border-nevoa bg-papel/90 text-lg leading-none text-grafite shadow-elevado-sm transition-colors hover:bg-terracota hover:text-papel"
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
                  i === indice ? 'bg-terracota' : 'bg-nevoa'
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
  const borderColor = projeto.destaque ? 'border-terracota' : 'border-nevoa'
  return (
    <article
      className={`border ${borderColor} bg-papel p-6 shadow-elevado sm:p-8 ${
        projeto.destaque ? 'md:col-span-2' : ''
      }`}
    >
      <StatusBar label={projeto.categoria} color={projeto.destaque ? 'terracota' : 'petroleo'} />
      <h3 className="mt-4 font-display text-xl font-semibold text-grafite sm:text-2xl">
        {projeto.nome}
      </h3>

      <ProjetoGaleria
        imagens={imagensDoProjeto(projeto.slug)}
        alt={`Print do sistema: ${projeto.nome}`}
        slug={projeto.slug}
      />

      <dl className="mt-6 space-y-4 text-sm text-grafite/85">
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wide text-petroleo">Problema</dt>
          <dd className="mt-1">{projeto.problema}</dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wide text-petroleo">Solução</dt>
          <dd className="mt-1">{projeto.solucao}</dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wide text-petroleo">O que o sistema faz</dt>
          <dd className="mt-1 text-grafite/75">{projeto.funcionalidades.join(' · ')}</dd>
        </div>
        <div className="border-l-2 border-oliva pl-4">
          <dt className="text-xs font-semibold uppercase tracking-wide text-petroleo">Resultado</dt>
          <dd className="mt-1 font-display text-base font-semibold text-oliva">{projeto.impacto}</dd>
        </div>
      </dl>
    </article>
  )
}

export default function Projetos() {
  return (
    <section id="projetos" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h2 className="font-display text-2xl font-semibold text-grafite sm:text-3xl">
        Projetos <span className="text-terracota">e resultados entregues</span>
      </h2>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {projetos.map((p) => (
          <ProjetoCard key={p.nome} projeto={p} />
        ))}
      </div>
    </section>
  )
}
