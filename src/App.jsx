//"Hello World"(print)

import { lazy, Suspense , useEffect, useState} from 'react';
import {
  Route,
  Routes
} from 'react-router-dom';

import Navbar from './components/Navbar';
import Cursor from './components/ui/Cursor';

// Lazy Pages
const Home = lazy(() => import('./pages/Home'));
const AllProject = lazy(() => import('./components/projects/AllProject'));

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect (() =>{
    if(darkMode) {
      document.documentElement.classList.add("dark");
    }else {
      document.documentElement.classList.remove("dark")
    }
  },[darkMode])

  return (
    <>

      <Navbar darkMode={darkMode}
  setDarkMode={setDarkMode}/>
      <Cursor />

      <Suspense
        fallback={
          <div className='min-h-screen flex items-center justify-center press-start-font'>
            Loading...
          </div>
        }
      >

        <Routes>

          <Route
            path='/'
            element={<Home />}
          />

          <Route
            path='/projects'
            element={<AllProject />}
          />

        </Routes>

      </Suspense>

    </>
  );
};

export default App;