'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils'; // if using classnames helper



const users = [
  { id: 'alice', name: 'Alice' },
  { id: 'bob', name: 'Bob' },
  { id: 'charlie', name: 'Charlie' },
];



export default function ChatSidebar({ activeUser, onSelectUser }) {
  return (
    <aside className="w-64 bg-gray-100 border-r">
      <div className="p-4 font-semibold text-lg">Chats</div>
      <ul>
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
            {user.name}
          </li>
        ))}
      </ul>
    </aside>
  );
}
