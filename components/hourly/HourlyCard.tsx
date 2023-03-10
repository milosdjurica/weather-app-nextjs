import { HourlyPrediction } from "@/typings";
import Image from "next/image";

function HourlyCard({ todayHour }: { todayHour: HourlyPrediction }) {
  return (
    <div className="text-center space-y-1">
      <p>{todayHour.time.split(" ")[1]}</p>
      <Image
        width={30}
        height={30}
        priority
        src={`https:${todayHour.condition.icon}`}
        alt={todayHour.condition.text}
      />

      <p className="text-lg">{Math.round(todayHour.temp_c)}°</p>
    </div>
  );
}

export default HourlyCard;
