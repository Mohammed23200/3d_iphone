import React from 'react'

export const HighLights = () => {
  return (
    <section className="w-full h-screen bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-zinc rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">A17 Pro chip</h3>
            <p className="text-gray-200">Game‑changing chip. Groundbreaking performance.</p>
          </div>
          <div className="p-6 bg-zinc rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Pro camera system</h3>
            <p className="text-gray-200">48MP Main | Ultra Wide | Telephoto</p>
          </div>
          <div className="p-6 bg-zinc rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Titanium design</h3>
            <p className="text-gray-200">Strong. Light. Pro.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
