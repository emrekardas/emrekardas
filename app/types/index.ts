export interface Project {
  id: number;
  title: string;
  category: string;
  tags: string[];
  img: string;
  url: string;
}

export interface GlitchTextProps {
  text: string;
  className?: string;
  as?: "div" | "span" | "h1" | "h2" | "h3" | "h4" | "p";
}

export interface Beam {
  x: number;
  y: number;
  width: number;
  length: number;
  angle: number;
  speed: number;
  opacity: number;
  hue: number;
  pulse: number;
  pulseSpeed: number;
}
