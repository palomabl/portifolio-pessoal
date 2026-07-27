import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Competencias from './components/Competencias'
import Projetos from './components/Projetos'
import Experiencia from './components/Experiencia'
import Contato from './components/Contato'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Projetos />
        <Competencias />
        <Experiencia />
        <Contato />
      </main>
    </>
  )
}
