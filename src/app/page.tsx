import Navbar from "@/components/navbar";
import Hero from "@/components/sections/hero";
import TrustBar from "@/components/sections/trust-bar";
import CraftStatement from "@/components/sections/craft-statement";
import Gallery from "@/components/sections/gallery";
import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Footer from "@/components/footer";
import OpeningField from "@/components/opening-field";
import ClosingField from "@/components/closing-field";

export default function Home() {
  return (
    <main className="bg-canvas text-ink">
      <Navbar />
      <div className="relative">
        <OpeningField />
        <Hero />
        <TrustBar />
      </div>
      <CraftStatement />
      <Gallery />
      <About />
      <div className="relative">
        <ClosingField />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
