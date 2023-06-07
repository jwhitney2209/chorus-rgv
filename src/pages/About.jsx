import React from "react";
import swirl from "../assets/crgvswirltr.png";

const About = () => {
  return (
    <>
      <div className="">
        {/* Header/Hero */}
        <div
          className="max-w-[1240px] h-[500px] bg-zinc-800 text-white mx-auto flex md:flex-row flex-col justify-center"
          style={{ backgroundImage: `url(${swirl})` }}
        >
          <div className="flex justify-center">
            <div className="text-3xl font-medium font-link flex items-center md:text-left text-center m-4">
              <p>
                About <br />
                <span className="text-5xl font-link">Chorus</span>
                <span className="font-normal font-['gothic']">RGV</span>
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="md:text-1xl text-2xl font-normal flex items-center md:text-left text-center m-4">
              <ul className="font-['gothic']">
                <li className="p-2 border-b hover:text-gray-500">
                  <a href="#org">Our Organization</a>
                </li>
                <li className="p-2 border-b hover:text-gray-500">
                  <a href="#org">Vision & Mission</a>
                </li>
                <li className="p-2 border-b hover:text-gray-500">
                  <a href="#board">Board of Directors</a>
                </li>
                <li className="p-2 border-b hover:text-gray-500">
                  <a href="#conductor">Conductor</a>
                </li>
                {/* <li className="p-2 border-b hover:text-gray-500">
                  <a href="#pianist">Collaborative Pianist</a>
                </li> */}
                <li className="p-2 border-b hover:text-gray-500">
                  <a href="#members">Personnel</a>
                </li>
                <li className="p-2 border-b hover:text-gray-500">
                  <a href="#audition">Audition</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Organization */}
        <div className="max-w-[1240px] text-zinc-800 mx-auto flex flex-col justify-center p-4">
          <div id="org" className="flex justify-center p-4">
            <p className="font-link text-4xl">Our Organization</p>
          </div>
          <div className="md:text-left m-4">
            <p className="text-3xl font-medium font-link">Mission</p>
            <p className="font-['gothic']">
              The Chorus of the Rio Grande Valley will nurture the skilled,
              talented and musical citizens of our local communities with
              enriched, independent and collaborative, artistic, musical
              endeavors to share with the residents of our Border Region,
              throughout Texas and across the United States.
            </p>
          </div>
          <div className="md:text-left m-4">
            <p className="text-3xl font-medium font-link">Vision</p>
            <p className="font-['gothic']">
              The Chorus of the Rio Grande Valley will strive to promote Peace,
              Love and Harmony to nourish the soul through a culture of
              Inspiring, Unifying, Enlightening and Entertaining music making
            </p>
          </div>
        </div>
        {/* Board of Directors */}
        <div className="max-w-[1240px] bg-zinc-800 text-white mx-auto flex flex-col justify-center p-4">
          <div
            id="board"
            className="flex justify-center text-4xl font-link p-4"
          >
            <p>Board of Directors</p>
          </div>
          <div className="text-center m-4">
            <p className="font-['gothic']">
              Randall Ashley<span className="font-bold"> La Feria</span>
              <br />
              Aurora Cavazos<span className="font-bold"> Weslaco</span>
              <br />
              Dr. Javier Jover, MD
              <span className="font-bold"> Brownsville</span>
              <br />
              Adriana Lopez-Ortiz<span className="font-bold"> Austin</span>
              <br />
              Melanie Smith<span className="font-bold"> Harlingen</span>
              <br />
              Alicia Ybarra-Perez<span className="font-bold"> San Antonio</span>
              <br />
              Dr. Brian Warren, EdD<span className="font-bold"> McAllen</span>
              <br />
              <br />
              <span className="font-bold">
                Proudly representing and serving on behalf of the Border Region
                Communities that stretch across South Texas!
              </span>
            </p>
          </div>
        </div>
        {/* Conductor */}
        <div className="max-w-[1240px] text-zinc-800 mx-auto flex flex-col justify-center p-4">
          <div
            id="conductor"
            className="flex justify-center text-4xl font-link p-4"
          >
            <p className="">Executive Artistic Director</p>
          </div>
          <div className="m-4">
            <p className="text-2xl font-medium mb-2 font-['gothic']">
              Joel LaMar Cruz (Conductor)
            </p>
            <p className="font-['gothic']">
              With a career in music education, Joel is currently a Head Choral
              Director for the Brownsville ISD and formerly served as director
              of Choral Activities in the Greater Houston Area, after previously
              serving Harlingen HS and Los Fresnos CISD as Director of Choral
              Activities. Programs under his direction have earned consecutive
              sweepstakes, Best in Class and Grand Champion honors at UIL
              Concert & Sight-Reading Contests & music festivals across the
              state. Additionally, his singers have received top recognition at
              UIL State Solo & Ensemble contest, and as members of the Texas
              All-State Choirs. In February of 2015, the Harlingen High School
              Varsity Men’s Choir, under Cruz’s direction, was featured as an
              invited performing choir for the TMEA Convention in San Antonio.
              <br />
              <br />
              Joel has served as Vocal Chair for TMEA Region 28 and previously
              served as the region’s vocal division secretary/treasurer. His
              article “Bringing New Music to Life” was published in the
              September 2015 issue of Southwestern Musician.
              <br />
              <br />
              A performer at heart, Joel has extensive experience as a member of
              and soloist, appearing with the Arlington Choral Society, the
              Turtle Creek Chorale, Schola Cantorum, the South Texas Mass Choir,
              the Note Vole Singers, and most notably with the South Texas
              Chorale, the Dianne Brumley Chorale and the Comfort Singers. He
              drew from these experiences to establish The Studio Chorale in
              2000 and the newest South Texas ensemble, Chorus of the Rio Grande
              Valley in 2021.
              <br />
              <br />
              Joel is a proud member of the Texas Theatre Adjudicators and
              Officials, Texas Music Adjudicators Association, Texas Music
              Educators Association, Texas Choral Directors Association and
              American Choral Directors Association, and serves as a clinician
              and adjudicator throughout Texas. Awards and honors include the
              Bell Award and the Master Teacher Award.
            </p>
          </div>
        </div>
        {/* Collaborative Pianist */}
        <div></div>
        {/* Members */}
        <div className="max-w-[1240px] bg-zinc-800 text-white mx-auto flex flex-col justify-center p-4">
          <div
            id="members"
            className="flex justify-center text-4xl font-link p-4"
          >
            <p>Personnel</p>
          </div>
          <div className="flex flex-col justify-evenly md:flex-row text-center">
          <div className="flex flex-col items-center md:mt-4 mb-2">
            <h1 className="text-3xl font-medium font-link">Collaborative Pianist</h1>
            <p className="font-['gothic']">
              Cesar Mascorro
              <br />
            </p>
          </div>
            <div className="mb-2">
              <h1 className="text-3xl font-medium font-link">Soprano</h1>
              <p className="font-['gothic']">
                Nidia Canas, San Benito
                <br />
                Tirzah Claus, Harlingen
                <br />
                Alyssa Cortez, Olmito
                <br />
                Dalia Emanuel, Donna
                <br />
                Jenna Fite, Harlingen
                <br />
                Rebecca Gamboa, San Benito
                <br />
                Sylvia Lester, Harlingen
                <br />
                Nichole Moreno, McAllen
                <br />
                Carolyn Porter, Laguna Vista
                <br />
                Faye Russell, Laguna Heights
                <br />
                Elora Sanchez, Combes
                <br />
                Stephanie Zamora, Brownsville
                <br />
              </p>
            </div>
            <div className="mb-2">
              <h1 className="text-3xl font-medium font-link">Alto</h1>
              <p className="font-['gothic']">
                Francisa Cruz, Harlingen
                <br />
                Lois Day, Harlingen
                <br />
                Jennifer Hernandez, Brownsville
                <br />
                Janice Lester, Harlingen
                <br />
                Lisa Morrell, Los Fresnos
                <br />
                Viviana Mora, Port Isabel
                <br />
                Lynn Murphy, Harlingen
                <br />
                Blanca Olvera, Brownsville
                <br />
                Steffanie Quijano, Brownsville
                <br />
                Gerisa Yvette Reyes, Harlingen
                <br />
                Hinelda Sauceda, Harlingen
                <br />
                Melanie Smith, Harlingen
                <br />
                Claudia Torres, Harlingen
                <br />
                Carmen Vara, Harlingen
                <br />
              </p>
            </div>
            <div className="mb-2">
              <h1 className="text-3xl font-medium font-link">Tenor</h1>
              <p className="font-['gothic']">
                Randall Ashley, La Feria
                <br />
                Carlos Canas, San Benito
                <br />
                Christopher Fierro, Harlingen
                <br />
                Ricardo Garcia, Rancho Viejo
                <br />
                Christopher Sanchez, Combes
                <br />
                Gary Skaggs, Laguna Vista
                <br />
                Carlos Vasquez, Brownsville
                <br />
                Frank Zamarron, Harlingen
                <br />
              </p>
            </div>
            <div className="mb-2">
              <h1 className="text-3xl font-medium font-link">Bass</h1>
              <p className="font-['gothic']">
                Robert Cruhm, McAllen
                <br />
                Gustavo Garcia, La Feria
                <br />
                Daniel Garza, Harlingen
                <br />
                Sergio Godinez, Brownsville
                <br />
                Luis Perez, Brownsville
                <br />
                Anthony Ramirez, Brownsville
                <br />
                Michael Rodriguez, Brownsville
                <br />
                Jason Whitney, Brownsville
                <br />
              </p>
            </div>
          </div>
        </div>
        {/* Audition */}
        <div className="max-w-[1240px] bg-white text-zinc-800 mx-auto flex flex-col justify-center p-4">
          <div
            id="audition"
            className="flex flex-col justify-center items-center text-3xl font-medium font-link p-4"
          >
            <p>2022-2023 Season</p>
            <p>Open Auditions</p>
            <p className="font-normal text-center mt-4 font-['gothic']">
              6:00 PM - 9:00 PM
              <br />
              Monday, August 1, 2022
              <br />
              Tuesday, August 2, 2022
              <br />
              Harlingen Community Theatre
              <br />
              1209 Fair Park Boulevard, Harlingen
              <br />
              <br />
              6:00 PM - 7:00 PM
              <br />
              Tuesday, January 10, 2023
              <br />
              Rio Grand Valley Arts Studio
              <br />
              1025 W Jackson, Harlingen
              <br />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
