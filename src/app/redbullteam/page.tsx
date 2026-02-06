"use client"
import React from 'react';

const drivers = [
  {
    name: "Max",
    lastName: "Verstappen",
    image: "https://a.storyblok.com/f/250901/720x1210/73ddd41381/max-verstappen.png",
    id: "max"
  },
  {
    name: "Isack",
    lastName: "Hadjar",
    image: "https://a.storyblok.com/f/250901/720x1210/6ebd514492/isack-hadjar.png",
    id: "isack"
  }
];

export default function RedbullTeamPage() {
  return (
    <div className="w-full bg-[#00192d] text-white">
      {/* Hero Section */}
      <div className="relative h-screen w-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover opacity-80"
            src="https://img.redbull.com/images/c_fill,g_auto,w_2200,h_1500/f_auto,q_auto/redbullcom/2025/4/24/d3wmw0ovmbukmjsqduhr/f1-grand-prix-saudi-arabia-qualifying-oracle-red-bull-racing"
            alt="Redbull Team and pit stop"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <h1 className='absolute bottom-30 left-30 z-10 text-[8rem] md:text-[10rem] font-black text-white tracking-tighter drop-shadow-lg leading-none'>
          The Team
        </h1>
      </div>

      {/* Drivers Section */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-5xl font-bold mb-12 tracking-wide pl-4">Drivers</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 relative min-h-[800px]">
          {/* Divider Line (Desktop only) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/20 -translate-x-1/2" />

          {drivers.map((driver) => (
            <div key={driver.id} className="relative group flex flex-col items-center justify-end pt-10 pb-20 border-b md:border-b-0 border-white/20 last:border-b-0 h-full">

              {/* Number Graphic Background */}
              <div className="absolute top-20 left-10 md:left-20 text-[10rem] md:text-[12rem] font-black italic tracking-tighter opacity-100 select-none pointer-events-none"
                style={{
                  fontStyle: 'italic',
                  lineHeight: 0.8
                }}>
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-red-600 to-red-600 block transform -skew-x-12"
                  style={{
                    WebkitTextStroke: '2px white',
                    textShadow: '4px 4px 0px rgba(0,0,0,0.5)'
                  }}>
                </span>
              </div>

              {/* Driver Image */}
              <div className="relative z-10 w-full max-w-sm aspect-[3/4] flex items-end justify-center mt-auto">
                <img
                  src={driver.image}
                  alt={`${driver.name} ${driver.lastName}`}
                  className="w-full h-full object-contain object-bottom transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Button */}
              <div className="mt-8 z-20">
                <button className="bg-[#1f2836] hover:bg-[#2a3649] text-white px-8 py-3 rounded-full text-sm font-semibold tracking-wider transition-colors border border-white/10 uppercase cursor-pointer">
                  View Profile
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}