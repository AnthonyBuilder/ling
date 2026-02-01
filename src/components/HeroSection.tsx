import { useRef } from "react";
import { getCardTransform, type MousePosition } from "@/lib/getCardTransform";

type HeroSectionProps = {
  slingImage: string;
  globalMousePos: MousePosition;
};

const HeroSection = ({ slingImage, globalMousePos }: HeroSectionProps) => {
  const slingCardRef = useRef<HTMLDivElement>(null);
  const transform = getCardTransform(slingCardRef, globalMousePos, 0.5);

  return (
    <section className="relative overflow-hidden" id="empresa">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 via-transparent to-transparent" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-24">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-200/80">
            Segurança e desempenho
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
            Equipamentos de elevação certificados para operações críticas
          </h1>
          <p className="text-lg text-slate-300">
            A Lingatec atua no fornecimento de slings, manilhas e acessórios
            para movimentação de cargas com foco em conformidade técnica,
            rastreabilidade e suporte especializado.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300">
              Fale com um especialista
            </button>
            <button className="rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:text-white">
              Catálogo institucional
            </button>
          </div>
          <div className="grid gap-4 text-sm text-slate-300 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-800/70 bg-slate-900/40 p-4">
              <p className="text-2xl font-semibold text-white">+15 anos</p>
              <p>de experiência em elevação</p>
            </div>
            <div className="rounded-2xl border border-slate-800/70 bg-slate-900/40 p-4">
              <p className="text-2xl font-semibold text-white">100%</p>
              <p>rastreabilidade de lotes</p>
            </div>
            <div className="rounded-2xl border border-slate-800/70 bg-slate-900/40 p-4">
              <p className="text-2xl font-semibold text-white">Suporte</p>
              <p>técnico especializado</p>
            </div>
          </div>
        </div>

        <div ref={slingCardRef} className="relative">
          <div className="absolute -inset-6 rounded-[32px] bg-gradient-to-br from-amber-500/30 via-transparent to-transparent blur-2xl" />
          <div
            className="relative overflow-hidden rounded-[32px] border border-amber-500/40 bg-slate-900/70 p-6"
            style={{
              perspective: "1200px",
              transform: `perspective(1200px) rotateX(${transform.rotX}deg) rotateY(${transform.rotY}deg)`,
              filter: `drop-shadow(${transform.shadowX}px ${transform.shadowY}px 30px rgba(251, 191, 36, 0.15))`,
              transition: "transform 0.3s ease-out, filter 0.3s ease-out",
              backfaceVisibility: "hidden",
            }}
          >
            <img
              src={slingImage}
              alt="Sling de elevação"
              className="mx-auto h-[340px] w-auto object-contain"
            />
            <div className="mt-6 space-y-3 text-base text-slate-300">
              <p className="text-xl font-semibold text-white">
                Lingas cadeia dupla com ganchos de segurança
              </p>
              <p>
                Fabricado para aplicações industriais de alta carga com
                inspeção e certificação conforme normas vigentes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
