import Head from "next/head";
import CurrentSection from "@/components/current/CurrentSection";
import DailySection from "@/components/daily/DailySection";
import HourlySection from "@/components/hourly/HourlySection";
import { useMyStore } from "@/store";
import Loading from "@/components/layout/Loading";

export default function Home() {
  const response = useMyStore((state) => state.response);

  if (!response) {
    return <Loading />;
  }

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* //! I could use useMyStore from zustand in every component
            but since i am using response data in every component 
            and project is small i didn't want to change it.
            It is faster this way and has less code.*/}
      <CurrentSection response={response} />
      <HourlySection response={response} />
      <DailySection response={response} />
    </>
  );
}
