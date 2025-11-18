//"Hello World"(print)

import About from './components/About';

import Writer from './components/Writer';
import Navbar from './components/Navbar';
import Skills_card from './components/Skills_card';
import Discord_Card from './components/Discord_Card';
const App = () => {

    return (
      <>
        {/* Monitor */}
        <Navbar />
        <div>
          <div className='flex flex-col items-center '>

            <div className='flex justify-center my-10 gap-10'>
              <About />
             <Discord_Card />
            </div>
              <Skills_card />
              {/* <Writer /> */}



          </div>
        </div>

      </>
    );
};

export default App;
