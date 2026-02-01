import { useRef } from "react";
import { getCardTransform, type MousePosition } from "@/lib/getCardTransform";
import type { Manilha } from "@/types";

type ManilhasSectionProps = {
  manilhas: Manilha[];
  activeManilha: number;
  onPrev: () => void;
  onNext: () => void;
  onSelect: (index: number) => void;
  globalMousePos: MousePosition;
};

const ManilhasSection = ({
  manilhas,
  activeManilha,
  onPrev,
  onNext,
  onSelect,
  globalMousePos,
}: ManilhasSectionProps) => {
  const sliderCardRef = useRef<HTMLDivElement>(null);
  const transform = getCardTransform(sliderCardRef, globalMousePos, 0.3);

  return (
    <section className="border-t border-slate-800/70 bg-slate-950/70" id="manilhas">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-amber-200/80">
              Linha de manilhas
            </p>
            <h2 className="text-3xl font-semibold text-white">Manilhas em destaque</h2>
            <p className="max-w-2xl text-slate-300">
              Selecione cada modelo para visualizar aplicações e
              especificações com foco em segurança e conformidade.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onPrev}
              className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200 transition hover:border-slate-500 hover:text-white"
            >
              Anterior
            </button>
            <button
              onClick={onNext}
              className="rounded-full bg-amber-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-amber-300"
            >
              Próxima
            </button>
          </div>
        </div>

        <div
          ref={sliderCardRef}
          className="relative mt-10 overflow-hidden rounded-3xl border border-slate-800/70 bg-slate-900/40"
          style={{
            perspective: "1200px",
            transform: `perspective(1200px) rotateX(${transform.rotX}deg) rotateY(${transform.rotY}deg)`,
            boxShadow: `${transform.shadowX}px ${transform.shadowY}px 50px 5px rgba(0, 0, 0, 0.5)`,
            transition: "transform 0.3s ease-out, box-shadow 0.3s ease-out",
          }}
          id="slider-container"
        >
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${activeManilha * 100}%)`,
              backfaceVisibility: "hidden",
            }}
          >
            {manilhas.map((item) => (
              <div key={item.name} className="w-full shrink-0 p-8">
                <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
                  <div className="space-y-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-amber-200/80">
                      {item.tag}
                    </p>
                    <h3 className="text-2xl font-semibold text-white">{item.name}</h3>
                    <p className="text-slate-300">
                      Componentes certificados para aplicações industriais
                      críticas, com documentação técnica completa.
                    </p>
                    <div className="flex items-center gap-3 text-sm text-slate-300">
                      <span className="h-2 w-2 rounded-full bg-amber-400" />
                      Pronto para entrega e inspeção.
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-64 w-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:justify-start">
          {manilhas.map((item, index) => (
            <button
              key={item.name}
              onClick={() => onSelect(index)}
              className={`rounded-full border px-3 py-1 text-xs transition ${
                index === activeManilha
                  ? "border-amber-400 bg-amber-400 text-slate-950"
                  : "border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManilhasSection;
