import { Day } from "@/typings";
import Image from "next/image";
import { BsFillCloudRainFill } from "react-icons/bs";

function DailyCard({ forecast }: { forecast: Day }) {
  const day = forecast.day;

  function getDayOfWeek(day: string) {
    const date = new Date(day);
    const today = new Date();

    if (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    ) {
      return <p>Today</p>;
    }

    return <p>{date.toLocaleDateString("en-US", { weekday: "long" })} </p>;
  }

  return (
    <div
      className="grid grid-cols-3 sm:grid-cols-4 items-center gap-2
    min-h-[70px] text-xl
    shadow-lg rounded-md p-4 shadow-blue-800"
    >
      <h4 className="font-semibold">{getDayOfWeek(forecast.date)}</h4>
      <Image
        width={40}
        height={40}
        src={`https:${day.condition.icon}`}
        alt={day.condition.text}
      />

      <h3>{Math.round(day.avgtemp_c)} °C</h3>

      <div className="hidden sm:flex space-x-2 items-center justify-end">
        <p className="font-semibold">{day.daily_chance_of_rain}%</p>
        <BsFillCloudRainFill className="text-white w-6 h-6" />
      </div>
    </div>
  );
}

export default DailyCard;
