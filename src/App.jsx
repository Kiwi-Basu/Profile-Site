//"Hello World"(print)

import { Route, Routes, } from 'react-router';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Cursor from './components/ui/Cursor'
import AllProject from './components/projects/AllProject';
import projects from './data/Projects.json'



const App = () => {

    return (
      <>
        <Navbar />
        <Cursor />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects' element = {<AllProject/>} />
          </Routes>     
      </>
    );
};

export default App;
