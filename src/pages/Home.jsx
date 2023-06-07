import React from "react";
import Hero from "../components/Hero";
import salute from "../assets/salute.png"

const imgUrl = "https://firebasestorage.googleapis.com/v0/b/chorusrgv-d8382.appspot.com/o/salute.png?alt=media&token=c55f45db-5eeb-4900-bf80-f69ecc5a27f7&_gl=1*d7rvyz*_ga*MjEzNzcyODUuMTY4NjE0MTQzMQ..*_ga_CW55HF8NVT*MTY4NjE0MTQzMC4xLjEuMTY4NjE0MTU1NC4wLjAuMA.."

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
            rel="noreferrer"
          >
            <img src={salute} alt="spotlight poster"/>
          </a>
          <p className="text-center text-zinc-400 font-['gothic']">(click to enlarge)</p>
        </div>
      </div>
    </>
  );
};

export default Home;
