// /hooks/useSocket.ts
import { useEffect } from 'react';
import { getSocket } from '@/lib/socket';
import { useChatStore } from '@/store/chatStore';

export const useSocket = () => {
  const addMessage = useChatStore((s) => s.addMessage);
  const setTyping = useChatStore((s) => s.setTyping);

  useEffect(() => {
    const socket = getSocket();

    socket.on('connect', () => {
      console.log('Connected to socket server');
    });

    socket.on('message', (data) => {
      addMessage(data);
    });

    socket.on('typing', (status) => {
      setTyping(status);
    });

    return () => {
      socket.disconnect();
    };
  }, [addMessage, setTyping]);
};
