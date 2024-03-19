import React from "react";
import Hero from "../components/Hero";

const imgUrl= "https://chorus-rgv.s3.us-east-2.amazonaws.com/flyers/crgv_spring.png"

const Home = () => {
  return (
    <>
      <Hero />
      <div className="max-w-[1240px] bg-zinc-800 text-white mx-auto flex flex-col justify-center p-4">
        <div className="flex flex-col items-center">
          <p className="text-4xl font-link text-center mb-4">
            Upcoming Events!
          </p>
          <a
            href={imgUrl}
            target="_blank"
            rel="noreferrer"
          >
            <img src={imgUrl} alt="flier"/>
          </a>
          <p className="text-center text-zinc-400 font-['gothic']">(click to enlarge)</p>
        </div>
      </div>
    </>
  );
};

export default Home;
