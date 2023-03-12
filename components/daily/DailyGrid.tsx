import { Day } from "@/typings";

function DailyGrid({ chosenDay }: { chosenDay: Day }) {
  return (
    <div className="grid grid-cols-2 gap-2">
      <div className="gridStyle">
        <h5>Sunrise</h5>
        <h4>{chosenDay.astro.sunrise}</h4>
      </div>
      <div className="gridStyle">
        <h5>Sunset</h5>
        <h4>{chosenDay.astro.sunset}</h4>
      </div>
      <div className="gridStyle">
        <h5>Chance of rain</h5>
        <h4>{chosenDay.day.daily_chance_of_rain}%</h4>
      </div>
      <div className="gridStyle">
        <h5>Total precipitation</h5>
        <h4>{chosenDay.day.totalprecip_mm}mm</h4>
      </div>
      <div className="gridStyle">
        <h5>Average humidity</h5>
        <h4>{chosenDay.day.avghumidity}%</h4>
      </div>
      <div className="gridStyle">
        <h5>Max wind speed</h5>
        <h4>{chosenDay.day.maxwind_kph} km/h</h4>
      </div>
      <div className="gridStyle">
        <h5>Chance of snow</h5>
        <h4>{chosenDay.day.daily_chance_of_snow}%</h4>
      </div>
      <div className="gridStyle">
        <h5>Total snow</h5>
        <h4>{chosenDay.day.totalsnow_cm}cm</h4>
      </div>
    </div>
  );
}

export default DailyGrid;
