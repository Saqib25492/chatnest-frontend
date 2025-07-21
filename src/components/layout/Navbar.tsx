'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="w-full px-4 py-3 border-b bg-white flex items-center justify-between">
      
      {/* Logo */}
      <div className="text-xl font-bold text-primary">
        ChatNest
      </div>

      {/* Center Options */}
      <div className="hidden md:flex justify-around gap-8 text-sm font-medium text-muted-foreground">
        <Link href="#" className="hover:text-primary transition">Search</Link>
        <Link href="#" className="hover:text-primary transition">Chats</Link>
        <Link href="#" className="hover:text-primary transition">Stories</Link>
      </div>

      {/* Right End */}
      <div className="flex items-center gap-4">

        {/* Replace with user menu if logged in */}
        <Link href="/login" className="hidden md:inline-block">
          <Button className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold px-4 py-2 rounded-xl shadow-md transition">
            Sign In / Sign Up
          </Button>
        </Link>

        {/* Optional Hamburger for mobile */}
        <button className="md:hidden p-2 rounded hover:bg-gray-200">
          <Menu className="w-5 h-5" />
        </button>

      </div>
    </nav>
  );
}
