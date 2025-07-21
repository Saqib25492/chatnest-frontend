'use client';

import { cn } from '@/lib/utils';
import { MessageSquare, Camera } from 'lucide-react';
import { useState } from 'react';

const users = [
  { id: 'alice', name: 'Alice', lastMessage: 'See you soon!' },
  { id: 'bob', name: 'Bob', lastMessage: 'Let’s catch up later.' },
  { id: 'charlie', name: 'Charlie', lastMessage: 'Good night!' },
];

type ChatSidebarProps = {
  activeUser: string;
  onSelectUser: (userId: string) => void;
  isMobile?: boolean; // optional mobile prop
};

export default function ChatSidebar({
  activeUser,
  onSelectUser,
  isMobile = false,
}: ChatSidebarProps) {
  const [view, setView] = useState<'chats' | 'stories'>('chats');

  return (
    <aside
      className={cn(
        'bg-gray-100 border-r flex flex-col bg-gradient-to-bl from-purple-200 to-indigo-100',
        isMobile ? 'w-screen h-[calc(100vh-4rem)]' : 'w-64 h-[calc(100vh-4rem)]'
      )}
    >
      {/* Header with Icons */}
      <div className="flex items-center justify-between px-4 py-2 border-b shadow-sm bg-white">
        <button
          onClick={() => setView('chats')}
          className={cn(
            'p-2 rounded hover:bg-gray-200',
            view === 'chats' ? 'bg-gray-200' : ''
          )}
        >
          <MessageSquare className="w-5 h-5" />
        </button>
        <button
          onClick={() => setView('stories')}
          className={cn(
            'p-2 rounded hover:bg-gray-200',
            view === 'stories' ? 'bg-gray-200' : ''
          )}
        >
          <Camera className="w-5 h-5" />
        </button>
      </div>

      {/* Chats List */}
      {view === 'chats' && (
        <>
          <div className="p-4 font-semibold text-lg">Chats</div>
          <ul className="flex-1 overflow-y-auto">
            {users.map((user) => (
              <li
                key={user.id}
                className={cn(
                  'flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-200',
                  activeUser === user.id ? 'bg-white font-medium' : ''
                )}
                onClick={() => onSelectUser(user.id)}
              >
                <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center text-white uppercase text-sm">
                  {user.name[0]}
                </div>
                <div className="flex flex-col">
                  <span>{user.name}</span>
                  <span className="text-xs text-gray-500 truncate w-40">
                    {user.lastMessage}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}

      {/* Stories Placeholder */}
      {view === 'stories' && (
        <div className="p-4 text-center text-gray-500">Stories coming soon...</div>
      )}
    </aside>
  );
}
