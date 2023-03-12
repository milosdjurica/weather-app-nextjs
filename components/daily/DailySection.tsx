import { ResponseType } from "@/typings";
import DailyCard from "./DailyCard";

function DailySection({ response }: { response: ResponseType }) {
  const forecasts = response.forecast.forecastday;

  return (
    <div className="mb-20 w-[90%] space-y-4 md:w-2/3">
      <h5 className="text-center text-2xl font-bold">3 Days Forecast</h5>
      {forecasts.map((forecast, index) => {
        return (
          <DailyCard
            key={forecast.date_epoch}
            index={index}
            forecast={forecast}
          />
        );
      })}
    </div>
  );
}

export default DailySection;
