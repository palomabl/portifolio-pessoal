import StatusBar from './StatusBar'

const destaques = [
  {
    titulo: 'O que eu construo',
    texto:
      'Sistemas de gestão, dashboards gerenciais e ferramentas de automação que eliminam processos manuais e dão controle sobre o que importa.',
    href: '#projetos',
    linkLabel: 'Ver projetos',
  },
  {
    titulo: 'Como eu trabalho',
    texto:
      'Desenvolvimento não é só código — é entender onde a informação se perde e transformar isso em algo funcional.',
    href: '#sobre',
    linkLabel: 'Sobre mim',
  },
  {
    titulo: 'Disponível para',
    texto:
      'Projetos PJ de desenvolvimento de sistemas, automação de processos e dashboards.',
    href: '#contato',
    linkLabel: 'Entrar em contato',
  },
]

export default function Hero() {
  return (
    <section id="home" className="mx-auto max-w-6xl px-4 pt-32 pb-16 sm:px-6">
      <div className="grid gap-8 lg:grid-cols-[1fr_280px] lg:items-start">
        <div className="border border-orquidea bg-navy-painel p-6 shadow-brutal sm:p-10">
          <StatusBar label="STATUS: DISPONÍVEL P/ PJ" />
          <h1 className="mt-6 font-mono text-3xl font-bold leading-tight text-papel-quente sm:text-4xl lg:text-5xl">
            Tecnologia com visão de negócio:{' '}
            <span className="text-orquidea">sistemas que organizam, automatizam e dão controle</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-papel-quente/85">
            Especialista em tecnologia e melhoria de performance empresarial, com mais de 1 ano e
            meio de experiência desenvolvendo sistemas internos para o setor financeiro (SICOOB).
          </p>
          <a
            href="#contato"
            className="mt-8 inline-block border border-black bg-orquidea px-6 py-3 font-mono text-sm font-bold text-indigo-profundo shadow-brutal-sm transition-colors hover:bg-ambar"
          >
            Vamos conversar sobre seu projeto
          </a>
        </div>

        <div className="hidden border border-menta bg-navy-painel p-4 shadow-brutal lg:block">
          <StatusBar label="AVATAR_3D" />
          {/* espaço reservado para avatar 3D futuro */}
          <div className="mt-4 flex aspect-square items-center justify-center border border-dashed border-menta/40">
            <span className="font-mono text-xs text-menta/50">em breve</span>
          </div>
        </div>
      </div>

      <div className="mt-8 border border-menta bg-navy-painel p-6 shadow-brutal">
        <StatusBar label="PROVA_RÁPIDA" />
        <p className="mt-3 text-papel-quente/90">
          Sistema de gestão de demandas adotado por{' '}
          <strong className="text-menta">mais de 90% dos 400+ colaboradores</strong> da empresa, com{' '}
          <strong className="text-menta">mais de 17.900 demandas registradas</strong> — substituindo
          a comunicação dispersa por e-mail e Teams por um fluxo único, rastreável e com métricas de
          acompanhamento.
        </p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {destaques.map((card) => (
          <a
            key={card.titulo}
            href={card.href}
            className="group border border-navy-painel bg-navy-painel p-6 shadow-brutal transition-colors hover:border-orquidea"
          >
            <h2 className="font-mono text-base font-bold text-orquidea">{card.titulo}</h2>
            <p className="mt-3 text-sm text-papel-quente/80">{card.texto}</p>
            <span className="mt-4 inline-block font-mono text-xs text-menta group-hover:text-ambar">
              {card.linkLabel} →
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}
