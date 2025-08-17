//"Hello World"(print)

import { FloatingDockDemo } from './navbar-test';
import { CardSpotlightDemo } from './background-test';
import Skills_card from './components/Skills_card';
import Discord_Card from './components/Discord_Card';
import MouseTrail from './components/MouseTrail';

const App = () => {
  return (    
    <> 

    {/* Monitor */}
    
    <div>
      <div className='lg:flex lg:m-5 lg:gap-30 lg:p-10 lg:justify-center hidden'>
        <div flex flex-col>
          <span className=' lg:text-4xl lg:text-fuchsia-700 '>About me</span>
          <Discord_Card/>
        </div>
        <div>
          <CardSpotlightDemo />
        </div>
      </div>
    </div>

    {/* Phone */}

    <div className='lg:hidden '>
      <Discord_Card />
      <div className='ml-15 my-10'>
        <span className=' text-6xl text-fuchsia-700' id ="Home">
          About Me
        </span>
      </div>
      <CardSpotlightDemo/>
    </div>

      <div className="fixed bottom-5 left-0 right-0 z-20 flex justify-center pointer-events-none">
        <div className="pointer-events-auto">
          <FloatingDockDemo />
        </div>
      </div>
      
      <div>
        <h1 className='ml-35 text-3xl mt-10 mb-10 text-fuchsia-700'>Skills</h1>
      </div>
      
      <Skills_card/>  
      
    </>
  );
};

export default App;
