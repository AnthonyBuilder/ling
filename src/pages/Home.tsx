import { useState, useEffect } from "react";
import {
  Header,
  Hero,
  ManilhaCarousel,
  Products,
  Manilhas3D,
  Quality,
  Certifications,
  Footer,
} from "../components";

export function Home() {
  const [activeManilha, setActiveManilha] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [globalMousePos, setGlobalMousePos] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const handlePrev = () =>
    setActiveManilha((prev) => (prev - 1 + 8) % 8);
  const handleNext = () =>
    setActiveManilha((prev) => (prev + 1) % 8);

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      setGlobalMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleGlobalMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleGlobalMouseMove);
    };
  }, []);

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
  };

  const handleCardMouseLeave = () => {
    setHoveredCard(null);
    setMousePos({ x: 0, y: 0 });
  };

  const getCardTransform = (cardRef: React.RefObject<HTMLElement>, intensity: number = 1) => {
    if (!cardRef.current) return { rotX: 0, rotY: 0, shadowX: 0, shadowY: 0 };
    
    const rect = cardRef.current.getBoundingClientRect();
    const cardCenterX = rect.left + rect.width / 2;
    const cardCenterY = rect.top + rect.height / 2;
    
    const deltaX = globalMousePos.x - cardCenterX;
    const deltaY = globalMousePos.y - cardCenterY;
    
    const rotX = (deltaY / window.innerHeight) * 8 * intensity;
    const rotY = (deltaX / window.innerWidth) * 8 * intensity;
    const shadowX = (deltaX / window.innerWidth) * 12 * intensity;
    const shadowY = (deltaY / window.innerHeight) * 12 * intensity;
    
    return { rotX, rotY, shadowX, shadowY };
  };

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100">
      <Header />
      
      <main>
        <Hero getCardTransform={getCardTransform} />
        <ManilhaCarousel
          activeManilha={activeManilha}
          onPrev={handlePrev}
          onNext={handleNext}
          onSelect={setActiveManilha}
          getCardTransform={getCardTransform}
        />
        <Products
          hoveredCard={hoveredCard}
          mousePos={mousePos}
          onCardEnter={setHoveredCard}
          onCardLeave={handleCardMouseLeave}
          onCardMouseMove={handleCardMouseMove}
        />
        <Manilhas3D />
        <Quality
          hoveredCard={hoveredCard}
          onCardEnter={setHoveredCard}
          onCardLeave={() => setHoveredCard(null)}
        />
        <Certifications />
      </main>

      <Footer />
    </div>
  );
}
