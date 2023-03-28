import Button from "@/components/Button";
import { useState } from "react";

const CATEGORIES = ["Calico", "Fat", "Funny", "Asian"];

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState();
  function onClick() {}

  return (
    <div className="w-full flex">
      <Button active={!activeCategory}>All</Button>

      {CATEGORIES.map((category) => (
        <Button key={category} active={activeCategory === category}>
          {category}
        </Button>
      ))}
    </div>
  );
}
