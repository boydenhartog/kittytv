import { Configuration, OpenAIApi } from "openai";
import { useState } from "react";

const configuration = new Configuration({
  organization: "org-rdzCGT1FlSvI6HCjv4KDl3IP",
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export function useChatGPT() {
  // const [messages, setMessages] = useState([]);
  const [isTyping, setTyping] = useState(false);

  async function askResponse(message: string) {
    setTyping(true);

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: message }],
    });

    setTyping(false);

    return response;
  }

  return {
    askResponse,
    isTyping,
  };
}
