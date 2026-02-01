import { Project } from "@/app/types";

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Warrior Gym",
    category: "Fitness",
    tags: ["Next.js", "React", "TypeScript"],
    img: "/assets/warrior-gym.png",
    url: "https://www.warriorgym.com.tr/",
  },
  {
    id: 2,
    title: "Rise & Bun",
    category: "E-Commerce",
    tags: ["Next.js", "Shopify", "Tailwind"],
    img: "/assets/rise-and-bun.png",
    url: "https://www.riseandbun.co.uk/",
  },
  {
    id: 3,
    title: "Stampie",
    category: "Mobile App",
    tags: ["React Native", "Node.js", "Firebase"],
    img: "/assets/stampie.png",
    url: "https://stampieapp.com/",
  },
  {
    id: 4,
    title: "Guide & Co",
    category: "Travel",
    tags: ["Next.js", "Contentful", "GSAP"],
    img: "/assets/guide-and-co.png",
    url: "https://guideandco.co.uk/",
  },
  {
    id: 5,
    title: "Filmoneri",
    category: "Entertainment",
    tags: ["Next.js", "TMDB API", "Framer Motion"],
    img: "/assets/filmoneri.png",
    url: "https://www.filmoneri.si/tr",
  },
  {
    id: 6,
    title: "Let's Go To Bibis",
    category: "Restaurant",
    tags: ["Next.js", "Booking System", "SEO"],
    img: "/assets/bibis.png",
    url: "https://letsgotobibis.co.uk/",
  },
  {
    id: 7,
    title: "Parkist",
    category: "Mobile App",
    tags: ["SwiftUI", "Maps API", "Payment"],
    img: "/assets/parkist.png",
    url: "https://parkist.app/",
  },
];

export const GLITCH_CHARS = "!<>-_\\/[]{}—=+*^?#________";

export const VERTEX_SHADER = `
uniform float uTime;
uniform vec2 uMouse;
uniform float uHover;
varying vec2 vUv;
void main() {
    vUv = uv;
    vec3 pos = position;
    float dist = distance(uv, uMouse);
    float wave = sin(dist * 10.0 - uTime * 3.0) * uHover * 0.1;
    pos.z += wave;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
`;

export const FRAGMENT_SHADER = `
uniform sampler2D uTexture;
uniform float uTime;
uniform float uHover;
uniform float uVelo;
varying vec2 vUv;
void main() {
    vec2 uv = vUv;
    vec2 distortedUV = uv;
    distortedUV.x += sin(uv.y * 10.0 + uTime) * 0.01 * uHover;
    float r = texture2D(uTexture, distortedUV + (uVelo * 0.005)).r;
    float g = texture2D(uTexture, distortedUV).g;
    float b = texture2D(uTexture, distortedUV - (uVelo * 0.005)).b;
    gl_FragColor = vec4(r, g, b, uHover);
}
`;
