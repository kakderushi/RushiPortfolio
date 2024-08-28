import React from 'react';

import pic from "../../public/Rushikesh01-removebg-preview (2).png";

import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaTelegram } from "react-icons/fa6";

import { FaPython } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiScipy } from "react-icons/si";
import { SiScikitlearn } from "react-icons/si";


import { ReactTyped } from "react-typed";

function Home() {
    return (
      <>
        <div
          name="Home"
          className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28"
        >
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
              <span className="text-xl">Welcome In My Feed</span>
              <div className="flex space-x-1 text-2xl md:text-4xl">
                <h1>Hello, I'm a</h1>
                {/* <span >Developer</span> */}
                <ReactTyped
                  className="text-red-700 font-bold"
                  strings={[" Data scientist ", " Data Analyst", "Front-end developer "]}
                  typeSpeed={40}
                  backSpeed={50}
                  loop={true}
                />
              </div>
              <br />
              <p className="text-sm md:text-md text-justify">
              "Skilled in Data Science, Programming, and React.js, specializing in data analysis, Python, and array manipulation. Passionate about solving complex problems and building data-driven, interactive solutions."







              </p>
              <br />
              {/* social media icons */}
              <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
                <div className="  space-y-2">
                  <h1 className="font-bold text-center ">Available on</h1>
                  <ul className="flex space-x-5">
                    <li>
                      <a href="https://www.facebook.com/" target="_blank">
                        <FaSquareFacebook className="text-2xl cursor-pointer" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/" target="_blank">
                        <FaLinkedin className="text-2xl cursor-pointer" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/" target="_blank">
                        <IoLogoYoutube className="text-2xl cursor-pointer" />
                      </a>
                    </li>
                    <li>
                      <a href="https://t.me/" target="_blank">
                        <FaTelegram className="text-2xl cursor-pointer" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className=" space-y-2">
                  <h1 className="font-bold text-center">Currently working on</h1>
                  <div className="flex space-x-5">
                    <FaPython className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                    <SiMysql className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                    <SiScipy className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                    <SiScikitlearn className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
              <img
                src={pic}
                className="rounded-full md:w-[450px] md:h-[450px]"
                alt=""
              />
            </div>
          </div>
        </div>
  
        <hr />
      </>
    );
  }
  
  export default Home;
  
