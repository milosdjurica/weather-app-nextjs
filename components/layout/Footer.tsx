import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

function Footer() {
  return (
    <div
      className="p-2 sm:px-4 bg-white text-center font-semibold
    grid grid-cols-1 md:grid-cols-4 items-center"
    >
      <h3 className="text-lg">
        Created by{" "}
        <a
          className="hover:text-blue-500"
          href="https://portfolio-milosdjurica.vercel.app/"
        >
          Miloš Đurica
        </a>
      </h3>
      <div className=" flex space-x-5 justify-center my-4">
        <a href="https://github.com/milosdjurica">
          <BsGithub className="text-3xl hover:text-blue-500" />
        </a>
        <a href="https://www.linkedin.com/in/milosdjurica/">
          <BsLinkedin className="text-3xl hover:text-blue-500" />
        </a>
      </div>

      <p>Using WeatherAPI from RapidAPI.</p>
      <p>Created for learning purposes only.</p>
    </div>
  );
}

export default Footer;
