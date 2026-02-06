"use client"
import React from 'react';
import Link from 'next/link';


const drivers = [
    {
        name: "Max Verstappen",
        role: "Driver",
        image: "https://a.storyblok.com/f/250901/720x1210/73ddd41381/max-verstappen.png",
        stats: [
            "4x World Champion",
            "71x Grand Prix Winner",
            "50x Pole Positions"
        ]
    },
    {
        name: "Isack Hadjar",
        role: "Junior Driver",
        image: "https://a.storyblok.com/f/250901/720x1210/6ebd514492/isack-hadjar.png",
        stats: [] // No stats shown in reference
    }
];

function Team() {
    return (
        <section className="min-h-screen w-full bg-[#00192d] py-20 px-4 flex flex-col items-center justify-center overflow-hidden">
            {/* Cards Container */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center justify-center w-full max-w-6xl perspective-[2000px]">
                {drivers.map((driver, index) => (
                    <div
                        key={driver.name}
                        className={`
                        relative w-full md:w-[400px] h-[600px] rounded-2xl overflow-hidden 
                        bg-linear-to-b from-neutral-800 to-black shadow-2xl 
                        transform transition-transform duration-500 hover:scale-[1.02] hover:z-10
                        ${index === 0 ? 'md:rotate-y-[5deg] md:-translate-x-4' : 'md:-rotate-y-[5deg] md:translate-x-4'}
                    `}
                        style={{
                            transformStyle: 'preserve-3d',
                        }}
                    >
                        {/* Driver Image */}
                        <img
                            src={driver.image}
                            alt={driver.name}
                            className="w-full h-full object-cover object-top opacity-90"
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-transparent to-transparent" />

                        {/* Number Badge */}
                        <div className="absolute top-6 right-6">
                            <div className="relative">
                                {/* Stylized Number Box */}
                                <div className="text-white text-6xl font-black italic tracking-tighter skew-x-[-10deg]">
                                    <span className="text-red-600 drop-shadow-[0_2px_0_rgba(255,255,255,0.8)]"
                                        style={{ textShadow: "2px 2px 0px white" }}>
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="absolute bottom-10 left-8 right-8 text-white z-10">
                            <h3 className="text-5xl font-black uppercase leading-[0.9] tracking-tight mb-4 drop-shadow-md">
                                {driver.name.split(' ').map((n, i) => (
                                    <span key={i} className="block">{n}</span>
                                ))}
                            </h3>

                            <div className="space-y-1">
                                {driver.stats.map((stat, i) => (
                                    <p key={i} className="text-lg font-bold text-neutral-200">
                                        {stat}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* CTA Button */}
            <Link href="/redbullteam" className="mt-16 px-10 py-4 bg-[#e10600] text-white text-lg font-bold rounded-full hover:bg-red-700 transition-colors shadow-lg uppercase tracking-wide">
                Meet the Team
            </Link>
        </section>
    )
}

export default Team;