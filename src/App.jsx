import React from 'react';
import Approuters from './routers/Approuters';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsappButton from './components/WhatsappButton';

const App = () => {
  return (
    <div className='min-h-screen '>
      <Navbar/>
      <Approuters/>
      <WhatsappButton/>
      <Footer/>
    </div>
  );
}

export default App;
