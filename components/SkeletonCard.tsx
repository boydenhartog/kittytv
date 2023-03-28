export default function Card({ classNames }: { classNames: string }) {
  return (
    <div
      className={`${classNames} bg-slate-500 aspect-video cursor-pointer rounded-lg relative`}
    ></div>
  );
}
