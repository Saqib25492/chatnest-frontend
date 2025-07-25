// /components/chat/MessageInput.tsx
'use client';

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

export default function MessageInput({ onSend }: { onSend: (msg: string) => void }) {
  const [value, setValue] = useState('');

  const handleSend = () => {
    if (value.trim()) {
      onSend(value.trim());
      setValue('');
    }
  };

  return (
    <div className="flex items-center gap-2 p-2 border-t bg-white">
      <Textarea
        placeholder="Type your message..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        rows={1}
        className="resize-none bg-gradient-to-br from-purple-200 to-indigo-100"
      />
      <Button onClick={handleSend}>Send</Button>
    </div>
  );
}
