import { ResponseType } from "@/typings";

type Props = {
  response: ResponseType | null;
};

function HomeCard({ response }: Props) {
  return (
    <div>
      <h1>{response?.location.name}</h1>
      <h2>{response?.location.localtime}</h2>
    </div>
  );
}

export default HomeCard;
