import Card from "./Card";
import type { Cat } from "@/types";

export default function Carousel({ items }: { items: Cat[] }) {
  return (
    <div className="w-full mt-4 flex overflow-x-scroll">
      {items.map((item) => (
        <Card item={item} key={item.id} classNames="w-1/4 mr-4 mb-2"></Card>
      ))}
    </div>
  );
}
