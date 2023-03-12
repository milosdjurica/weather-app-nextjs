import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

function Footer() {
  return (
    <div
      className="p-2 sm:p-4 bg-black text-white space-y-5
    flex flex-col md:flex-row justify-between"
    >
      <div className="w-full md:w-1/2">
        <p className="font-semibold">
          This project is created for learning purposes only.
        </p>
        <p className="font-semibold">It is using WeatherAPI from RapidAPI.</p>
      </div>
      <div className="flex w-full md:w-1/2">
        <h3 className="w-2/3 text-lg">Created by Miloš Đurica</h3>
        <div className="w-1/3 flex space-x-5 justify-end">
          <a href="https://github.com/milosdjurica">
            <BsGithub className="text-3xl hover:text-blue-500" />
          </a>
          <a href="https://www.linkedin.com/in/milosdjurica/">
            <BsLinkedin className="text-3xl hover:text-blue-500" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
