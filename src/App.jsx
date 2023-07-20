import React from 'react';
import styles from './style';
import { Navbar, Body, Footer, About, ParticleBackground } from './components';

const App = () => {

  return (
    <div>
      {/* Other components that will overlay the particles background */}
      <div className='flex flex-col items-center'>
        <About />
        <Body />
        <Footer />
      </div>
    </div>
  );
};

export default App;
