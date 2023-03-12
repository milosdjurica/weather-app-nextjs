import HourGrid from "@/components/hourly/HourGrid";
import HourlySection from "@/components/hourly/HourlySection";
import Loading from "@/components/layout/Loading";
import { useMyStore } from "@/store";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

function Hour() {
  const [response, daySelected, hourSelected] = useMyStore((state) => [
    state.response,
    state.daySelected,
    state.hourSelected,
  ]);

  const router = useRouter();
  if (!response) return <Loading />;

  const chosenDay = response.forecast.forecastday[daySelected];

  if (router.query.dayName !== chosenDay.date) {
    //! if refresh page for day0 then it wont redirect back
    //! because default value is day0
    router.push("/");
    return null;
  }

  const hourObj = response.forecast.forecastday[daySelected].hour[hourSelected];

  return (
    <div className="w-full space-y-20">
      <div className="text-center space-y-5">
        <h1 className="text-5xl">{response.location.name}</h1>
        <h2 className="text-2xl">Forecast for {hourObj.time}</h2>
        <div className="flex items-center justify-center font-semibold">
          <p className="text-xl">{hourObj.condition.text} </p>
          <Image
            width={40}
            height={40}
            priority
            src={`https:${hourObj.condition.icon}`}
            alt={hourObj.condition.text}
          />
        </div>

        <h2 className="text-5xl">{hourObj.temp_c}°C</h2>

        <p className="font-semibold text-lg">
          Feels like: {Math.round(hourObj.feelslike_c)}°C
        </p>
      </div>

      <HourGrid hourObj={hourObj} />
      <div className="flex justify-center">
        <HourlySection response={response} />
      </div>
    </div>
  );
}

export default Hour;
