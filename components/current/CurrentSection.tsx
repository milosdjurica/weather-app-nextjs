import { useStore } from "@/store";
import Image from "next/image";
import CurrentGrid from "./CurrentGrid";

function CurrentSection() {
  const response = useStore((state) => state.response);
  if (response === null) return null;

  const current = response.current;

  return (
    <div className="flex flex-col items-center space-y-5">
      <h1 className="text-5xl font-bold">{response.location.name}</h1>
      <h5 className="text-2xl">
        {response.location.country} {response.location.localtime.split(" ")[1]}
      </h5>
      <h2 className="text-6xl font-semibold">{current.temp_c}°C</h2>
      <div className="flex items-center font-semibold">
        <p className="text-xl">{current.condition.text} </p>
        <Image
          width={40}
          height={40}
          priority
          src={`https:${current.condition.icon}`}
          alt={current.condition.text}
        />
      </div>
      <div className="flex space-x-4">
        <CurrentGrid current={current} />
        {/* <p className="text-md font-semibold">Humidity: {current.humidity}%</p>
        <p className="text-md font-semibold">
          Precipitation: {current.precip_mm}mm
        </p> */}
      </div>
    </div>
  );
}

export default CurrentSection;
