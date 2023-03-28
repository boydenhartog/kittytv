import type { Message } from "@/store/ChatStore";

export default function Message({ message }: { message: Message }) {
  return message.user === "cat" ? (
    <div className="w-full flex">
      <div className="flex bg-indigo-500 p-2 rounded-md mb-2 w-5/6">
        <div className="text-lg flex-1">{message.message}</div>
        <div className="text-xs ml-4 self-end">{message.time}</div>
      </div>
    </div>
  ) : (
    <div className="w-full flex justify-end">
      <div className="flex bg-blue-500 p-2 rounded-md mb-2 w-5/6">
        <div className="text-xs mr-4 self-end">{message.time}</div>
        <div className="text-lg flex-1">{message.message}</div>
      </div>
    </div>
  );
}
