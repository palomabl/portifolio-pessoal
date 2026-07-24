const entregas = [
  'Sistema de Gestão de Demandas (90%+ adoção, 400+ colaboradores, 17.900+ demandas)',
  'Sistema de Metas Estratégicas',
  'Livro Caixa Digital (40 agências, 140+ colaboradores)',
  'Gerenciador de Cadastros (417 colaboradores, 1.000+ cadastros)',
]

const areas = [
  'Desenvolvimento de sistemas (JS/TS/React/Tailwind)',
  'Automação com Power Automate e planilhas',
  'Segurança da informação',
  'Infraestrutura (Docker, Traefik)',
  'Dashboards e análise de dados',
  'Melhoria de processos',
]

export default function Experiencia() {
  return (
    <section id="experiencia" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h2 className="text-2xl font-semibold text-indigo-profundo sm:text-3xl">
        Experiência Profissional
      </h2>

      <div className="mt-8 max-w-3xl">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="text-lg font-medium text-indigo-profundo">Desenvolvedora de Sistemas</h3>
          <span className="font-mono text-xs text-menta">jan/2025 – atual</span>
        </div>
        <p className="mt-1 text-sm text-indigo-profundo/70">
          Setor Financeiro, Cooperativa (SICOOB)
        </p>
        <p className="mt-4 text-indigo-profundo/85">
          Responsável pelo desenvolvimento de soluções digitais internas voltadas à melhoria de
          processos e performance operacional, atuando desde o levantamento de necessidades até a
          entrega e manutenção dos sistemas.
        </p>

        <h4 className="mt-6 text-sm font-medium text-indigo-profundo">Principais entregas</h4>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-indigo-profundo/85">
          {entregas.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h4 className="mt-6 text-sm font-medium text-indigo-profundo">Áreas de atuação</h4>
        <ul className="mt-2 flex flex-wrap gap-2">
          {areas.map((item) => (
            <li
              key={item}
              className="rounded-sm bg-navy-painel px-2.5 py-1 font-mono text-xs text-menta"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
