import Carousel from "@/components/Carousel";
import Categories from "@/components/Categories";
import Card from "@/components/Card";
import axios from "axios";
import useSWR from "swr";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export default function Home() {
  const { data, error, isLoading } = useSWR("/api/cats", fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <Categories />

      <h2 className="text-4xl mt-8 font-bold">Live right now!</h2>
      <div className="w-full flex">
        <Card
          classNames="w-3/5 mt-4"
          item={data[0]}
          tag={{ tag: "Live", description: "xX_BijbelGirl_Xx" }}
        />
      </div>

      <h2 className="text-xl mt-8 font-semibold">Recommended for you</h2>
      <Carousel items={data} />

      <h2 className="text-xl mt-8 font-semibold">Trending</h2>
      <Carousel items={data} />
    </>
  );
}
