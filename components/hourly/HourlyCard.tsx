import { HourlyPrediction } from "@/typings";
import Image from "next/image";

function HourlyCard({ todayHour }: { todayHour: HourlyPrediction }) {
  return (
    <div className="text-center space-y-1 min-w-[70px] md:min-w-[100px] 
    flex flex-col items-center border border-black">
      <p>{todayHour.time.split(" ")[1]}</p>
      <Image
        width={40}
        height={40}
        priority
        src={`https:${todayHour.condition.icon}`}
        alt={todayHour.condition.text}
      />

      <p className="text-lg">{Math.round(todayHour.temp_c)}°</p>
    </div>
  );
}

export default HourlyCard;
