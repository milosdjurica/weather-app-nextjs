import { Day } from "@/typings";
import { BsCloudRain } from "react-icons/bs";

function DailyCard({ forecast }: { forecast: Day }) {
  const day = forecast.day;

  return (
    <div className="border border-sky-500">
      <h4 className="font-semibold">
        {/* // !formating date to: DD-MM-YYYY */}
        {forecast.date.split("-").reverse().join(".")}
      </h4>

      <div className="flex justify-between items-end ">
        <h3 className="text-2xl w-1/3">{day.avgtemp_c} °C</h3>
        <div className="flex flex-col w-1/3 items-center">
          <BsCloudRain className="text-sky-500" />
          <p>{day.daily_chance_of_rain}%</p>
        </div>
        <h6 className="w-1/3">{day.condition.text}</h6>
      </div>
    </div>
  );
}

export default DailyCard;
