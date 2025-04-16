import About from "./components/About";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Layout from "./components/Layout";
import Projects from "./components/ProjectShowcase";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Experience />
      <Projects />
    </Layout>
  );
}
