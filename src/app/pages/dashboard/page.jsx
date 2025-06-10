"use client";
{/*import MainLayout from "@/components/Layouts/MainLayout";
import { useEffect, useState } from "react";
import { CalendarDays, Users, BedDouble, CreditCard } from "lucide-react";

const Dashboard = () => {
  const [bookingCount, setBookingCount] = useState(0);
  const [roomCount, setRoomCount] = useState(0);
  const [revenue, setRevenue] = useState(0);
  const [customers, setCustomers] = useState(0);

  useEffect(() => {
    // Replace with real API data later
    setBookingCount(120);
    setRoomCount(40);
    setRevenue(1500000);
    setCustomers(80);
  }, []);

  return (
    <MainLayout>
      <div className="bg-white min-h-screen">
        <div className="max-w-7xl mx-auto p-6 space-y-10">
          <h1 className="text-4xl font-extrabold text-amber-700 tracking-tight">
            Admin Dashboard
          </h1>

          {/* Stats Overview 
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-r from-amber-400 to-amber-700 text-white p-6 rounded-2xl shadow-lg transform transition duration-300 hover:scale-105">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm opacity-80">Bookings</p>
                  <h2 className="text-3xl font-semibold">{bookingCount}</h2>
                </div>
                <CalendarDays className="w-10 h-10 opacity-80" />
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white p-6 rounded-2xl shadow-lg transform transition duration-300 hover:scale-105">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm opacity-80">Rooms Available</p>
                  <h2 className="text-3xl font-semibold">{roomCount}</h2>
                </div>
                <BedDouble className="w-10 h-10 opacity-80" />
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-400 to-orange-600 text-white p-6 rounded-2xl shadow-lg transform transition duration-300 hover:scale-105">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm opacity-80">Revenue</p>
                  <h2 className="text-3xl font-semibold">
                    LKR {revenue.toLocaleString()}
                  </h2>
                </div>
                <CreditCard className="w-10 h-10 opacity-80" />
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-500 to-amber-800 text-white p-6 rounded-2xl shadow-lg transform transition duration-300 hover:scale-105">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm opacity-80">Customers</p>
                  <h2 className="text-3xl font-semibold">{customers}</h2>
                </div>
                <Users className="w-10 h-10 opacity-80" />
              </div>
            </div>
          </div>

          {/* Recent Bookings 
          <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-200">
            <h2 className="text-2xl font-bold text-amber-700 mb-4">
              Recent Bookings
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-100 text-gray-950 uppercase text-xs tracking-wider border-b">
                  <tr>
                    <th className="py-3 px-5">Customer</th>
                    <th className="py-3 px-5">Room Type</th>
                    <th className="py-3 px-5">Check-In</th>
                    <th className="py-3 px-5">Check-Out</th>
                  </tr>
                </thead>
                <tbody className="text-gray-950"></tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;*/}




//new code



export default function AdminDashboard() {
  return (
    <div className="flex min-h-screen bg-white-80">
      
      
      <aside className="w-64 bg-amber-100 p-6 shadow-xl space-y-8">
        <div className="text-2xl font-bold text-amber-700 font-serif">
          Admin Panel
        </div>
        <nav className="space-y-4 text-gray-700">
          <a href="#" className="block hover:text-amber-600"> 🏠Dashboard</a>
          <a href="#" className="block hover:text-amber-600">📅Bookings</a>
          <a href="#" className="block hover:text-amber-600">🛏️Rooms</a>
          <a href="#" className="block hover:text-amber-600">🖼️Gallery</a>
          
         
        </nav>
        
      </aside>

      <main className="flex-1 p-6">
        <div className="max-w-7xl mx-auto space-y-8">
          
         
          <section className="bg-amber-50 py-10 rounded-2xl text-center">
            <h1 className="text-5xl font-extrabold text-amber-700 font-serif drop-shadow-md mb-6">
              Hotel Admin Dashboard
            </h1>
          </section>

          {/* Booking Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card title="Total Bookings" value="1,245" />
            <Card title="Active Guests" value="87" />
            <Card title="Available Rooms" value="34" />
            <Card title="Revenue This Month" value="$42,500" />
          </div>

          {/* Recent Bookings */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Bookings</h2>
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-left text-gray-500 border-b">
                  <th className="py-2">Guest</th>
                  <th className="py-2">Room</th>
                  <th className="py-2">Check-In</th>
                  <th className="py-2">Check-Out</th>
                  <th className="py-2">Status</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <Row guest="Tharanga Denuwala" room="Deluxe Room" inDate="May 20" outDate="May 25" status="Confirmed" />
                <Row guest="Gayan Perera" room="Premium Room" inDate="May 19" outDate="May 22" status="Pending" />
              </tbody>
            </table>
          </div>

          {/* Room Availability */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Room Availability</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              <RoomCard number="101" status="Available" />
              <RoomCard number="102" status="Occupied" />
              <RoomCard number="103" status="Available" />
              <RoomCard number="104" status="Pending" />
              <RoomCard number="105" status="Available" />
              <RoomCard number="106" status="Occupied" />
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div className="bg-white p-5 rounded-2xl shadow">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-2xl font-semibold text-gray-800">{value}</p>
    </div>
  );
}

function Row({ guest, room, inDate, outDate, status }) {
  const statusColor = {
    Confirmed: "text-green-600",
    Pending: "text-yellow-600",
    Cancelled: "text-red-600",
  }[status] || "text-gray-600";

  return (
    <tr className="border-b">
      <td className="py-2">{guest}</td>
      <td className="py-2">{room}</td>
      <td className="py-2">{inDate}</td>
      <td className="py-2">{outDate}</td>
      <td className={`py-2 font-medium ${statusColor}`}>{status}</td>
    </tr>
  );
}

function RoomCard({ number, status }) {
  const colors = {
    Available: "bg-green-100 text-green-800",
    Occupied: "bg-red-100 text-red-800",
    Pending: "bg-yellow-100 text-yellow-800",
  };

  return (
    <div className={`p-4 rounded-xl text-center font-medium ${colors[status] || 'bg-gray-100 text-gray-800'}`}>
      Room {number}
      <br />
      {status}
    </div>
  );
};




