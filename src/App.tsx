import Navbar from './components/Navbar/Navbar';
import Bubbles from './components/Bubbles/Bubbles';
import BallFollower from './components/BallFollower/BallFollower';

import { Routes, Route } from 'react-router-dom';
import routes from './routes/routes';

import './App.css'

function App() {

  return (
    <>
      <div>
        <Navbar />
        <Bubbles />
        <BallFollower />
      </div>

        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={route.element}
            />
          ))}
        </Routes>
    </>
  )
}

export default App
