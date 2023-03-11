import { HourlyPrediction } from "@/typings";
import Image from "next/image";

function HourlyCard({ todayHour }: { todayHour: HourlyPrediction }) {
  return (
    <div
      className="text-center space-y-1 min-w-[80px]
    flex flex-col items-center shadow-md shadow-blue-900 rounded-xl"
    >
      <p className="font-semibold">{todayHour.time.split(" ")[1]}</p>
      <Image
        width={40}
        height={40}
        priority
        src={`https:${todayHour.condition.icon}`}
        alt={todayHour.condition.text}
      />

      <p className="text-lg font-semibold">{Math.round(todayHour.temp_c)}°</p>
    </div>
  );
}

export default HourlyCard;
