import { useMyStore } from "@/store";
import { Day } from "@/typings";
import Image from "next/image";
import Link from "next/link";
import { BsFillCloudRainFill } from "react-icons/bs";

function DailyCard({ forecast, index }: { forecast: Day; index: number }) {
  const [daySelected, updateDaySelected] = useMyStore((state) => [
    state.daySelected,
    state.updateDaySelected,
  ]);

  const dayWeather = forecast.day;

  function getDayOfWeek(day: string) {
    const date = new Date(day);
    // const today = new Date();

    // !! this can give a bad output because of timezones
    // !! can give today in the middle which doesn't make sense
    // !! not an error just an issue with timezones
    // if (
    //   date.getDate() === today.getDate() &&
    //   date.getMonth() === today.getMonth() &&
    //   date.getFullYear() === today.getFullYear()
    // ) {
    //   return <p>Today</p>;
    // }

    return date.toLocaleDateString("en-US", { weekday: "long" });
  }

  return (
    <Link
      href={`/${forecast.date}`}
      onClick={() => updateDaySelected(index)}
      className="grid grid-cols-3 sm:grid-cols-4 items-center gap-2
    min-h-[70px] text-xl
    shadow-lg rounded-md p-4 shadow-blue-800"
    >
      <h4 className="font-semibold">{getDayOfWeek(forecast.date)}</h4>
      <Image
        width={40}
        height={40}
        src={`https:${dayWeather.condition.icon}`}
        alt={dayWeather.condition.text}
        className="ml-5"
      />

      <h3>{Math.round(dayWeather.avgtemp_c)} °C</h3>

      <div className="hidden sm:flex space-x-2 items-center justify-end">
        <p className="font-semibold">{dayWeather.daily_chance_of_rain}%</p>
        <BsFillCloudRainFill className="text-white w-6 h-6" />
      </div>
    </Link>
  );
}

export default DailyCard;
