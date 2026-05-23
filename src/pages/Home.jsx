import Projects from '../components/home/Projects';
import Contact from '../components/home/Contact';
import Skills from '../components/home/Skills';
import Hero from '../components/home/Hero';
import Experience from '../components/home/Experience';
const Home = () => {
  return (
    <>
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </>
  )
}

export default Home