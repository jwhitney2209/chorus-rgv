import React from "react";
import swirl from "../assets/crgvswirltr.png"
import spotlighton from "../assets/spotlighton.png"
import comfort from "../assets/comfort.png"
import masterworks from "../assets/masterworks.png"
import celebrate from "../assets/celebrate.png"


const Concerts = () => {
  return (
    <div>
      <div className="max-w-[1240px] bg-zinc-800 text-white mx-auto flex flex-col" style={{backgroundImage: `url(${swirl})`}}>
        <div className="my-10 text-center">
          <h1 className="text-5xl font-link mb-8">Concert Events</h1>
          <div className="flex flex-col items-center mb-4">
          <img src={spotlighton} alt="spotlight on" />
          <p className="font-['gothic']">Annual Fall Concert Event</p>
          <p className="text-xl font-medium font-['gothic']">7:30 PM Thursday, October 5<sup>th</sup> 2023</p>
          </div>
          <div className="flex flex-col items-center mb-4">
          <img src={comfort} alt="spotlight on" />
          <p className="font-['gothic']">Annual Holiday Event</p>
          <p className="text-xl font-medium font-['gothic']">7:30 PM Thursday, December 7<sup>th</sup> 2023</p>
          </div>
          <div className="flex flex-col items-center mb-4">
          <img src={masterworks} alt="spotlight on" />
          <p className="font-['gothic']">Annual Spring Major Work</p>
          <p className="text-xl font-medium font-['gothic']">TBA</p>
          </div>
          <div className="flex flex-col items-center">
          <img src={celebrate} alt="spotlight on" />
          <p className="font-['gothic']">Annual Patriotic Salute</p>
          <p className="text-xl font-medium font-['gothic']">Tuesday, July 4<sup>th</sup> 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Concerts;
