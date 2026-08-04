const entregas = [
  { texto: 'Sistema de Gestão de Demandas', numero: '90%+ adoção · 400+ colaboradores · 17.900+ demandas' },
  { texto: 'Sistema de Metas Estratégicas', numero: null },
  { texto: 'Livro Caixa Digital', numero: '40 agências · 140+ colaboradores' },
  { texto: 'Gerenciador de Cadastros', numero: '417 colaboradores · 1.000+ cadastros' },
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
      <h2 className="font-display text-2xl font-semibold text-grafite sm:text-3xl">
        Experiência Profissional
      </h2>

      <div className="mt-8 max-w-3xl">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="font-display text-lg font-semibold text-grafite">Desenvolvedora de Sistemas</h3>
          <span className="font-mono text-xs text-terracota">jan/2025 – atual</span>
        </div>
        <p className="mt-1 text-sm text-grafite/70">
          Setor Financeiro, Cooperativa (SICOOB)
        </p>
        <p className="mt-4 text-grafite/85">
          Responsável pelo desenvolvimento de soluções digitais internas voltadas à melhoria de
          processos e performance operacional, atuando desde o levantamento de necessidades até a
          entrega e manutenção dos sistemas.
        </p>

        <h4 className="mt-6 text-sm font-semibold text-grafite">Principais entregas</h4>
        <ul className="mt-3 space-y-3">
          {entregas.map((item) => (
            <li key={item.texto} className="border-l-2 border-petroleo pl-4">
              <span className="block text-sm font-medium text-grafite">{item.texto}</span>
              {item.numero && (
                <span className="block font-display text-sm font-semibold text-oliva">{item.numero}</span>
              )}
            </li>
          ))}
        </ul>

        <h4 className="mt-8 text-sm font-semibold text-grafite">Áreas de atuação</h4>
        <p className="mt-2 text-sm text-grafite/70">{areas.join(' · ')}</p>
      </div>
    </section>
  )
}
