
import { GlobalStyle } from "@/components/business/GlobalStyle";
import { Hero } from "@/components/business/Hero";
import { Services } from "@/components/business/Services";
import { Process } from "@/components/business/Process";
import { Work } from "@/components/business/Work";
import { Why } from "@/components/business/Why";
import { Cta } from "@/components/business/Cta";
import { Footer } from "@/components/business/Footer";

function HomePage() {
  return (
    <div id="top" style={{ position: 'relative', zIndex: 1 }}>
      <GlobalStyle />
      <main>
        <Hero />
        <Services />
        <Process />
        <Work />
        <Why />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;