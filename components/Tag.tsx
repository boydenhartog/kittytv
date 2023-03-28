import type { TagProps } from "@/types";

export default function Tag({ tag, description, position }: TagProps) {
  const pos = (position?: string) => {
    if (position === "bottom-right") return "right-2 bottom-2";
    if (position === "top-left") return "left-2 top-2";
    if (position === "top-right") return "right-2 top-2";
    return "left-2 bottom-2";
  };

  return (
    <div
      className={
        pos() +
        " absolute p-2 bg-gradient-to-r from-indigo-500 to-purple-500 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
      }
      role="alert"
    >
      {tag && (
        <span className="flex rounded-full bg-red-500 uppercase px-2 py-1 text-xs font-bold mr-3">
          {tag}
        </span>
      )}

      {description && (
        <span className="font-semibold mr-2 text-left flex-auto">
          {description}
        </span>
      )}

      <svg
        className="fill-current opacity-75 h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
      </svg>
    </div>
  );
}
