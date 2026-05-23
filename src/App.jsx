//"Hello World"(print)

import About from './components/About';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Navbar from './components/Navbar';
import Skills_card from './components/Skills_card';
import Discord_Card from './components/Discord_Card';
import Projects from './components/Projects';
import Contact from './components/Contact'
import Skills from './components/Skills'

const App = () => {

    return (
      <>
        {/* Monitor */}
        <Navbar />
        <Hero />
        <Experience />  
        <Projects />
        <Skills/>
        <Contact />
     
        {/* <div>
          <div className='flex flex-col items-center '>

            <div className='flex justify-center my-10 gap-10'>
              <About />
             <Discord_Card />
            </div>
              <Skills_card />
          </div>
        </div> */}

      </>
    );
};

export default App;
