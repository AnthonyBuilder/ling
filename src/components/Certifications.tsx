import certAbinfer from "../assets/certificado-abinfer.png";
import certCodipro from "../assets/certificado-codipro.png";
import certGreenPin from "../assets/certificado-green-pin.png";

interface Certification {
  name: string;
  image: string;
  desc: string;
}

export function Certifications() {
  const certifications: Certification[] = [
    { name: "ABINFER", image: certAbinfer, desc: "Associação Brasileira da Infraestrutura e Indústrias de Base" },
    { name: "Green Pin", image: certGreenPin, desc: "Parceiro oficial Green Pin para produtos premium" },
    { name: "CODIPRO", image: certCodipro, desc: "Certificação internacional de produtos de elevação" },
  ];

  return (
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
          {certifications.map((cert) => (
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
  );
}
