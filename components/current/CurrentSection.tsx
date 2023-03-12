import { ResponseType } from "@/typings";
import Image from "next/image";
import Link from "next/link";

function CurrentSection({ response }: { response: ResponseType }) {
  const current = response.current;
  return (
    <Link href="/current" className="flex flex-col items-center space-y-5 text-center">
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
    </Link>
  );
}

export default CurrentSection;
