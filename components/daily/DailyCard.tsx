import { Day } from "@/typings";
import Image from "next/image";
import { BsCloudRain } from "react-icons/bs";

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
      className="grid grid-cols-4 items-center gap-2
    min-h-[70px] cursor-pointer
    border-b border-sky-500"
    >
      <h4 className="font-semibold text-xl">{getDayOfWeek(forecast.date)}</h4>
      <Image
        width={30}
        height={30}
        src={`https:${day.condition.icon}`}
        alt={day.condition.text}
      />

      <h3 className="text-xl">{Math.round(day.avgtemp_c)} °C</h3>
      <div className="flex space-x-2 items-center justify-center">
        <p className="text-xl font-semibold">{day.daily_chance_of_rain}%</p>
        <BsCloudRain className="text-sky-500 text-lg" />
      </div>
    </div>
  );
}

export default DailyCard;
