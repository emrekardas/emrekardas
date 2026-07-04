import { BrandsSection } from "./components/brands-section";
import { FooterContact } from "./components/footer-contact";
import { Hero } from "./components/hero";
import { LangToggle } from "./components/lang-toggle";
import { PixelWindow } from "./components/pixel-window";
import { ProjectsList } from "./components/projects-list";

export default function PixelPage() {
  return (
    <>
      <LangToggle />
      <PixelWindow />
      <main id="pixel-main">
        <Hero />
        <ProjectsList />
        <BrandsSection />
        <FooterContact />
      </main>
    </>
  );
}
