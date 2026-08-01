import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { SiteHeader } from "@/components/SiteHeader";
import { StackSection } from "@/components/StackSection";
import { TornadoBackdrop } from "@/components/TornadoBackdrop";

export default function Home() {
  return (
    <>
      <TornadoBackdrop />
      <SiteHeader />
      <main className="relative z-10 flex-1">
        <Hero />
        <Projects />
        <StackSection />
        <About />
        <Contact />
      </main>
    </>
  );
}
