import StatusBar from './StatusBar'

export default function Contato() {
  return (
    <section id="contato" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="border border-nevoa bg-papel p-6 shadow-elevado sm:p-10">
        <StatusBar label="Vamos conversar" color="terracota" />
        <h2 className="mt-4 font-display text-2xl font-semibold text-grafite sm:text-3xl">
          Tem um processo manual travando sua equipe?
        </h2>
        <p className="mt-4 max-w-2xl text-grafite/80">
          Desenvolvo sistemas, dashboards e automações sob medida para empresas que precisam de mais
          controle e menos retrabalho. Trabalho como PJ — me conte o problema que você quer
          resolver.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          {/* TODO: substituir SEUNUMEROAQUI pelo número real de WhatsApp */}
          <a
            href="https://wa.me/SEUNUMEROAQUI"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-petroleo px-6 py-3 text-sm font-semibold text-papel shadow-elevado-sm transition-colors hover:bg-terracota"
          >
            Chamar no WhatsApp
          </a>
          <a
            href="https://www.linkedin.com/in/paloma-brum-a05878297"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-petroleo underline-offset-4 transition-colors hover:text-terracota hover:underline"
          >
            LinkedIn →
          </a>
        </div>
      </div>

      <footer className="mt-12 border-t border-nevoa pt-6 text-center">
        <p className="font-mono text-xs text-grafite/50">
          © {new Date().getFullYear()} Paloma Brum Lima — Desenvolvedora de Sistemas
        </p>
      </footer>
    </section>
  )
}
