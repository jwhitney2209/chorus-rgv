import React from "react";
import chart from "../assets/seatingchart.png";

const supporters = [
  {
    name: "Soli",
    amount: "$2,500 +",
  },
  {
    name: "Sopra",
    amount: "$1,000 +",
  },
  {
    name: "Contralto",
    amount: "$500 +",
  },
  {
    name: "Tenore",
    amount: "$250 +",
  },
  {
    name: "Basso",
    amount: "$100 +",
  },
  {
    name: "Coro",
    amount: "$50 +",
  },
  {
    name: "Corista",
    amount: "$25 +",
  }
]

const Support = () => {
  return (
    <div>
      <div className="max-w-[1240px] h-[500px] bg-zinc-800 text-white mx-auto flex md:flex-row flex-col justify-center">
        <div className="flex justify-center">
          <div className="text-4xl font-link flex items-center md:text-left text-center m-4">
            <p className="">
              Support <br />
              <span className="text-4xl">Chorus</span>
              <span className="text-3xl font-['gothic']">RGV</span>
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="md:text-1xl text-2xl font-normal  flex items-center md:text-left text-center m-4">
            <ul>
              <li className="p-2 border-b hover:text-gray-500">
                <a href="#tickets">Ticket Information & Concert Seating</a>
              </li>
              <li className="p-2 border-b hover:text-gray-500">
                <a href="#sponsor">Sponsorship Levels</a>
              </li>
              <li className="p-2 border-b hover:text-gray-500">
                <a href="#underwrite">Underwriting Opportunities</a>
              </li>
              <li className="p-2 border-b hover:text-gray-500">
                <a href="#donate">Donate</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-[1240px] bg-white text-zinc-800 mx-auto flex flex-col justify-center py-16 sm:py-8">
        <div className="flex flex-col">
          <div
            id="tickets"
            className="text-4xl font-medium font-link flex justify-center text-center m-4"
          >
            Ticket Information & Concert Seating
          </div>
          <div className="flex flex-col justify-center items-center m-4">
            <p className="font-['gothic'] text-center">
              Tickets are available through ChorusRGV Members, by visiting Rio
              Grand Valley Arts Studio, by emailing chorusrgv@gmail.com or for
              purchase at the door.
              <br />
              <br />
              (click to enlarge)
            </p>
            <a
              href="https://firebasestorage.googleapis.com/v0/b/chorusrgv-d8382.appspot.com/o/seatingchart.png?alt=media&token=bb6faa4d-55eb-4e4f-85ca-9704aea7a499"
              target="_blank"
              rel="noreferrer"
            >
              <img src={chart} alt="seating chart" />
            </a>
          </div>
        </div>
      </div>
      <div id="sponsor" className="bg-zinc-800 text-white py-16 sm:py-8">
        <div className="flex justify-center">
          <div className="md:text-1xl text-2xl font-normal flex items-center md:text-left text-center mt-4">
            <div className="font-link font-medium text-4xl">
              <h1>Season Patron Levels</h1>
            </div>
          </div>
        </div>
        <div className="flex text-center text-xl justify-center font-['gothic'] m-4">
          <p>
            Soli ($2,500 +)*****
            <br />
            Sopra ($1,000 + )*****
            <br />
            Contralto ($500 + )****
            <br />
            Tenore ($250 + )***
            <br />
            Basso ($100 + )**
            <br />
            Coro ($50 + )**
            <br />
            Corista ($25)*
            <br />
            <br />
            <p className="text-base">
              Each Sponsoring Patron will receive the following benefits:
              <br />
              <br />
              Individual Name(s) printed in each Concert Program and… <br />
            </p>
            <p className="text-base text-left mb-4">
              *1 Student Admission to 3 Concert Events with Student Assigned
              Seating <br />
              ** Admission to 2 Concert Events of your choice with General
              Admission Seating <br />
              *** Admission to 3 Concert Events with Reserved Seating <br />
              ****Sponsor Recognition on the CRGV Webpage
              <br />
              *****Sponsor Recognition on the CRGV Webpage & all Social Media
              Platforms
              <br />
            </p>
          </p>
        </div>
      </div>
      <div id="underwrite" className="text-zinc-800 py-16 sm:py-8">
        <div className="flex justify-center">
          <div className="md:text-1xl text-2xl font-normal flex items-center md:text-left text-center m-4">
            <div className="text-4xl font-link font-medium">
              <h1>Underwriting Opportunities</h1>
            </div>
          </div>
        </div>
        <div className="flex text-center justify-center font-['gothic'] m-4">
          <p className="">
            <strong>Prima Donna/Primo Uomo ($5,000 + )</strong>
            <br />
            the Sponsoring Underwriter will receive the following benefits for
            the Concert Event:
            <br />
            10 Reserved Tickets
            <br />
            Prime Seating
            <br />
            <br />
            as well as...
            <br />
            <br />
            Sponsor Recognition on:
            <br />
            the printed concert event program
            <br />
            the Chorus RGV Webpage
            <br />
            all Social Media Platforms and
            <br />
            all Printed and Promotional Advertisements
          </p>
        </div>
      </div>
    </div>
  );
};

export default Support;
