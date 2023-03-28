import type { ReactElement, ReactNode } from "react";
export default function Button<T extends ReactNode>({
  children,
  active,
  ...rest
}: {
  children: T;
  active?: boolean;
}) {
  return (
    <button
      {...rest}
      className={`${
        active ? "bg-purple-500 border-blue-100" : "bg-indigo-500"
      } mr-4 py-2 px-6  rounded-lg border-2 border-transparent hover:border-blue-100`}
    >
      {children}
    </button>
  );
}
