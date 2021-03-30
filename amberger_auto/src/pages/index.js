import React, { useState } from "react";
import HeroSection from "../components/HeroSection/index";
import { homeObj1, homeObj2, homeObj3, homeObj4 } from "../components/InfoSection/Data";
import InfoSection from "../components/InfoSection/index";
import Navbar from "../components/Navbar/Navbar";
import SideBar from "../components/SideBar/SideBar";
import Footer from "../components/Footer/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObj1} />
      <InfoSection {...homeObj2} />
      <InfoSection {...homeObj3} />
      <InfoSection {...homeObj4} />
      <Footer />
    </>
  );
};

export default Home;
