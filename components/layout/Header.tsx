import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useMyStore } from "@/store";
import { ResponseType } from "@/typings";

function Header() {
  const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

  const [currentCity, setCurrentCity] = useState("Novi Sad");
  const [response, updateResponse] = useMyStore((state) => [
    state.response,
    state.updateResponse,
  ]);

  const options = {
    method: "GET",
    url: "https://weatherapi-com.p.rapidapi.com/forecast.json",
    params: { q: currentCity, days: "3" },
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };

  function makeRequest() {
    // !Query for the API has to be at least 3 characters long
    if (currentCity.length < 3) return null;

    axios
      .request(options)
      .then(function (response) {
        const data: ResponseType = response.data;
        updateResponse(data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  function changeCity(e: any) {
    setCurrentCity(e.target.value);
  }

  useEffect(() => {
    makeRequest();
  }, []);

  return (
    <header
      className="flex justify-between items-center
      p-4 border-b-2 border-blue-900"
    >
      <Link
        href="/"
        className="px-4 py-1 max-w-[80px] 
        rounded-lg font-semibold text-lg
      flex justify-center
    bg-blue-300 shadow-lg shadow-blue-400 
      hover:scale-105 ease-in duration-200
      "
      >
        Home
      </Link>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          makeRequest();
        }}
      >
        <input
          type="text"
          placeholder="Novi Sad"
          className="rounded-xl px-3 py-1 bg-blue-100 
      text-center w-[150px] sm:w-[200px]
      border-2 border-blue-900"
          onChange={changeCity}
        />
      </form>
    </header>
  );
}

export default Header;
