import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Philosophy } from "@/components/Philosophy";
import { Stats } from "@/components/Stats";
import { Process } from "@/components/Process";
import { Packages } from "@/components/Packages";
import { Work } from "@/components/Work";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-ivory text-navy antialiased">
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <Stats />
        <Process />
        <Packages />
        <Work />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
