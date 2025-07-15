'use client';

import { ArrowLeft, Phone, Video } from 'lucide-react';
import MessageBubble from './MessageBubble';
import TypingIndicator from './TypingIndicator';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

interface ChatWindowProps {
  messages: { id: string; content: string; sender: string }[];
  typing?: boolean;
  activeUserName: string;
  onBack?: () => void;  // For mobile navigation
}

export default function ChatWindow({
  messages,
  typing,
  activeUserName,
  onBack,
}: ChatWindowProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex flex-col flex-1 bg-muted relative">

      {/* Chat Header */}
      <div className="sticky top-0 bg-white border-b px-4 py-3 font-medium shadow-sm z-10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {isMobile && onBack && (
            <Button variant="ghost" size="icon" onClick={onBack}>
              <ArrowLeft className="w-5 h-5" />
            </Button>
          )}
          <span className="font-semibold text-base truncate">{activeUserName}</span>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Phone className="w-5 h-5 text-muted-foreground" />
          </Button>
          <Button variant="ghost" size="icon">
            <Video className="w-5 h-5 text-muted-foreground" />
          </Button>
        </div>
      </div>

      {/* Message Area */}
      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
        {messages.map((msg) => (
          <MessageBubble key={msg.id} sender={msg.sender} content={msg.content} />
        ))}

        {typing && <TypingIndicator />}
      </div>
    </div>
  );
}
