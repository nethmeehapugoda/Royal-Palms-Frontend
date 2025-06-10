{/*import React from 'react'
import Navbar from '../common/Navbar'

export default function MainLayout({children}) {
    return(
        <div>
           
            {children}
            </div>
    )
}*/}



// MainLayout.jsx or MainLayout.tsx
import React from 'react';

const MainLayout = ({ children }) => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(/bg1.jpg)' }}
    >
      {/* Optional overlay for contrast */}
      <div className="bg-white/10 min-h-screen">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;