import DailyGrid from "@/components/daily/DailyGrid";
import Loading from "@/components/layout/Loading";
import { useMyStore } from "@/store";
import Image from "next/image";

function Day() {
  const [response, daySelected, updateDaySelected] = useMyStore((state) => [
    state.response,
    state.daySelected,
    state.updateDaySelected,
  ]);

  if (!response) return <Loading />;

  const chosenDay = response.forecast.forecastday[daySelected];

  return (
    <div className="text-center space-y-20 ">
      <main className="space-y-5 text-2xl">
        <h1 className="text-4xl">{response.location.name}</h1>

        <p>
          Forecast for
          <span className="font-semibold">
            {" "}
            {chosenDay.date.split("-").reverse().join(".")}
          </span>
        </p>

        <div className="flex items-center justify-center font-semibold">
          <p className="text-xl">{chosenDay.day.condition.text} </p>
          <Image
            width={40}
            height={40}
            priority
            src={`https:${chosenDay.day.condition.icon}`}
            alt={chosenDay.day.condition.text}
          />
        </div>

        <h2 className="text-4xl">Avg temp: {chosenDay.day.avgtemp_c}°C</h2>

        <div className="flex space-x-8 items-center justify-center">
          <p>Highest: {Math.round(chosenDay.day.maxtemp_c)}°C</p>
          <p>Lowest: {Math.round(chosenDay.day.mintemp_c)}°C</p>
        </div>
      </main>
      <DailyGrid chosenDay={chosenDay} />
    </div>
  );
}

export default Day;
