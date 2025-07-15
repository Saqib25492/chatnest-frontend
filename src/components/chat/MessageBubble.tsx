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
        'p-3 max-w-xs rounded-xl text-sm my-1',
        sender === 'me'
          ? 'bg-blue-600 text-white self-end'
          : 'bg-muted text-foreground self-start'
      )}
    >
      {content}
    </motion.div>
  );
}
