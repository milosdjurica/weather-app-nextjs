import DailyGrid from "@/components/daily/DailyGrid";
import HourlySection from "@/components/hourly/HourlySection";
import Loading from "@/components/layout/Loading";
import { useMyStore } from "@/store";
import Image from "next/image";
import { useRouter } from "next/router";

function Day() {
  const [response, daySelected, updateDaySelected] = useMyStore((state) => [
    state.response,
    state.daySelected,
    state.updateDaySelected,
  ]);

  const router = useRouter();
  if (!response) return <Loading />;

  const chosenDay = response.forecast.forecastday[daySelected];

  if (router.query.dayName !== chosenDay.date) {
    //! if refresh page for day0 then it wont redirect back
    //! because default value is day0
    router.push("/");
    return null;
  }

  return (
    <div className="text-center space-y-20 w-full">
      <div className="space-y-5 text-2xl text-center">
        <h1 className="text-5xl">{response.location.name}</h1>

        <h2>Forecast for {chosenDay.date}</h2>

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
      </div>
      <div className="w-[90%] md:w-2/3 m-auto">
        <DailyGrid chosenDay={chosenDay} />
      </div>
      <div className="flex justify-center">
        <HourlySection response={response} />
      </div>
    </div>
  );
}

export default Day;
