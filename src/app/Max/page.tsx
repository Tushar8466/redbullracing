import React from 'react'

function page() {
    return (
        <div className='relative h-screen w-screen overflow-hidden bg-[#00192d]'>
            <div className='absolute inset-0'>
                <img
                    src="https://img.redbull.com/images/c_fill,g_auto,w_1700,h_1113/q_auto,f_jpg/redbullcom/2026/1/19/jedrdsmhfsrasewnlvei/max-verstappen-2026-oracle-red-bull-racing"
                    alt="Max Verstappen"
                    className="w-full h-full object-cover object-top"
                />
                {/* Gradient Overlay for Blur Effect */}
                <div className="absolute inset-0 bg-linear-to-t from-[#00192d] via-transparent to-transparent opacity-90" />
            </div>

            {/* Text Overlay */}
            <div className="absolute bottom-60 left-10 md:left-20 z-10">
                <h1 className="text-7xl md:text-9xl font-black italic uppercase text-white tracking-tighter drop-shadow-lg">
                    Max <br />
                    <span className="text-red-600">Verstappen</span>
                </h1>
                <div className="flex items-center gap-2 text-white/80 font-bold tracking-wider mt-2 text-lg">
                    <img src="https://flagcdn.com/w40/nl.png" alt="Netherlands" className="w-8 rounded-sm shadow-sm" />
                    <span>Netherlands</span>
                    <span className="text-white/40">•</span>
                    <span>F1</span>
                </div>
            </div>

            {/* Stats Footer */}
            <div className="absolute bottom-0 left-0 right-0 bg-[#0b131b]/90 backdrop-blur-md p-10 md:p-16 z-20 border-t border-white/10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-white max-w-7xl mx-auto">
                    <div>
                        <p className="text-gray-400/80 text-xs font-bold uppercase tracking-widest mb-2">Date of birth</p>
                        <p className="text-xl md:text-2xl font-bold tracking-tight">30 September 1997</p>
                    </div>
                    <div>
                        <p className="text-gray-400/80 text-xs font-bold uppercase tracking-widest mb-2">Place of birth</p>
                        <p className="text-xl md:text-2xl font-bold tracking-tight">Hasselt, Belgium</p>
                    </div>
                    <div>
                        <p className="text-gray-400/80 text-xs font-bold uppercase tracking-widest mb-2">Age</p>
                        <p className="text-xl md:text-2xl font-bold tracking-tight">28</p>
                    </div>
                    <div>
                        <p className="text-gray-400/80 text-xs font-bold uppercase tracking-widest mb-2">Nationality</p>
                        <div className="flex items-center gap-3">
                            <img src="https://flagcdn.com/w40/nl.png" alt="Netherlands" className="w-6 shadow-sm rounded-sm" />
                            <p className="text-xl md:text-2xl font-bold tracking-tight">Netherlands</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page