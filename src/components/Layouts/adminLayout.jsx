"use client";

import Sidebar from "@/components/ui/Sidebar.jsx";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64">
        <Sidebar />
      </div>

      
      <div className="flex-1 bg-gray-100 p-6">
       
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;

