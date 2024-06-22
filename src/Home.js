import React from "react";

// import aos
// import aos css

// import components
import Header from "./components/Header";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import About from "./components/About";
import Cars from "./components/Cars";
import Whyus from "./components/Whyus";
import Fauter1 from "./components/fauter1";
import Fauter2 from "./components/fauter2";
import Fauter3 from "./components/fauter3";
import Fauter4 from "./components/fauter4";
import Brands from "./components/Brands";
import Welcome from "./components/Welcome";
import Condition from "./components/Condition";
import Copyright from "./components/Copyright";
import wtsp from "./assets/img/logo.png";

const Home = () => { 
  // initialize aos
  return (
    <div className="max-w-[1920px] bg-white mx-auto relative overflow-hidden">
      <Header /> 
      <Hero />
      <Welcome />
      <Cars /> 
      <About />
      <Fauter3 />
      <Fauter2 />
      <Fauter1 />
      <Testimonials />
      <Whyus />
      <Cta />
      <Fauter4 />
      <Brands />
      {/* <Condition/> */}
      <Footer />
      <Copyright />
      
      <div className="fixed bottom-2 right-4  z-10">
        <a href="https://wa.me/+34123456789" target="_blank" rel="noopener noreferrer">
          <img src={wtsp} width={50} height={50} alt="WhatsApp" />
        </a>
      </div>
    </div>
  );
};

export default Home;
