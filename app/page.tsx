import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import Modules from "@/components/Modules";
import WhyHalOS from "@/components/WhyHalOS";
import Compare from "@/components/Compare";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Features />
        <Modules />
        <WhyHalOS />
        <Compare />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
