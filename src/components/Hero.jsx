import React from "react";
import logo from '../assets/crgvlogo.png'
const Hero = () => {
  return (
    <div className="max-w-[800px] w-full mx-auto text-center flex flex-col">
      <img src={logo} alt='chorus logo'/>
    </div>
  );
};

export default Hero;
