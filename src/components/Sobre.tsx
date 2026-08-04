export default function Sobre() {
  return (
    <section id="sobre" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h2 className="font-display text-2xl font-semibold text-grafite sm:text-3xl">Sobre mim</h2>
      <div className="mt-8 max-w-3xl space-y-6 text-grafite/85">
        <p>
          Sou Paloma Brum Lima, desenvolvedora com mais de um ano e meio de experiência criando
          sistemas internos para uma cooperativa do setor financeiro (SICOOB). Meu trabalho nasce de
          um princípio simples: todo processo manual e disperso — planilhas soltas, comunicação
          espalhada entre e-mail e Teams, retrabalho — pode virar um sistema que organiza, automatiza
          e dá visibilidade.
        </p>
        <p>
          Um exemplo direto: o sistema de gestão de demandas que desenvolvi hoje é usado por{' '}
          <strong className="font-display text-terracota">mais de 90%</strong> dos{' '}
          <strong className="font-display text-terracota">400+</strong> colaboradores da empresa, com{' '}
          <strong className="font-display text-oliva">mais de 17.900</strong> demandas registradas —
          eliminando a dispersão de comunicação e trazendo métricas reais de acompanhamento.
        </p>
        <p>
          Além do desenvolvimento em si, atuo com melhoria de processos, dashboards de performance e
          identificação de gargalos operacionais, sempre buscando entender o problema de negócio
          antes de escrever a primeira linha de código.
        </p>
        <p className="border-l-2 border-terracota pl-4 text-grafite/75">
          Desde criança eu já gostava de mexer no computador — descobrir como as coisas funcionavam,
          tentar consertar o que dava errado. Esse gosto por entender e resolver problemas foi
          crescendo comigo, e hoje ele é a base de como trabalho: não é só entregar uma ferramenta, é
          entender onde uma equipe perde tempo, onde a informação se perde no meio do caminho entre
          um e-mail e uma mensagem no Teams, e transformar isso em algo que melhore de verdade o dia
          a dia de centenas de pessoas.
        </p>
      </div>
    </section>
  )
}
