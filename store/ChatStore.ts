import { create } from "zustand";
import { format } from "date-fns";

export interface Message {
  id: number;
  user: string;
  message: string;
  time: string;
}

export interface ChatStoreState {
  messages: Message[];
  addMessage: (msg: Omit<Message, "id">) => void;
  idCounter: number;
}

export const useChatStore = create<ChatStoreState>((set) => ({
  messages: [
    {
      id: 1,
      user: "cat",
      message: "Hey there...",
      time: format(new Date(), "HH:mm"),
    },
  ],
  idCounter: 1,
  addMessage: (msg: Omit<Message, "id">) => {
    set((state) => ({
      messages: [...state.messages, { ...msg, id: state.idCounter + 1 }],
      idCounter: (state.idCounter += 1),
    }));
  },
}));
