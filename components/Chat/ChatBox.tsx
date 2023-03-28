import { useChatStore } from "@/store/ChatStore";
import Message from "./Message";
import { DetailedHTMLProps, InputHTMLAttributes, useState } from "react";
import { format } from "date-fns";
import { useChatGPT } from "@/hooks/useChatGPT";

export default function ChatBox() {
  const { messages, addMessage } = useChatStore();
  const [message, setMessage] = useState("");
  const { askResponse, isTyping } = useChatGPT();

  const handleChange = (event: any) => {
    setMessage(event?.target?.value);
  };

  const handleKeyDown = async (
    event: DetailedHTMLProps<
      InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >
  ) => {
    if (event.key === "Enter") {
      addMessage({
        user: "user",
        time: format(new Date(), "HH:mm"),
        message,
      });

      const { data } = await askResponse(message);

      addMessage({
        user: "cat",
        time: format(new Date(), "HH:mm"),
        message: data?.choices[0]?.message?.content as string,
      });

      setMessage("");
    }
  };

  return (
    <div className="p-4 mt-4 flex flex-col h-full w-full">
      <span className="font-bold text-xl mb-4">Chat with Cat</span>
      <div className="flex flex-col flex-1 ">
        <div className="flex-1 flex-col overflow-y-auto">
          {messages.map((message) => (
            <Message key={message.id} message={message} />
          ))}
        </div>
        <input
          type="text"
          className="w-full bg-purple-900 rounded-md p-2 focus:shadow-none"
          placeholder="I love you..."
          value={message}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        ></input>
      </div>
    </div>
  );
}
