import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Options from "./components/Options";
import BrandRibbon from "./components/BrandRibbon";
import Banner from "./components/Banner";
import Features from "./components/Features";
import UseCases from "./components/UseCases";
import EcommerceSection from "./components/EcommerceSection";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Options />
      <BrandRibbon />
      <Banner/>
      <Features/>
      <UseCases/>
      <EcommerceSection/>
      <Footer/>
    </div>
  );
};

export default App;