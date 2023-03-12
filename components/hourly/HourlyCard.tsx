import { useMyStore } from "@/store";
import { HourlyPrediction } from "@/typings";
import Image from "next/image";
import Link from "next/link";

function HourlyCard({
  pickedHour,
  index,
}: {
  pickedHour: HourlyPrediction;
  index: number;
}) {
  const [response, daySelected, updateHourSelected] = useMyStore((state) => [
    state.response,
    state.daySelected,
    state.updateHourSelected,
  ]);

  if (!response) return null;

  const urlDate = response?.forecast.forecastday[daySelected].date;
  const urlTime =
    response?.forecast.forecastday[daySelected].hour[index].time.split(" ")[1];
  const redirectToUrl = `/${urlDate}/${urlTime}`;

  return (
    <Link
      onClick={() => updateHourSelected(index)}
      href={redirectToUrl}
      className="text-center space-y-1 min-w-[80px]
    flex flex-col items-center shadow-md shadow-blue-900 rounded-xl"
    >
      <p className="font-semibold">{pickedHour.time.split(" ")[1]}</p>
      <Image
        width={40}
        height={40}
        priority
        src={`https:${pickedHour.condition.icon}`}
        alt={pickedHour.condition.text}
      />

      <p className="text-lg font-semibold">{Math.round(pickedHour.temp_c)}°</p>
    </Link>
  );
}

export default HourlyCard;
