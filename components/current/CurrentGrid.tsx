import { Current } from "@/typings";
import React from "react";

function CurrentGrid({ current }: { current: Current }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-gray-100 p-4 flex justify-between">
        <h6>Feels like</h6>
        <p className="font-bold">{current.feelslike_c}°C</p>
      </div>
      <div className="bg-gray-100 p-4 flex justify-between">
        <h6>Humidity</h6>
        <p className="font-bold">{current.humidity}%</p>
      </div>
      <div className="bg-gray-100 p-4 flex justify-between">
        <h6>Cloud</h6>
        <p className="font-bold">{current.cloud}%</p>
      </div>
      <div className="bg-gray-100 p-4 flex justify-between">
        <h6>Precipitation</h6>
        <p className="font-bold">{current.precip_mm} mm</p>
      </div>
      <div className="bg-gray-100 p-4 flex justify-between">
        <h6>Pressure</h6>
        <p className="font-bold">{current.pressure_mb} mb</p>
      </div>
      <div className="bg-gray-100 p-4 flex justify-between">
        <h6>Visibility</h6>
        <p className="font-bold">{current.vis_km} km</p>
      </div>
      <div className="bg-gray-100 p-4 flex justify-between">
        <h6>Wind</h6>
        <p className="font-bold">{current.wind_kph} km/h</p>
      </div>
      <div className="bg-gray-100 p-4 flex justify-between">
        <h6>Wind Direction</h6>
        <p className="font-bold">{current.wind_dir}</p>
      </div>
    </div>
  );
}

export default CurrentGrid;
