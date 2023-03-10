import { ResponseType } from "@/typings";
import HourlyCard from "./HourlyCard";

function HourlySection({ response }: { response: ResponseType }) {
  const todayHours = response.forecast.forecastday[0].hour;
  return (
    <div className="w-[90%] md:w-2/3 overflow-x-auto">
      <h6>Hourly Forecast</h6>

      <div className="flex space-x-4">
        {todayHours.map((hour) => {
          return <HourlyCard todayHour={hour} />;
        })}
      </div>
    </div>
  );
}

export default HourlySection;
