//"Hello World"(print)

import { FloatingDockDemo } from './navbar-test';
import { CardSpotlightDemo } from './background-test';
import Skills_card from './components/Skills_card';

import MouseTrail from './components/MouseTrail';

const App = () => {
  return (    
    <>
    
      <MouseTrail/>
      <div className='mt-20' id="Home">
        <span className='ml-35 text-3xl text-fuchsia-700'>About Me</span>
      </div>
    
      <CardSpotlightDemo/>
      
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
