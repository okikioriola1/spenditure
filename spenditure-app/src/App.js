
import './App.css';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import Security from './components/security/Security';
import GetFinance from './components/getFinance/GetFinance';
import WhatWeOffer from './components/whatWeOffer/WhatWeOffer';
import Features from './components/features/Features';
import Testimonials from './components/testimonials/Testimonials';
import Download from './components/download/Download';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="gradient-bg">
      <Header/>
      </div>
      <Security/>
      <GetFinance/>
      <WhatWeOffer/>   
      <Features/>  
      <Testimonials/>
      <Download/>    
      <Footer/>


    </div>
  );
}

export default App;
