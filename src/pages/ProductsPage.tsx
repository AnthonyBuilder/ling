import { useState } from "react";
import { Link } from "react-router-dom";
import { Header, Footer } from "../components";
import { productsData } from "../data/products";

export function ProductsPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100">
      <Header />

      <main>
        <section className="border-b border-slate-800/70" id="products-hero">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
            <div className="space-y-6">
              <Link
                to="/"
                className="inline-block text-amber-400 hover:text-amber-300 transition text-sm"
              >
                ← Voltar ao início
              </Link>
              <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
                Catálogo de Produtos
              </h1>
              <p className="text-lg text-slate-300 max-w-3xl">
                Explore nossa completa linha de manilhas, slings e acessórios para elevação. 
                Todos os produtos são certificados e testados conforme as normas internacionais.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-800/70 py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {productsData.map((product) => (
                <Link
                  key={product.id}
                  to={`/produtos/${product.id}`}
                  onMouseEnter={() => setHoveredCard(product.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="group relative overflow-hidden rounded-2xl border border-slate-800/70 bg-slate-900/40 p-6 transition-all duration-300 hover:border-amber-500/40"
                  style={{
                    transform: hoveredCard === product.id ? "translateY(-8px)" : "translateY(0)",
                  }}
                >
                  <div className="flex h-32 items-center justify-center mb-4 overflow-hidden rounded-xl bg-slate-950/60">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-28 w-auto object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <p className="text-xs uppercase tracking-[0.2em] text-amber-200/80 mb-2">
                    {product.model}
                  </p>
                  <h3 className="text-sm font-semibold text-white mb-2">
                    {product.name}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-2">
                    {product.tag}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-slate-800/70 py-16 bg-slate-950/60">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-3xl font-semibold text-white mb-8">
              Por que escolher a Lingatec?
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Certificação internacional",
                  description: "Todos os produtos seguem normas ABNT, ISO e certificações internacionais",
                },
                {
                  title: "Suporte técnico 24/7",
                  description: "Equipe especializada pronta para auxiliar em qualquer dúvida ou emergência",
                },
                {
                  title: "Entrega rápida",
                  description: "Estoque disponível com entrega em até 48 horas no Brasil",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-800/70 bg-slate-900/40 p-6"
                >
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
