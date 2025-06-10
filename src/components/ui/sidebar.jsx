"use client";

import Link from "next/link";
import { Home, BedDouble, Users, CalendarDays } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="h-screen bg-amber-700 text-white p-4 flex flex-col space-y-6">
      <h2 className="text-2xl font-bold">Royal Palms Admin</h2>
      <nav className="flex flex-col space-y-4 mt-8">
        <Link href="/dashboard" className="flex items-center space-x-2 hover:bg-amber-500 p-2 rounded">
          <Home size={20} />
          <span>Dashboard</span>
        </Link>
        <Link href="/rooms" className="flex items-center space-x-2 hover:bg-amber-500 p-2 rounded">
          <BedDouble size={20} />
          <span>Bookings</span>
        </Link>
        <Link href="/bookings" className="flex items-center space-x-2 hover:bg-amber-500 p-2 rounded">
          <CalendarDays size={20} />
          <span>Rooms</span>
        </Link>
        <Link href="/gallery" className="flex items-center space-x-2 hover:bg-amber-500 p-2 rounded">
          <Users size={20} />
          <span>Gallery</span>
        </Link>
        
      </nav>
    </div>
  );
};

export default Sidebar;