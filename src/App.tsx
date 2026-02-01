import { useState, useEffect, useRef } from "react";
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

function App() {
  const manilhas = [
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
  const [activeManilha, setActiveManilha] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [globalMousePos, setGlobalMousePos] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const slingImageRef = useRef<HTMLImageElement>(null);
  const slingCardRef = useRef<HTMLDivElement>(null);
  const sliderCardRef = useRef<HTMLDivElement>(null);
  const totalManilhas = manilhas.length;
  const handlePrev = () =>
    setActiveManilha((prev) => (prev - 1 + totalManilhas) % totalManilhas);
  const handleNext = () =>
    setActiveManilha((prev) => (prev + 1) % totalManilhas);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleGlobalMouseMove = (e: MouseEvent) => {
      setGlobalMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleGlobalMouseMove, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
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
      <header className="sticky top-0 z-50 border-b border-slate-800/60 bg-slate-950/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-amber-200/80">
                Lingatec
              </p>
              <p className="text-lg font-semibold">Soluções em Elevação</p>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a className="transition hover:text-white" href="#empresa">
              Empresa
            </a>
            <a className="transition hover:text-white" href="#produtos">
              Produtos
            </a>
            <a className="transition hover:text-white" href="#manilhas-3d">
              Manilhas 3D
            </a>
            <a className="transition hover:text-white" href="#qualidade">
              Qualidade
            </a>
            <a className="transition hover:text-white" href="#contato">
              Contato
            </a>
          </nav>
          <button className="rounded-full border border-amber-400/60 px-4 py-2 text-sm font-medium text-amber-100 transition hover:border-amber-300 hover:text-white">
            Solicitar orçamento
          </button>
        </div>
      </header>

      <main>
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

            <div 
              ref={slingCardRef}
              className="relative"
            >
              <div className="absolute -inset-6 rounded-[32px] bg-gradient-to-br from-amber-500/30 via-transparent to-transparent blur-2xl" />
              <div 
                className="relative overflow-hidden rounded-[32px] border border-amber-500/40 bg-slate-900/70 p-6"
                style={{ 
                  perspective: "1200px",
                  transform: `perspective(1200px) rotateX(${getCardTransform(slingCardRef, 0.5).rotX}deg) rotateY(${getCardTransform(slingCardRef, 0.5).rotY}deg)`,
                  filter: `drop-shadow(${getCardTransform(slingCardRef, 0.5).shadowX}px ${getCardTransform(slingCardRef, 0.5).shadowY}px 30px rgba(251, 191, 36, 0.15))`,
                  transition: "transform 0.3s ease-out, filter 0.3s ease-out",
                  backfaceVisibility: "hidden",
                }}
              >
                <img
                  ref={slingImageRef}
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

        <section className="border-t border-slate-800/70 bg-slate-950/70" id="manilhas">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.3em] text-amber-200/80">
                  Linha de manilhas
                </p>
                <h2 className="text-3xl font-semibold text-white">
                  Manilhas em destaque
                </h2>
                <p className="max-w-2xl text-slate-300">
                  Selecione cada modelo para visualizar aplicações e
                  especificações com foco em segurança e conformidade.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrev}
                  className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200 transition hover:border-slate-500 hover:text-white"
                >
                  Anterior
                </button>
                <button
                  onClick={handleNext}
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
                transform: `perspective(1200px) rotateX(${getCardTransform(sliderCardRef, 0.3).rotX}deg) rotateY(${getCardTransform(sliderCardRef, 0.3).rotY}deg)`,
                boxShadow: `${getCardTransform(sliderCardRef, 0.3).shadowX}px ${getCardTransform(sliderCardRef, 0.3).shadowY}px 50px 5px rgba(0, 0, 0, 0.5)`,
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
                {manilhas.map((item, idx) => {
                  const manilhaCardRef = useRef<HTMLDivElement>(null);
                  const transform = getCardTransform(manilhaCardRef);
                  
                  return (
                  <div key={item.name} className="w-full shrink-0 p-8">
                    <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
                      <div className="space-y-4">
                        <p className="text-xs uppercase tracking-[0.3em] text-amber-200/80">
                          {item.tag}
                        </p>
                        <h3 className="text-2xl font-semibold text-white">
                          {item.name}
                        </h3>
                        <p className="text-slate-300">
                          Componentes certificados para aplicações industriais
                          críticas, com documentação técnica completa.
                        </p>
                        <div className="flex items-center gap-3 text-sm text-slate-300">
                          <span className="h-2 w-2 rounded-full bg-amber-400" />
                          Pronto para entrega e inspeção.
                        </div>
                      </div>
                      <div 
                        ref={manilhaCardRef}
                        className="flex items-center justify-center"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-64 w-auto object-contain"
                        />
                      </div>
                    </div>
                  </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:justify-start">
              {manilhas.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => setActiveManilha(index)}
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
                }}
              >
                <p className="text-lg font-semibold text-white">{item.title}</p>
                <p className="mt-2 text-sm text-slate-300">{item.description}</p>
              </div>
            );
            })}
          </div>
        </section>

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
                {manilhas.slice(0, 4).map((item) => (
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

        <section className="border-t border-slate-800/70" id="qualidade">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1fr_1fr]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-white">
                Qualidade comprovada
              </h2>
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
                    onMouseEnter={() => setHoveredCard(item)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className="rounded-2xl border border-slate-800/70 bg-slate-900/40 p-4 text-sm text-slate-300 transition-all duration-300"
                    style={{
                      transform: hoveredCard === item ? "translateY(-6px) rotateX(3deg) rotateY(-1deg)" : "translateY(0)",
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

        <section className="border-t border-slate-800/70 bg-slate-950/60" id="certificacoes">
          <div className="mx-auto max-w-6xl px-6 py-14">
            <div className="mb-10 space-y-3 text-center">
              <h2 className="text-3xl font-semibold text-white">
                Certificações e Parcerias
              </h2>
              <p className="text-slate-300">
                Credenciados e homologados pelas principais entidades do setor
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                { name: "ABINFER", image: certAbinfer, desc: "Associação Brasileira da Infraestrutura e Indústrias de Base" },
                { name: "Green Pin", image: certGreenPin, desc: "Parceiro oficial Green Pin para produtos premium" },
                { name: "CODIPRO", image: certCodipro, desc: "Certificação internacional de produtos de elevação" },
              ].map((cert) => (
                <div
                  key={cert.name}
                  className="group relative overflow-hidden rounded-2xl border border-slate-800/70 bg-slate-900/40 p-6 transition-all duration-300 hover:border-amber-500/40"
                >
                  <div className="flex h-48 items-center justify-center">
                    <img
                      src={cert.image}
                      alt={cert.name}
                      className="max-h-full max-w-full object-contain opacity-90 transition-opacity duration-300 group-hover:opacity-100"
                    />
                  </div>
                  <div className="mt-4 space-y-2 text-center">
                    <h3 className="text-lg font-semibold text-white">{cert.name}</h3>
                    <p className="text-sm text-slate-400">{cert.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800/70" id="contato">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>Lingatec - Equipamentos de elevação e amarração industrial</p>
          <p>contato@lingatec.com.br · +55 (11) 0000-0000</p>
        </div>
      </footer>
    </div>
  )
}

export default App
