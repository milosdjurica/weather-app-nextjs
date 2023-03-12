import CurrentGrid from "@/components/current/CurrentGrid";
import CurrentSection from "@/components/current/CurrentSection";
import Loading from "@/components/layout/Loading";
import { useMyStore } from "@/store";
import React from "react";

function Current() {
  const response = useMyStore((state) => state.response);
  if (!response) return <Loading />;

  const current = response.current;

  return (
    <div>
      <CurrentSection response={response} />
      <CurrentGrid current={current} />
    </div>
  );
}

export default Current;
