const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/60 bg-slate-950/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-3">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-amber-200/80">
              Lingatec
            </p>
            <p className="text-lg font-semibold">Soluções em Elevação</p>
          </div>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          <a className="transition hover:text-white" href="#empresa">
            Empresa
          </a>
          <a className="transition hover:text-white" href="#produtos">
            Produtos
          </a>
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
        <button className="rounded-full border border-amber-400/60 px-4 py-2 text-sm font-medium text-amber-100 transition hover:border-amber-300 hover:text-white">
          Solicitar orçamento
        </button>
      </div>
    </header>
  );
};

export default Header;
