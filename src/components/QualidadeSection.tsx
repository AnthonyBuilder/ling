import { useState } from "react";

const QualidadeSection = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <section className="border-t border-slate-800/70" id="qualidade">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1fr_1fr]">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold text-white">Qualidade comprovada</h2>
          <p className="text-slate-300">
            Protocolos de inspeção, certificações e documentação completa
            garantem conformidade e segurança para sua operação.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {["Ensaios de carga", "Laudos técnicos", "Rastreabilidade", "Treinamento"].map(
            (item) => (
              <div
                key={item}
                onMouseEnter={() => setHoveredItem(item)}
                onMouseLeave={() => setHoveredItem(null)}
                className="rounded-2xl border border-slate-800/70 bg-slate-900/40 p-4 text-sm text-slate-300 transition-all duration-300"
                style={{
                  transform:
                    hoveredItem === item
                      ? "translateY(-6px) rotateX(3deg) rotateY(-1deg)"
                      : "translateY(0)",
                  perspective: "1200px",
                }}
              >
                {item}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default QualidadeSection;
