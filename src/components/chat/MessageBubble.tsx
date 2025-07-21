// /components/chat/MessageBubble.tsx
'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils'; // optional, shadcn's cn

interface MessageBubbleProps {
  content: string;
  sender: string;
}

export default function MessageBubble({ content, sender }: MessageBubbleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        'p-3 max-w-xs rounded-2xl text-sm my-1',
        sender === 'me'
          ? 'bg-[#a40a76] text-white self-end'
          : 'bg-white text-foreground self-start'
      )}
    >
      {content}
    </motion.div>
  );
}
