import { useState } from "react";
import { Link } from "react-router-dom";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/60 bg-slate-950/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-amber-200/80">
              Lingatec
            </p>
            <p className="text-lg font-semibold">Soluções em Elevação</p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          <a className="transition hover:text-white" href="#empresa">
            Empresa
          </a>
          <Link to="/produtos" className="transition hover:text-white">
            Produtos
          </Link>
          <a className="transition hover:text-white" href="#manilhas-3d">
            Manilhas 3D
          </a>
          <a className="transition hover:text-white" href="#qualidade">
            Qualidade
          </a>
          <a className="transition hover:text-white" href="#contato">
            Contato
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden rounded-full border border-amber-400/60 px-4 py-2 text-sm font-medium text-amber-100 transition hover:border-amber-300 hover:text-white md:block">
            Solicitar orçamento
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-slate-100 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-slate-100 transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-slate-100 transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden border-t border-slate-800/70 bg-slate-900/90 px-6 py-4 space-y-4 text-sm text-slate-300">
          <a
            className="block transition hover:text-amber-300"
            href="#empresa"
            onClick={() => setMenuOpen(false)}
          >
            Empresa
          </a>
          <Link
            to="/produtos"
            className="block transition hover:text-amber-300"
            onClick={() => setMenuOpen(false)}
          >
            Produtos
          </Link>
          <a
            className="block transition hover:text-amber-300"
            href="#manilhas-3d"
            onClick={() => setMenuOpen(false)}
          >
            Manilhas 3D
          </a>
          <a
            className="block transition hover:text-amber-300"
            href="#qualidade"
            onClick={() => setMenuOpen(false)}
          >
            Qualidade
          </a>
          <a
            className="block transition hover:text-amber-300"
            href="#contato"
            onClick={() => setMenuOpen(false)}
          >
            Contato
          </a>
          <button className="w-full rounded-full border border-amber-400/60 px-4 py-2 text-sm font-medium text-amber-100 transition hover:border-amber-300 hover:text-white mt-4">
            Solicitar orçamento
          </button>
        </nav>
      )}
    </header>
  );
}
