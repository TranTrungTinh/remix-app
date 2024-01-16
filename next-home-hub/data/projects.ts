import {
  CloudIcon,
  CodeIcon,
  CpuIcon,
  LeafIcon,
  WavesIcon,
} from "lucide-react";

export const projects = [
  {
    name: "DeepDive Analytics",
    description:
      "Advanced analytics suite for marine biologists and underwater explorers.",
    link: {
      href: "http://deepdiveanalytics.ocean",
      label: "deepdiveanalytics.ocean",
    },
    icon: WavesIcon,
  },
  {
    name: "EcoSustain",
    description:
      "Tools and platforms for sustainable living and minimal ecological impact.",
    link: { href: "http://ecosustain.green", label: "ecosustain.green" },
    icon: LeafIcon,
  },
  {
    name: "SkyPulse",
    description:
      "Innovative health monitoring app for pilots and high-altitude adventurers.",
    link: { href: "http://skypulse.fly", label: "skypulse.fly" },
    icon: CloudIcon,
  },
  {
    name: "CodeCanvas",
    description:
      "An interactive platform for learning and teaching programming through visualization.",
    link: { href: "http://codecanvas.dev", label: "codecanvas.dev" },
    icon: CodeIcon,
  },
  {
    name: "QuantumLeap",
    description:
      "Next-gen quantum computing simulations made accessible for educators and researchers.",
    link: { href: "http://quantumleap.tech", label: "quantumleap.tech" },
    icon: CpuIcon,
  },
];
