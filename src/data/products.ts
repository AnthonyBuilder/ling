import manilhaG4151 from "../assets/manilha_carga_g4151.png";
import manilhaG4153 from "../assets/manilha_carga_g4153.png";
import manilhaG4161 from "../assets/manilha_carga_g4161.webp";
import manilhaG4163 from "../assets/manilha_carga_g4163.webp";
import manilhaG4263 from "../assets/manilha_carga_g4263.webp";
import manilhaG5243 from "../assets/manilha_carga_g5243.webp";
import manilhaG5263 from "../assets/manilha_carga_g5263.webp";
import manilhaP6033 from "../assets/manilha_carga_p6033.webp";

export interface ProductData {
  id: number;
  name: string;
  model: string;
  tag: string;
  image: string;
  description: string;
  type: string;
  material: string;
  safetyFactor: string;
  standard: string;
  finish: string;
  temperatureRange: string;
  certification: string;
  specs: string[];
}

export const productsData: ProductData[] = [
  {
    id: 1,
    name: "Green Pin® Bow Shackle SC G-4161",
    model: "G-4161",
    tag: "Standard bow shackle with screw collar pin",
    image: manilhaG4161,
    description: "Manilha tipo Bow com pino roscado, indicada para aplicações que exigem ajustes frequentes.",
    type: "Bow Shackle with Screw Collar Pin",
    material: "Bow and pin high tensile steel, grade 6, quenched and tempered",
    safetyFactor: "MBL equals 6 x WLL",
    standard: "EN 13889 and meets performance requirements of US Fed. Spec. RR-C-271 Type IVA Class 2, grade A, from 2 t and upward these shackles comply with ASME B30.26",
    finish: "Hot dipped galvanized",
    temperatureRange: "-40°C up to +200°C",
    certification: "2.1 2.2 3.1 MTC a DNV GL 0378 CE ABS PDA ABS MA",
    specs: ["Type: Standard Bow Shackle", "Pin: Screw collar pin", "Resistance: Up to 10 tons", "Grade: 6", "Finish: Hot dipped galvanized"],
  },
  {
    id: 2,
    name: "Green Pin® Bow Shackle BN G-4163",
    model: "G-4163",
    tag: "Standard bow shackle with safety bolt",
    image: manilhaG4163,
    description: "Manilha Bow com pino de segurança para operações críticas onde segurança é prioridade.",
    type: "Bow Shackle with Safety Bolt",
    material: "Bow and pin high tensile steel, grade 6, quenched and tempered",
    safetyFactor: "MBL equals 6 x WLL",
    standard: "EN 13889 and meets performance requirements of US Fed. Spec. RR-C-271 Type IVA Class 3, grade A, from 2 t and upward these shackles comply with ASME B30.26",
    finish: "Hot dipped galvanized",
    temperatureRange: "-40°C up to +200°C",
    certification: "2.1 2.2 3.1 MTC a DNV GL 2.7-1 a * DNV GL 2.7-1 b * DNV GL 0378 CE ABS PDA ABS MA",
    specs: ["Type: Standard Bow Shackle", "Pin: Safety bolt", "Resistance: Up to 12 tons", "Grade: 6", "Finish: Hot dipped galvanized"],
  },
  {
    id: 3,
    name: "Green Pin® Dee Shackle SC G-4151",
    model: "G-4151",
    tag: "Standard dee shackle with screw collar pin",
    image: manilhaG4151,
    description: "Manilha tipo Dee com corpo compacto, ideal para espaços limitados.",
    type: "Dee Shackle with Screw Collar Pin",
    material: "Bow and pin high tensile steel, grade 6, quenched and tempered",
    safetyFactor: "MBL equals 6 x WLL",
    standard: "EN13889 and meets performance requirements of US Fed. Spec. RR-C-271 Type IVB Class 3, grade A, from 2 t upward these shackles comply with ASME B30.26",
    finish: "Hot dipped galvanized",
    temperatureRange: "-40°C up to +200°C",
    certification: "2.1 2.2 3.1 MTC a DNV GL 0378 CE ABS PDA ABS MA",
    specs: ["Type: Standard Dee Shackle", "Pin: Screw collar pin", "Resistance: Up to 8 tons", "Grade: 6", "Finish: Hot dipped galvanized"],
  },
  {
    id: 4,
    name: "Green Pin® Dee Shackle BN G-4153",
    model: "G-4153",
    tag: "Standard dee shackle with safety bolt",
    image: manilhaG4153,
    description: "Manilha Dee em aço liga com resistência excepcional para cargas extremas.",
    type: "Dee Shackle with Safety Bolt",
    material: "Bow and pin high tensile steel, grade 6, quenched and tempered",
    safetyFactor: "MBL equals 6 x WLL",
    standard: "EN 13889, ASME B30.26 and meets performance requirements of US Fed. Spec.",
    finish: "Hot dipped galvanized",
    temperatureRange: "-40°C up to +200°C",
    certification: "2.1 2.2 3.1 MTC a DNV GL 2.7-1 a * DNV GL 2.7-1 b * DNV GL 0378 CE ABS PDA ABS MA",
    specs: ["Type: Standard Dee Shackle", "Pin: Safety bolt", "Resistance: Up to 15 tons", "Grade: 6", "Finish: Hot dipped galvanized"],
  },
  {
    id: 5,
    name: "Green Pin® BigMouth® Bow Shackle BN G-4263",
    model: "G-4263",
    tag: "Grade 8 bow shackle with safety bolt and wider shackle mouth",
    image: manilhaG4263,
    description: "Manilha com boca ampliada para acomodar múltiplos cabos simultaneamente.",
    type: "BigMouth Bow Shackle with Safety Bolt",
    material: "Bow and pin alloy steel, grade 8, quenched and tempered",
    safetyFactor: "MBL equals 6 x WLL",
    standard: "ASME B30.26",
    finish: "Hot dipped galvanized",
    temperatureRange: "-20°C up to +200°C",
    certification: "2.1 2.2 3.1 MTC a CE",
    specs: ["Type: BigMouth Bow Shackle", "Pin: Safety bolt", "Resistance: Up to 14 tons", "Grade: 8", "Finish: Hot dipped galvanized"],
  },
  {
    id: 6,
    name: "Green Pin Super® Bow Shackle FN G-5243",
    model: "G-5243",
    tag: "Grade 8 bow shackle with safety bolt and fixed nut",
    image: manilhaG5243,
    description: "Manilha reforçada com fixação por porca, oferece máxima segurança.",
    type: "Super Bow Shackle with Fixed Nut",
    material: "Bow and pin alloy steel, grade 8, quenched and tempered",
    safetyFactor: "MBL equals 5 x WLL",
    standard: "ASME B30.26 and meets performance requirements of US Fed. Spec. RR-C-271 Type IVA Class 3, grade B",
    finish: "Hot dipped galvanized (175 ton shackle is painted)",
    temperatureRange: "-20°C up to +200°C",
    certification: "2.1 2.2 3.1 MTC a MTC b * LROS * CE",
    specs: ["Type: Super Bow Shackle", "Pin: Safety bolt with fixed nut", "Resistance: Up to 16 tons", "Grade: 8", "Finish: Hot dipped galvanized"],
  },
  {
    id: 7,
    name: "Green Pin Super® Bow Shackle BN G-5263",
    model: "G-5263",
    tag: "Grade 8 bow shackle with safety bolt",
    image: manilhaG5263,
    description: "Manilha de grau 8, indicada para aplicações offshore e ambientes severos.",
    type: "Super Bow Shackle with Safety Bolt",
    material: "Bow and pin alloy steel, grade 8, quenched and tempered",
    safetyFactor: "MBL equals 5 x WLL",
    standard: "ASME B30.26 and meets performance requirements of US Fed. Spec. RR-C-271 Type IVA Class 3, grade B",
    finish: "Hot dipped galvanized (175 ton shackle is painted)",
    temperatureRange: "-20°C up to +200°C",
    certification: "2.1 2.2 3.1 MTC a MTC b * LROS * CE ABS PDA ABS MA",
    specs: ["Type: Super Bow Shackle", "Pin: Safety bolt", "Resistance: Up to 18 tons", "Grade: 8", "Finish: Hot dipped galvanized"],
  },
  {
    id: 8,
    name: "Green Pin® Sling Shackle BN P-6033",
    model: "P-6033",
    tag: "High load capacity bow shackle with safety bolt",
    image: manilhaP6033,
    description: "Manilha especial para trabalho com lingas de corrente, com acabamento premium.",
    type: "Sling Shackle with Safety Bolt",
    material: "Bow and pin alloy steel, grade 8, quenched and tempered",
    safetyFactor: "MBL equals 5 x WLL",
    standard: "ASME B30.26",
    finish: "Shackle bow painted silver, pin painted green (7 up to 55 ton shackles are hot dipped galvanized)",
    temperatureRange: "-20°C up to +200°C",
    certification: "2.1 2.2 3.1 MTC b * LROS * MPI b * US b * CE",
    specs: ["Type: Sling Shackle", "Pin: Safety bolt", "Resistance: Up to 10 tons", "Grade: 8", "Finish: Painted/Hot dipped galvanized"],
  },
];
