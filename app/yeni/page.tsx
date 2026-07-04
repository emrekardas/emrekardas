import { SocialFooter } from "./components/social-footer";
import { Hero } from "./components/hero";
import { LogoWall } from "./components/logo-wall";
import { MetricStrip } from "./components/metric-strip";
import { ProjectsGrid } from "./components/projects-grid";
import { Testimonials } from "./components/testimonials";
import { CollaborationCta } from "./components/collaboration-cta";
import { Signature } from "./components/signature";

export default function YeniPage() {
  return (
    <main id="ana-icerik">
      <SocialFooter />
      <Hero />
      <LogoWall />
      <MetricStrip />
      <ProjectsGrid />
      <Testimonials />
      <CollaborationCta />
      <Signature />
    </main>
  );
}
