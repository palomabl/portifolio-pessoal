import { useState } from 'react'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#competencias', label: 'Competências' },
  { href: '#experiencia', label: 'Experiência' },
  { href: '#contato', label: 'Contato' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-linha bg-papel-quente/90 backdrop-blur">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6"
        aria-label="Navegação principal"
      >
        <a href="#home" className="font-mono text-sm font-bold tracking-widest text-indigo-profundo">
          PALOMA<span className="text-orquidea">.</span>LIMA
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-indigo-profundo/80 transition-colors hover:text-menta"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="font-mono text-sm text-indigo-profundo md:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen(!open)}
        >
          {open ? '[ FECHAR ]' : '[ MENU ]'}
        </button>
      </nav>

      {open && (
        <ul id="menu-mobile" className="border-t border-linha bg-papel-quente px-4 pb-4 md:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block py-3 text-sm text-indigo-profundo/80 hover:text-menta"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
