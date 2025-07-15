// /store/chatStore.ts
import { create } from 'zustand';

interface Message {
  id: string;
  content: string;
  sender: string;
  timestamp: string;
}

interface ChatState {
  messages: Message[];
  typing: boolean;
  addMessage: (message: Message) => void;
  setTyping: (isTyping: boolean) => void;
}

export const useChatStore = create<ChatState>((set) => ({
  messages: [],
  typing: false,

  addMessage: (message) =>
    set((state) => ({
      messages: [...state.messages, message],
    })),

  setTyping: (isTyping) => set({ typing: isTyping }),
}));
