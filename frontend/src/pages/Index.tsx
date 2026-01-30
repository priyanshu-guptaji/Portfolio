import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import Timeline from "@/components/Timeline";
import SkillProof from "@/components/SkillProof";
// import Photos from "@/components/Photos";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Priyanshu Gupta - Creative Developer & Designer | Portfolio</title>
        <meta
          name="description"
          content="Passionate Creative Designer and Developer dedicated to crafting innovative solutions and exceptional digital experiences through modern technologies."
        />
        <meta
          name="keywords"
          content="web developer, designer, React, TypeScript, portfolio, creative developer"
        />
        <meta
          property="og:title"
          content="Priyanshu Gupta - Creative Developer & Designer"
        />
        <meta
          property="og:description"
          content="Passionate Creative Designer and Developer dedicated to crafting innovative solutions."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <Toaster position="bottom-right" />

      <div className="relative">
        <Navigation />
        <main>
          <Hero />
          <Timeline />
          <About />
          <SkillProof />
          {/* <Photos /> */}
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
