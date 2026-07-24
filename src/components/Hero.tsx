import StatusBar from './StatusBar'
import ProfileCard from './ProfileCard/ProfileCard'

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
            Tecnologia pensada pro seu negócio:{' '}
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

          <div className="mt-4 flex items-center justify-center">
            <ProfileCard
              className="pc-card--compact"
              name="Paloma B. Lima"
              title="Desenvolvedora de Software"
              handle="palomalima"
              status="Disponível p/ PJ"
              contactText="Contato"
              avatarUrl="/profile.jpg"
              showUserInfo={false}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => {
                window.location.href = '#contato'
              }}
              behindGlowColor="rgba(177, 78, 255, 0.5)"
              iconUrl="/profile-pattern.svg"
              grainUrl="/grain.svg"
              behindGlowEnabled
              innerGradient="linear-gradient(145deg, #b14eff55 0%, #4ce0b344 100%)"
            />
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
