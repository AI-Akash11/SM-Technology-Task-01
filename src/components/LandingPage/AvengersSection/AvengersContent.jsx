import React from 'react';

const AvengersContent = ({ activeTab, setActiveTab }) => {
  const tabs = ['DESIGN TEAM', 'DEVELOPMENT TEAM'];

  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-8">
      <div className="max-w-[600px]">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-black/10 rounded-full mb-8">
          <span className="w-1.5 h-1.5 bg-black rounded-full shadow-[0_0_8px_rgba(0,0,0,0.5)] animate-pulse"></span>
          <span className="text-[10px] md:text-[11px] font-bold tracking-[0.2em] font-heading uppercase text-black">
            AVENGERS
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-[72px] leading-[1.1] font-heading font-semibold text-black tracking-[-0.02em]">
          Meet the world's <br className="hidden md:block" /> smart experts.
        </h2>
      </div>

      <div className="flex bg-white p-1 rounded-full border border-black/5">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-8 py-3.5 rounded-full text-[11px] font-bold tracking-widest transition-all duration-500 uppercase font-heading ${
              activeTab === tab
                ? 'bg-black text-white shadow-lg'
                : 'bg-transparent text-black/50 hover:text-black'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AvengersContent;
