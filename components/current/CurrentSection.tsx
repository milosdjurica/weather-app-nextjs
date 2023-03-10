import { ResponseType } from "@/typings";
import Image from "next/image";

function CurrentSection({ response }: { response: ResponseType }) {
  const current = response.current;
  return (
    <div className="flex flex-col items-center space-y-5">
      <h1 className="text-4xl font-bold">{response.location.name}</h1>
      <h5 className="text-lg">
        {response.location.country} {response.location.localtime.split(" ")[1]}
      </h5>

      <h2 className="text-4xl font-semibold">{current.temp_c} °C</h2>
      <div className="flex items-center space-x-4 font-semibold">
        <p className="text-lg">{current.condition.text} </p>
        <Image
          width={40}
          height={40}
          priority
          src={`https:${current.condition.icon}`}
          alt={current.condition.text}
        />
      </div>
      <div className="flex space-x-4">
        <p className="text-md font-semibold">Humidity: {current.humidity}%</p>
        <p className="text-md font-semibold">
          Precipitation: {current.precip_mm}mm
        </p>
      </div>
    </div>
  );
}

export default CurrentSection;
