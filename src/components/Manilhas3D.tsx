import manilhaG4151 from "../assets/manilha_carga_g4151.png";
import manilhaG4153 from "../assets/manilha_carga_g4153.png";
import manilhaG4161 from "../assets/manilha_carga_g4161.webp";
import manilhaG4163 from "../assets/manilha_carga_g4163.webp";

interface Manilha {
  name: string;
  tag: string;
  image: string;
}

export function Manilhas3D() {
  const tracepartsEmbedUrl = "https://www.traceparts.com/";

  const manilhas: Manilha[] = [
    { name: "Bow Shackle SC G-4161", tag: "Pino roscado", image: manilhaG4161 },
    { name: "Bow Shackle BN G-4163", tag: "Pino de segurança", image: manilhaG4163 },
    { name: "Dee Shackle SC G-4151", tag: "Corpo compacto", image: manilhaG4151 },
    { name: "Dee Shackle BN G-4153", tag: "Alta resistência", image: manilhaG4153 },
  ];

  return (
    <section className="border-t border-slate-800/70" id="manilhas-3d">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="mb-8 space-y-3">
          <h2 className="text-3xl font-semibold text-white">
            Manilhas em 3D
          </h2>
          <p className="text-slate-300">
            Visualize os modelos em 3D com a experiência TraceParts.
          </p>
        </div>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {manilhas.map((item) => (
              <div
                key={item.name}
                className="flex items-center gap-4 rounded-2xl border border-slate-800/70 bg-slate-900/40 p-4"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-slate-950/60">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-12 w-auto object-contain"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    {item.name}
                  </p>
                  <p className="text-xs text-slate-400">{item.tag}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-3xl border border-slate-800/70 bg-slate-900/40 p-4">
            <div className="flex aspect-[16/10] w-full flex-col items-center justify-center gap-4 rounded-2xl border border-slate-800/70 bg-slate-950 p-6 text-center">
              <p className="text-sm font-semibold text-white">
                Visualização 3D externa
              </p>
              <p className="text-xs text-slate-400">
                O visualizador TraceParts não permite incorporação direta
                neste domínio. Acesse a experiência 3D no site oficial.
              </p>
              <a
                href={tracepartsEmbedUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-amber-400 px-5 py-2 text-xs font-semibold text-slate-950 transition hover:bg-amber-300"
              >
                Abrir visualização 3D
              </a>
            </div>
            <p className="mt-3 text-xs text-slate-400">
              Modelos 3D interativos via TraceParts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
