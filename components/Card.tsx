import type { TagProps, Cat } from "@/types";
import Link from "next/link";
import { useState } from "react";
import Tag from "./Tag";

export default function Card({
  item,
  classNames,
  tag,
}: {
  item: Cat;
  classNames: string;
  tag?: TagProps;
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Link
      href={`/cats/${item.slug}`}
      className={`${classNames} aspect-video cursor-pointer rounded-lg relative border-2 border-transparent hover:border-blue-100`}
    >
      {!isLoaded && (
        <div className="absolute w-full h-full bg-slate-500 animate-pulse rounded-lg"></div>
      )}

      <img
        src={item.image}
        alt="image"
        className="rounded-md w-full h-full object-cover"
        onLoad={() => setIsLoaded(true)}
      />

      {tag && <Tag {...tag} />}
      {/* </div> */}
    </Link>
  );
}
