import { ResponseType } from "@/typings";
import React from "react";
import DailyCard from "./DailyCard";

function DailySection({ response }: { response: ResponseType }) {
  const forecasts = response.forecast.forecastday;

  return (
    <div
      className="space-y-10 mb-20
  border border-black w-[90%] lg:w-1/2  p-4
  "
    >
      <div className="w-full flex justify-between pb-5 border-b border-black">
        <h1 className="text-xl font-bold">{`${response.location.name} (${response.location.country})`}</h1>
        <p>{`${response.location.localtime.split(" ")[1]}`}</p>
      </div>

      {forecasts.map((forecast) => {
        return <DailyCard key={forecast.date_epoch} forecast={forecast} />;
      })}
    </div>
  );
}

export default DailySection;
