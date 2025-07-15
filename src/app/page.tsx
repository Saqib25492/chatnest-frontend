'use client';

import { useState, useEffect } from 'react';
import ChatSidebar from '@/components/chat/ChatSidebar';
import ChatWindow from '@/components/chat/ChatWindow';
import MessageInput from '@/components/chat/MessageInput';
import { Button } from '@/components/ui/button';

const mockUsers = [
  { id: 'alice', name: 'Alice' },
  { id: 'bob', name: 'Bob' },
  { id: 'charlie', name: 'Charlie' },
];

export default function ChatPage() {
  const [activeUser, setActiveUser] = useState<{ id: string; name: string } | null>(mockUsers[0]);
  const [messages, setMessages] = useState([
    { id: '1', content: 'Hello!', sender: 'other' },
    { id: '2', content: 'Hi! How are you?', sender: 'me' },
  ]);
  const [typing] = useState(false);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sendMessage = (msg: string) => {
    setMessages((prev) => [
      ...prev,
      { id: Date.now().toString(), content: msg, sender: 'me' },
    ]);
  };

  // If mobile and no chat selected, show sidebar as full screen
  if (isMobile && !activeUser) {
    return (
      <ChatSidebar
        activeUser=""
        onSelectUser={(userId) => {
          const user = mockUsers.find((u) => u.id === userId);
          if (user) setActiveUser(user);
        }}
      />
    );
  }

  // If mobile and chat selected, show only chat window
  if (isMobile && activeUser) {
    return (
      <div className="flex flex-col h-screen">
        <ChatWindow
          messages={messages}
          typing={typing}
          activeUserName={activeUser.name}
          onBack={() => setActiveUser(null)}

        />
        <MessageInput onSend={sendMessage} />
      </div>
    );
  }

  // Desktop layout
  return (
    <div className="flex h-screen">
      <ChatSidebar
        activeUser={activeUser?.id || ''}
        onSelectUser={(userId) => {
          const user = mockUsers.find((u) => u.id === userId);
          if (user) setActiveUser(user);
        }}
      />

      <div className="flex flex-col flex-1">
        <ChatWindow
          messages={messages}
          typing={typing}
          activeUserName={activeUser?.name || ''}
        />
        <MessageInput onSend={sendMessage} />
      </div>
    </div>
  );
}
