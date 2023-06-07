import React from "react";
import swirl from "../assets/crgvswirltr.png";

const Sponsors = () => {
  return (
    <div>
      <div
        className="max-w-[1240px] bg-zinc-800 text-white mx-auto flex md:flex-row flex-col justify-center"
        style={{ backgroundImage: `url(${swirl})` }}
      >
        <div className="flex justify-center">
          <div className="text-4xl font-medium font-link flex items-center md:text-left text-center m-4">
            <h1>
              Event Sponsors <br />& Patrons <br />
            </h1>
          </div>
        </div>
        {/* <div className="flex justify-center">
          <div className="md:text-1xl text-2xl font-normal flex items-center md:text-left text-center m-4">
            <div className="font-link">
              <h1>Active (Current) Event Sponsors</h1>
            </div>
          </div>
        </div>
        <div className="flex text-center text-base justify-center font-['gothic'] m-4">
          <p>

          </p>
        </div> */}
        <div className="flex justify-center">
          <div className="md:text-1xl text-2xl font-normal flex items-center md:text-left text-center m-4">
            <div className="">
              <h1 className="font-link text-3xl">Active Patrons</h1>
              <h1 className="font-link text-2xl">Sopra</h1>
              <p className="text-base">Dr. Louis and Mrs. Sylvia Lester</p>
              <h1 className="font-link text-2xl">Contralto</h1>
              <p className="text-base">Mrs. Lamar Cruz</p>
              <h1 className="font-link text-2xl">Tenore</h1>
              <p className="text-base">
                Mr. Randy C. and Mrs. Carolyn J. Porter
              </p>
              <h1 className="font-link text-2xl">Basso</h1>
              <p className="text-base">Mr. Jaime Francisco Menchaca Jr.</p>
            </div>
          </div>
        </div>
        <div className="flex text-center text-base justify-center font-['gothic'] m-4">
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
