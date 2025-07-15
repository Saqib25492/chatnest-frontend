'use client';

export default function Navbar() {
  return (
    <nav className="h-14 px-6 flex items-center justify-between border-b bg-background shadow-sm">
      <h1 className="font-semibold text-lg">ChatNest</h1>
      <div>
        {/* Future space for settings / profile */}
      </div>
    </nav>
  );
}
