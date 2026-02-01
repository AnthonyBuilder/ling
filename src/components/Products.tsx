interface ProductsProps {
  hoveredCard: string | null;
  mousePos: { x: number; y: number };
  onCardEnter: (title: string) => void;
  onCardLeave: () => void;
  onCardMouseMove: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export function Products({
  hoveredCard,
  mousePos,
  onCardEnter,
  onCardLeave,
  onCardMouseMove,
}: ProductsProps) {
  const products = [
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
  ];

  return (
    <section className="border-t border-slate-800/70 bg-slate-950/60" id="produtos">
      <div className="mx-auto grid max-w-6xl gap-6 px-6 py-12 md:grid-cols-3">
        {products.map((item) => {
          const isHovered = hoveredCard === item.title;
          const rotX = isHovered ? (mousePos.y - 100) * 0.05 : 0;
          const rotY = isHovered ? (mousePos.x - 130) * -0.05 : 0;

          return (
            <div
              key={item.title}
              onMouseEnter={() => onCardEnter(item.title)}
              onMouseMove={onCardMouseMove}
              onMouseLeave={onCardLeave}
              className="rounded-3xl border border-slate-800/70 bg-slate-900/40 p-6"
              style={{
                transform: `perspective(1200px) rotateX(${rotX}deg) rotateY(${rotY}deg)`,
                transition: "transform 0.3s ease-out",
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
}
