import StatusBar from './StatusBar'
import Retrato from './Retrato'

export default function Hero() {
  return (
    <section id="home" className="mx-auto max-w-6xl px-4 pt-32 pb-16 sm:px-6">
      <div className="grid gap-8 lg:grid-cols-[1fr_280px] lg:items-start">
        <div className="border border-nevoa bg-papel p-6 shadow-elevado sm:p-10">
          <StatusBar label="Disponível para novos projetos" />
          <h1 className="mt-6 font-display text-3xl font-semibold leading-tight text-grafite sm:text-4xl lg:text-5xl">
            Tecnologia pensada pro seu negócio:{' '}
            <span className="text-terracota">sistemas que organizam, automatizam e dão controle</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-grafite/80">
            Especialista em tecnologia e melhoria de performance empresarial, com mais de 1 ano e
            meio de experiência desenvolvendo sistemas internos para o setor financeiro (SICOOB).
          </p>
          <a
            href="#contato"
            className="mt-8 inline-block bg-petroleo px-6 py-3 text-sm font-semibold text-papel shadow-elevado-sm transition-colors hover:bg-terracota"
          >
            Vamos conversar sobre seu projeto
          </a>
        </div>

        <div className="mt-4 flex items-center justify-center">
          <Retrato
            src={`${import.meta.env.BASE_URL}profile.png`}
            alt="Paloma B. Lima"
            legenda="Paloma B. Lima"
            sublegenda="Dev de Sistemas"
          />
        </div>
      </div>

      <div className="mt-8 border border-nevoa bg-papel p-6 shadow-elevado sm:p-8">
        <StatusBar label="Resultado que já entreguei" color="terracota" />
        <div className="mt-5 grid gap-6 sm:grid-cols-2">
          <div>
            <span className="block font-display text-4xl font-semibold text-terracota sm:text-5xl">
              90%+
            </span>
            <span className="mt-1 block text-sm text-grafite/70">
              dos 400+ colaboradores usam o sistema de gestão de demandas que desenvolvi
            </span>
          </div>
          <div>
            <span className="block font-display text-4xl font-semibold text-oliva sm:text-5xl">
              17.900+
            </span>
            <span className="mt-1 block text-sm text-grafite/70">
              demandas registradas — comunicação dispersa por e-mail e Teams virou fluxo único,
              rastreável e com métricas de acompanhamento
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
