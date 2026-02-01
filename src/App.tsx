import { useEffect, useState } from "react";
import slingImage from "./assets/slingpng.webp";
import manilhaG4151 from "./assets/manilha_carga_g4151.png";
import manilhaG4153 from "./assets/manilha_carga_g4153.png";
import manilhaG4161 from "./assets/manilha_carga_g4161.webp";
import manilhaG4163 from "./assets/manilha_carga_g4163.webp";
import manilhaG4263 from "./assets/manilha_carga_g4263.webp";
import manilhaG5243 from "./assets/manilha_carga_g5243.webp";
import manilhaG5263 from "./assets/manilha_carga_g5263.webp";
import manilhaP6033 from "./assets/manilha_carga_p6033.webp";
import certAbinfer from "./assets/certificado-abinfer.png";
import certCodipro from "./assets/certificado-codipro.png";
import certGreenPin from "./assets/certificado-green-pin.png";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ManilhasSection from "@/components/ManilhasSection";
import ProdutosSection from "@/components/ProdutosSection";
import Manilhas3DSection from "@/components/Manilhas3DSection";
import QualidadeSection from "@/components/QualidadeSection";
import CertificacoesSection from "@/components/CertificacoesSection";
import Footer from "@/components/Footer";
import type { Certificacao, Manilha } from "@/types";
import type { MousePosition } from "@/lib/getCardTransform";

function App() {
  const manilhas: Manilha[] = [
    {
      name: "Bow Shackle SC G-4161",
      tag: "Pino roscado",
      image: manilhaG4161,
    },
    {
      name: "Bow Shackle BN G-4163",
      tag: "Pino de segurança",
      image: manilhaG4163,
    },
    {
      name: "Dee Shackle SC G-4151",
      tag: "Corpo compacto",
      image: manilhaG4151,
    },
    {
      name: "Dee Shackle BN G-4153",
      tag: "Alta resistência",
      image: manilhaG4153,
    },
    {
      name: "BigMouth Bow BN G-4263",
      tag: "Boca ampliada",
      image: manilhaG4263,
    },
    {
      name: "Super Bow FN G-5243",
      tag: "Fixação com porca",
      image: manilhaG5243,
    },
    {
      name: "Super Bow BN G-5263",
      tag: "Grau 8",
      image: manilhaG5263,
    },
    {
      name: "Sling Shackle BN P-6033",
      tag: "Uso com lingas",
      image: manilhaP6033,
    },
  ];
  const tracepartsEmbedUrl = "https://www.traceparts.com/";
  const certificacoes: Certificacao[] = [
    {
      name: "ABINFER",
      image: certAbinfer,
      desc: "Associação Brasileira da Infraestrutura e Indústrias de Base",
    },
    {
      name: "Green Pin",
      image: certGreenPin,
      desc: "Parceiro oficial Green Pin para produtos premium",
    },
    {
      name: "CODIPRO",
      image: certCodipro,
      desc: "Certificação internacional de produtos de elevação",
    },
  ];
  const [activeManilha, setActiveManilha] = useState(0);
  const [globalMousePos, setGlobalMousePos] = useState<MousePosition>({
    x: 0,
    y: 0,
  });
  const totalManilhas = manilhas.length;
  const handlePrev = () =>
    setActiveManilha((prev) => (prev - 1 + totalManilhas) % totalManilhas);
  const handleNext = () =>
    setActiveManilha((prev) => (prev + 1) % totalManilhas);

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      setGlobalMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleGlobalMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleGlobalMouseMove);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100">
      <Header />
      <main>
        <HeroSection slingImage={slingImage} globalMousePos={globalMousePos} />
        <ManilhasSection
          manilhas={manilhas}
          activeManilha={activeManilha}
          onPrev={handlePrev}
          onNext={handleNext}
          onSelect={setActiveManilha}
          globalMousePos={globalMousePos}
        />
        <ProdutosSection />
        <Manilhas3DSection
          manilhas={manilhas}
          tracepartsEmbedUrl={tracepartsEmbedUrl}
        />
        <QualidadeSection />
        <CertificacoesSection certificacoes={certificacoes} />
      </main>
      <Footer />
    </div>
  )
}

export default App
