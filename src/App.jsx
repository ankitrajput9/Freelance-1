import React from 'react';
import Approuters from './routers/Approuters';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='min-h-screen '>
      <Navbar/>
      <Approuters/>
      <Footer/>
    </div>
  );
}

export default App;
