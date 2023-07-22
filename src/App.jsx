import React from 'react';
import styles from './style';
import { Navbar, Body, Footer, About, Features, Intro_vid, Goal, ParticleBackground } from './components';

const App = () => {

  return (
    <div>
      {/* Other components that will overlay the particles background */}
      <div className='flex flex-col items-center'>
        <About />
        <Body />
        <Features/>
        <Intro_vid />
        <Goal />
        <Footer />
      </div>
    </div>
  );
};

export default App;
