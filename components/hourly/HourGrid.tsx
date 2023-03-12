import { HourlyPrediction } from "@/typings";
import React from "react";

function HourGrid({ hourObj }: { hourObj: HourlyPrediction }) {
  return (
    <div className="grid grid-cols-2 gap-4 w-[90%] mx-auto md:w-2/3">
      <div className="gridStyle">
        <h5>Cloud</h5>
        <h4>{hourObj.cloud}%</h4>
      </div>
      <div className="gridStyle">
        <h5>Humidity</h5>
        <h4>{hourObj.humidity}%</h4>
      </div>
      <div className="gridStyle">
        <h5>Chance of rain</h5>
        <h4>{hourObj.chance_of_rain}%</h4>
      </div>
      <div className="gridStyle">
        <h5>Precipitation</h5>
        <h4>{hourObj.precip_mm}mm</h4>
      </div>
      <div className="gridStyle">
        <h5>Pressure</h5>
        <h4>{hourObj.pressure_mb} mb</h4>
      </div>
      <div className="gridStyle">
        <h5>Visibility</h5>
        <h4>{hourObj.vis_km} km</h4>
      </div>
      <div className="gridStyle">
        <h5>Chance of snow</h5>
        <h4>{hourObj.chance_of_snow}%</h4>
      </div>
      <div className="gridStyle">
        <h5>Heat index</h5>
        <h4>{hourObj.heatindex_c}</h4>
      </div>
      <div className="gridStyle">
        <h5>Wind speed</h5>
        <h4>{hourObj.wind_kph} km/h</h4>
      </div>
      <div className="gridStyle">
        <h5>Wind direction</h5>
        <h4>{hourObj.wind_dir}</h4>
      </div>
    </div>
  );
}

export default HourGrid;
