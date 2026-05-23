//"Hello World"(print)

import { lazy, Suspense } from 'react';

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

  return (
    <>

      <Navbar />
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