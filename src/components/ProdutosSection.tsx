import { useState, type MouseEvent } from "react";

const ProdutosSection = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const handleCardMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
  };

  const handleCardMouseLeave = () => {
    setHoveredCard(null);
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section className="border-t border-slate-800/70 bg-slate-950/60" id="produtos">
      <div className="mx-auto grid max-w-6xl gap-6 px-6 py-12 md:grid-cols-3">
        {[
          {
            title: "Lingas de corrente",
            description: "Configurações personalizadas para içamento seguro.",
          },
          {
            title: "Manilhas e acessórios",
            description: "Componentes certificados para aplicações críticas.",
          },
          {
            title: "Engenharia aplicada",
            description: "Suporte técnico para projeto e inspeção em campo.",
          },
        ].map((item) => {
          const isHovered = hoveredCard === item.title;
          const rotX = isHovered ? (mousePos.y - 100) * 0.05 : 0;
          const rotY = isHovered ? (mousePos.x - 130) * -0.05 : 0;
          const shadowX = isHovered ? (mousePos.x - 130) * 0.1 : 0;
          const shadowY = isHovered ? (mousePos.y - 100) * 0.1 : 0;

          return (
            <div
              key={item.title}
              onMouseEnter={() => setHoveredCard(item.title)}
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              className="rounded-3xl border border-slate-800/70 bg-slate-900/40 p-6"
              style={{
                transform: `perspective(1200px) rotateX(${rotX}deg) rotateY(${rotY}deg)`,
                transition: "transform 0.3s ease-out",
                boxShadow: `${shadowX}px ${shadowY}px 24px rgba(0, 0, 0, 0.35)`,
              }}
            >
              <p className="text-lg font-semibold text-white">{item.title}</p>
              <p className="mt-2 text-sm text-slate-300">{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProdutosSection;
