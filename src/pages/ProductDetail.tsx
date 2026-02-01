import { useParams, Link } from "react-router-dom";
import { Header, Footer } from "../components";
import { productsData } from "../data/products";

export function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = productsData.find((p) => p.id === parseInt(id || "1"));

  if (!product) {
    return (
      <div className="relative min-h-screen bg-slate-950 text-slate-100">
        <Header />
        <main className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-center text-slate-400">Produto não encontrado</p>
          <Link to="/produtos" className="inline-block mt-6 text-amber-400 hover:text-amber-300">
            ← Voltar ao catálogo
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100">
      <Header />

      <main>
        <section className="border-b border-slate-800/70 py-8">
          <div className="mx-auto max-w-6xl px-6">
            <Link to="/produtos" className="inline-block text-amber-400 hover:text-amber-300 transition text-sm mb-6">
              ← Voltar ao catálogo
            </Link>
          </div>
        </section>

        <section className="border-b border-slate-800/70 py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-12 md:grid-cols-[1fr_1.2fr]">
              {/* Imagem */}
              <div className="flex items-center justify-center">
                <div className="flex h-96 w-full items-center justify-center rounded-2xl border border-slate-800/70 bg-slate-900/40 p-8">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>

              {/* Informações básicas */}
              <div className="space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-amber-200/80 mb-2">
                    {product.model}
                  </p>
                  <h1 className="text-4xl font-semibold text-white mb-2">
                    {product.name}
                  </h1>
                  <p className="text-lg text-slate-300">
                    {product.tag}
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-800/70 bg-slate-900/40 p-6 space-y-4">
                  <div>
                    <p className="text-sm text-slate-400 mb-1">Tipo</p>
                    <p className="text-white">{product.type}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-1">Fator de Segurança</p>
                    <p className="text-white">{product.safetyFactor}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-1">Temperatura</p>
                    <p className="text-white">{product.temperatureRange}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Especificações técnicas */}
        <section className="border-b border-slate-800/70 py-16 bg-slate-950/60">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-3xl font-semibold text-white mb-12">
              Especificações Técnicas
            </h2>

            <div className="grid gap-8 md:grid-cols-2">
              {/* Material */}
              <div className="rounded-2xl border border-slate-800/70 bg-slate-900/40 p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Material</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {product.material}
                </p>
              </div>

              {/* Acabamento */}
              <div className="rounded-2xl border border-slate-800/70 bg-slate-900/40 p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Acabamento</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {product.finish}
                </p>
              </div>

              {/* Normas */}
              <div className="rounded-2xl border border-slate-800/70 bg-slate-900/40 p-6 md:col-span-2">
                <h3 className="text-lg font-semibold text-white mb-3">Normas e Padrões</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {product.standard}
                </p>
              </div>

              {/* Certificações */}
              <div className="rounded-2xl border border-slate-800/70 bg-slate-900/40 p-6 md:col-span-2">
                <h3 className="text-lg font-semibold text-white mb-3">Certificações</h3>
                <div className="flex flex-wrap gap-3">
                  {product.certification.split(" ").map((cert, idx) => (
                    <span
                      key={idx}
                      className="inline-block px-3 py-1 rounded-full bg-slate-950/60 border border-slate-800/70 text-slate-200 text-xs font-medium"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Especificações resumidas */}
        <section className="border-b border-slate-800/70 py-16">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-3xl font-semibold text-white mb-8">
              Características Principais
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {product.specs.map((spec, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-800/70 bg-slate-900/40 p-4 flex items-start gap-3"
                >
                  <div className="mt-1 h-2 w-2 rounded-full bg-amber-400 shrink-0" />
                  <p className="text-slate-300 text-sm">{spec}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Produtos relacionados */}
        <section className="py-16 bg-slate-950/60">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-3xl font-semibold text-white mb-8">
              Outros Produtos
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {productsData
                .filter((p) => p.id !== product.id)
                .slice(0, 4)
                .map((item) => (
                  <Link
                    key={item.id}
                    to={`/produtos/${item.id}`}
                    className="group rounded-2xl border border-slate-800/70 bg-slate-900/40 p-4 transition-all duration-300 hover:border-amber-500/40 hover:-translate-y-2"
                  >
                    <div className="flex h-24 items-center justify-center mb-3 rounded-xl bg-slate-950/60">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-20 w-auto object-contain"
                      />
                    </div>
                    <p className="text-xs font-semibold text-white truncate">
                      {item.model}
                    </p>
                    <p className="text-xs text-slate-400 line-clamp-2">
                      {item.tag}
                    </p>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
