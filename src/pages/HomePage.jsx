import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import Movies from "../components/Movies/Movies";
import HeroSection from "../components/HeroSection/HeroSection";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Movies />
      <Footer />
      
    </div>
  );
};

export default HomePage;
