import { ResponseType } from "@/typings";
import DailyCard from "./DailyCard";

function DailySection({ response }: { response: ResponseType }) {
  const forecasts = response.forecast.forecastday;

  return (
    <div className="mb-20 w-[90%] md:w-2/3">
      <h5 className="border-b border-sky-500">3 DAYS FORECAST</h5>
      {forecasts.map((forecast) => {
        return <DailyCard key={forecast.date_epoch} forecast={forecast} />;
      })}
    </div>
  );
}

export default DailySection;
