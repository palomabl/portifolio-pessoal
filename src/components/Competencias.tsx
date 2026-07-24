const categorias = [
  {
    titulo: 'Sistemas sob medida',
    resumo: 'Construo o sistema do zero, pensado pro seu processo — não um template genérico.',
    stack: ['JavaScript', 'TypeScript', 'React', 'Tailwind CSS', 'Docker'],
  },
  {
    titulo: 'Organização de dados',
    resumo: 'Guardo e organizo as informações do seu negócio de forma confiável e consultável.',
    stack: ['MySQL'],
  },
  {
    titulo: 'Infraestrutura estável',
    resumo: 'Cuido de como o sistema roda no dia a dia, pra não cair e não travar.',
    stack: ['Docker', 'Traefik (proxy reverso)'],
  },
  {
    titulo: 'Dashboards e métricas',
    resumo: 'Transformo dado bruto em painel simples de olhar, pra você enxergar onde o processo trava.',
    stack: ['Visualização de dados', 'Análise de indicadores'],
  },
  {
    titulo: 'Automação de processos',
    resumo: 'Tiro tarefa repetitiva de planilha e e-mail e ponho pra rodar sozinha.',
    stack: ['Power Automate', 'Automação com IA'],
  },
  {
    titulo: 'Levantamento e desenho de solução',
    resumo: 'Antes de programar, entendo o processo real da sua equipe pra propor a solução certa.',
    stack: ['Levantamento de requisitos', 'Pensamento de produto'],
  },
  {
    titulo: 'Comunicação com o negócio',
    resumo: 'Traduzo problema de equipe/setor em solução técnica, sem depender de você falar "tech".',
    stack: ['Comunicação com múltiplos setores', 'Resolução de problemas'],
  },
]

const seguranca = {
  resumo:
    'Desenvolvo sistemas com segurança desde a arquitetura — dados sensíveis protegidos, acesso controlado por papéis e proteção contra as vulnerabilidades mais comuns.',
  stack: [
    'Hash de dados sensíveis',
    'Controle de acesso por papéis (RBAC)',
    'Validação de dados com Zod',
    'Sanitização de inputs e queries parametrizadas',
    'Autenticação com tokens httpOnly',
    'Auditoria e rastreabilidade',
  ],
}

export default function Competencias() {
  return (
    <section id="competencias" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h2 className="text-2xl font-semibold text-indigo-profundo sm:text-3xl">
        O que eu resolvo pra você
      </h2>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categorias.map((cat) => (
          <div key={cat.titulo} className="rounded-md border border-linha bg-papel-cartao p-6">
            <h3 className="font-medium text-indigo-profundo">{cat.titulo}</h3>
            <p className="mt-2 text-sm text-indigo-profundo/80">{cat.resumo}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {cat.stack.map((item) => (
                <li
                  key={item}
                  className="rounded-sm bg-indigo-profundo px-2.5 py-1 text-xs text-papel-quente/60"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="rounded-md border border-linha bg-papel-cartao p-6 sm:col-span-2 lg:col-span-3">
          <h3 className="font-medium text-indigo-profundo">Segurança</h3>
          <p className="mt-3 text-sm text-indigo-profundo/80">{seguranca.resumo}</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {seguranca.stack.map((item) => (
              <li
                key={item}
                className="rounded-sm bg-indigo-profundo px-2.5 py-1 text-xs text-papel-quente/60"
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
