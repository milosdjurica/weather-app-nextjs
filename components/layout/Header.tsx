import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useStore } from "@/store";
import { ResponseType } from "@/typings";

function Header() {
  const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

  const [currentCity, setCurrentCity] = useState("Novi Sad");
  const [response, updateResponse] = useStore((state) => [
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
    <header className="flex justify-between">
      <Link href="/">Home</Link>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          makeRequest();
        }}
      >
        <label className="text-xl font-semibold">Enter city name </label>
        <input
          type="text"
          className="rounded-xl px-3 bg-blue-100 
      text-center 
      border-2 border-blue-900"
          onChange={changeCity}
        />
      </form>
    </header>
  );
}

export default Header;
