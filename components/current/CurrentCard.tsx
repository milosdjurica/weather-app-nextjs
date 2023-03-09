import { ResponseType } from "@/typings";
import Image from "next/image";
import Link from "next/link";
import CurrentGrid from "./CurrentGrid";

type Props = {
  response: ResponseType;
};

function CurrentCard({ response }: Props) {
  const current = response.current;
  return (
    <div
      className="space-y-10 mb-20
    border border-black w-[90%] lg:w-1/2  p-4
    "
    >
      <div className="w-full flex justify-between pb-5 border-b border-black">
        <h1 className="text-xl font-bold">{`${response.location.name} (${response.location.country})`}</h1>
        <p>{`${response.location.localtime.split(" ")[1]}`}</p>
      </div>

      <div className="flex justify-between">
        <h2 className="text-5xl font-bold">
          {`${current.temp_c}°`}
          <span className="text-2xl font-normal">C</span>
        </h2>

        <Image
          width={80}
          height={80}
          priority
          src={`https:${current.condition.icon}`}
          alt={current.condition.text}
          className="max-w-[60px] max-h-[60px]"
        />
      </div>
      <p>{current.condition.text}</p>

      <CurrentGrid current={current} />
      <div className="flex justify-around">
        <Link
          className="px-4 py-2 rounded-lg
          shadow-md shadow-sky-500 hover:scale-105 ease-in duration-200
          "
          href="/"
        >
          See daily
        </Link>
        <Link
          className="px-4 py-2 rounded-lg
          shadow-md shadow-sky-500 hover:scale-105 ease-in duration-200
          "
          href="/"
        >
          See hourly
        </Link>
      </div>
    </div>
  );
}

export default CurrentCard;
