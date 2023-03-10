import { ResponseType } from "@/typings";
import { useRef, useState } from "react";
import HourlyCard from "./HourlyCard";

import { GoChevronLeft, GoChevronRight } from "react-icons/go";

function HourlySection({ response }: { response: ResponseType }) {
  const todayHours = response.forecast.forecastday[0].hour;

  const rowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState(false);

  function handleClick(direction: "left" | "right") {
    setIsMoved(true);

    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth + 60
          : scrollLeft + clientWidth - 60;

      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  }

  return (
    <div className="w-[85%] md:w-2/3 space-y-3">
      <h6 className="text-2xl text-center">Hourly Forecast</h6>

      <div className="relative group">
        <GoChevronLeft
          onClick={() => handleClick("left")}
          className={`absolute top-0 bottom-0 left-0 z-40
          m-auto h-8 w-6 cursor-pointer opacity-0 transition 
          hover:scale-110 group-hover:opacity-100 ${!isMoved && "hidden"}`}
        />

        <div
          ref={rowRef}
          className="flex space-x-1 overflow-x-scroll  scrollbar-hide"
        >
          {todayHours.map((hour) => {
            return <HourlyCard todayHour={hour} />;
          })}
        </div>

        <GoChevronRight
          onClick={() => handleClick("right")}
          className="absolute top-0 bottom-0 right-0 z-40
        m-auto h-8 w-6 cursor-pointer opacity-0 transition 
        hover:scale-110 group-hover:opacity-100"
        />
      </div>
    </div>
  );
}

export default HourlySection;
