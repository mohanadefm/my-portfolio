import React from "react";
import {
  SearchIcon,
  TerminalIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";
import mohanad from "../assets/mohanad-methkal.pdf";

export default function About() {
  return (
    <section id="about">
      <div className="container px-5 py-10 mx-auto text-center pt-20">
        <UserCircleIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          About Me
        </h1>
        <div className="flex flex-wrap m-4">
          <br />

          <div className="p-4 md:w-1/2 w-full">
            <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
              <TerminalIcon className="block w-8 text-gray-500 mb-4" />
              <p className="leading-relaxed mb-6 text-justify">
                I'm a junior web developer who has graduated from a web
                development boot camp at Barcelona Code School. <br /> Since I
                was young I've always been fascinated with computer science and
                the ever-changing world of apps.
                <br /> That's why I became interested in programming then I
                turned from building construction to building websites.
              </p>
            </div>
          </div>

          <div className="p-4 md:w-1/2 w-full">
            <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
              <SearchIcon className="block w-8 text-gray-500 mb-4" />
              <p className="leading-relaxed mb-6 text-justify">
                Currently, I'm looking for a full-time web developer position,
                where I could continue to grow my skill set and build exciting
                software.
              </p>
              <br />
              <div className="inline-flex items-center">
                <div className="flex justify-center">
                  <a
                    target="_blank"
                    href={mohanad}
                    className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
                  >
                    View resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// element.style {
//   display: flex;
//   /* justify-content: center; */
//   justify-content: space-around;
//   /* align-items: flex-end; */
//   flex-direction: column;
// }
