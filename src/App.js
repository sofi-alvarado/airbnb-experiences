import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Card from './components/Card';
import cardImage from '././images/katie-zaferes.png';

function App() {
  return (
   <div>
      <NavBar />
      <Hero />
      <Card 
        img={cardImage}
        rating="5.0"
        reviewCount={6.0}
        country="USA"
        title="Life lessons with Katie Zaferes"
        price={136}
      />
   </div>
  );
}

export default App;
