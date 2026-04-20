import React from "react";
import type { JSX } from "react";
import Navigation from "../components/navigation/Navigation";
import ai from "../assets/images/ai3.png";

const Hero = (): JSX.Element => {
  return (
    <div className="flex flex-col text-white h-full  ">
      <Navigation />

      <div className="grid md:grid-cols-2 place-items-center h-full">
        <div className=" flex flex-col justify-center  my-auto ">
          <h1 className="lg:text-6xl  bg-clip-text  font-bold tracking-tight text-balance text-5xl  ">
            Next Gen AI a smart chatbot <br /> powered by OpenAI
          </h1>
          <p className="mt-11 max-sm:text-4 md:max-w-4xl md:text-md  font-medium text-pretty text-gray-400 lg:w-[80%] sm:text-lg">
            It helps you generate clean code, design images with DALL-E, and
            organize your creative projects.Everything you make is automatically
            saved in your history.
          </p>
          <div className="mt-6 flex gap-4 ">
            <button className="relative text-black group cursor-pointer px-6 py-2 border  overflow-hidden rounded-sm">
              <div className="translate-y-12 group-hover:translate-y-0 duration-300 transition-transform inset-0 absolute -z-20 bg-white  z-20" />
              <h1 className="relative z-20 text-white text-nowrap group-hover:text-black">
                Get started
              </h1>
            </button>

            <button className="relative text-black group cursor-pointer px-6 py-2 border bg-white overflow-hidden rounded-sm">
              <div className="-translate-y-12 group-hover:translate-y-0 duration-300 transition-transform inset-0 absolute -z-20 bg-black  z-20" />
              <h1 className="relative z-20 text-black group-hover:text-white text-nowrap group-hover:text-black">
                Login
              </h1>
            </button>
          </div>
        </div>

        <div className="relative hide-skull text-center  md:flex flex-col justify-center  h-175 flex-1 mt-10">
          <img src={ai} className="animate-skull w-full  h-full object-cover" />

          <div className="bg-blue-100/13 absolute inset-0 rounded-full blur-3xl" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
