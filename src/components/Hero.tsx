import StatusBar from './StatusBar'
import ProfileCard from './ProfileCard/ProfileCard'

export default function Hero() {
  return (
    <section id="home" className="mx-auto max-w-6xl px-4 pt-32 pb-16 sm:px-6">
      <div className="grid gap-8 lg:grid-cols-[1fr_280px] lg:items-start">
        <div className="border border-orquidea bg-papel-cartao p-6 shadow-brutal sm:p-10">
          <StatusBar label="Disponível para novos projetos" />
          <h1 className="mt-6 text-3xl font-bold leading-tight text-indigo-profundo sm:text-4xl lg:text-5xl">
            Tecnologia pensada pro seu negócio:{' '}
            <span className="text-orquidea">sistemas que organizam, automatizam e dão controle</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-indigo-profundo/85">
            Especialista em tecnologia e melhoria de performance empresarial, com mais de 1 ano e
            meio de experiência desenvolvendo sistemas internos para o setor financeiro (SICOOB).
          </p>
          <a
            href="#contato"
            className="mt-8 inline-block border border-black bg-indigo-profundo px-6 py-3 font-mono text-sm font-bold text-papel-quente shadow-brutal-sm transition-colors hover:bg-orquidea"
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
              enableTilt={false}
              enableMobileTilt={false}
              onContactClick={() => {
                window.location.href = '#contato'
              }}
              behindGlowColor="rgba(139, 47, 201, 0.35)"
              iconUrl="/profile-pattern.svg"
              grainUrl="/grain.svg"
              behindGlowEnabled
              innerGradient="linear-gradient(145deg, #8b2fc933 0%, #0d9d7633 100%)"
            />
          </div>
      </div>

      <div className="mt-8 border border-menta bg-papel-cartao p-6 shadow-brutal">
        <StatusBar label="Resultado que já entreguei" />
        <p className="mt-3 text-indigo-profundo/90">
          Sistema de gestão de demandas adotado por{' '}
          <strong className="text-menta">mais de 90% dos 400+ colaboradores</strong> da empresa, com{' '}
          <strong className="text-menta">mais de 17.900 demandas registradas</strong> — substituindo
          a comunicação dispersa por e-mail e Teams por um fluxo único, rastreável e com métricas de
          acompanhamento.
        </p>
      </div>
    </section>
  )
}
