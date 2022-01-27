import React from "react";

export default function Main() {
  return (
    <section id="main" className="h-full pt-6">
      <div className="container mx-auto flex px-10 py-12 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <img
            className="object-cover object-center mb-6 rounded-3xl h-36 w-50"
            alt="dev"
            src="./me.jpg"
          />
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm <span className="text-green-500">Mohanad</span>.
            <br />I love to build amazing apps.
          </h1>
          <br />
          <br />
          <div className="flex justify-center">
            <a
              href="#about"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg   transition-transform"
            >
              Know more
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>
    </section>
  );
}
