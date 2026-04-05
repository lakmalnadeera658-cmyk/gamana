import React from 'react';
import { Camera, MapPin, ArrowRight } from 'lucide-react';

export const ListVehicleScreen: React.FC = () => {
  return (
    <div className="px-6 pb-32 max-w-4xl mx-auto">
      {/* Header & Stepper */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight mb-4">List Vehicle</h1>
        <p className="text-on-surface-variant text-lg max-w-xl">
          Share your journey with others. Provide the technical details and high-quality visuals of your transport.
        </p>
        <div className="mt-8 flex gap-2">
          <div className="h-1.5 flex-1 rounded-full bg-primary"></div>
          <div className="h-1.5 flex-1 rounded-full bg-primary-fixed"></div>
          <div className="h-1.5 flex-1 rounded-full bg-primary-fixed"></div>
        </div>
        <div className="mt-2 flex justify-between text-xs font-bold text-primary uppercase tracking-widest">
          <span>Specifications</span>
          <span className="text-outline-variant">Location & Pricing</span>
          <span className="text-outline-variant">Verification</span>
        </div>
      </div>

      <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
        {/* Section 1: The Basics */}
        <section className="space-y-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-sm">1</div>
            <h2 className="text-2xl font-bold text-on-surface">Vehicle Specifications</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-bold text-on-surface-variant ml-1">Brand</label>
              <input className="w-full px-5 py-4 bg-surface-container-low border-none rounded-xl focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all duration-300 placeholder:text-outline-variant" placeholder="e.g. Toyota" type="text" />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-bold text-on-surface-variant ml-1">Model</label>
              <input className="w-full px-5 py-4 bg-surface-container-low border-none rounded-xl focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all duration-300 placeholder:text-outline-variant" placeholder="e.g. Land Cruiser" type="text" />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-bold text-on-surface-variant ml-1">Manufacturing Year</label>
              <select className="w-full px-5 py-4 bg-surface-container-low border-none rounded-xl focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all duration-300 appearance-none">
                <option>2024</option>
                <option>2023</option>
                <option>2022</option>
                <option>2021</option>
                <option>2020</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-bold text-on-surface-variant ml-1">Fuel Type</label>
              <div className="flex gap-2">
                <button className="flex-1 py-3 px-4 rounded-full bg-primary text-on-primary text-sm font-bold transition-all" type="button">Petrol</button>
                <button className="flex-1 py-3 px-4 rounded-full bg-surface-container-high text-on-surface-variant text-sm font-bold hover:bg-surface-container-highest transition-all" type="button">Diesel</button>
                <button className="flex-1 py-3 px-4 rounded-full bg-surface-container-high text-on-surface-variant text-sm font-bold hover:bg-surface-container-highest transition-all" type="button">Electric</button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Visuals */}
        <section className="space-y-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-sm">2</div>
            <h2 className="text-2xl font-bold text-on-surface">Visual Identity</h2>
          </div>
          <div className="relative group cursor-pointer">
            <div className="w-full aspect-[16/9] rounded-3xl border-2 border-dashed border-outline-variant bg-surface-container-lowest flex flex-col items-center justify-center overflow-hidden transition-all duration-500 group-hover:border-primary/40 group-hover:bg-primary-fixed/10">
              <div className="text-center p-8">
                <div className="w-16 h-16 bg-primary-fixed rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500">
                  <Camera className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-on-surface mb-2">Upload Vehicle Photo</h3>
                <p className="text-on-surface-variant text-sm max-w-xs mx-auto">
                  High-resolution exterior shots increase booking rates by 40%. PNG or JPG, max 10MB.
                </p>
              </div>
            </div>
            <div className="absolute -z-10 inset-0 translate-x-4 translate-y-4 rounded-3xl bg-primary-container/10"></div>
          </div>
        </section>

        {/* Section 3: Logistics */}
        <section className="space-y-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-sm">3</div>
            <h2 className="text-2xl font-bold text-on-surface">Pricing & Availability</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 rounded-3xl bg-surface-container-lowest border border-outline-variant/10 space-y-4">
              <label className="block text-sm font-bold text-on-surface-variant">Price Per Day (LKR)</label>
              <div className="relative flex items-center">
                <span className="absolute left-5 font-bold text-primary">රු.</span>
                <input className="w-full pl-14 pr-5 py-5 bg-surface-container-low border-none rounded-2xl text-2xl font-extrabold text-primary focus:ring-2 focus:ring-primary/20" placeholder="12,500" type="number" />
              </div>
              <p className="text-xs text-on-surface-variant font-medium">Recommended price for this model: රු. 10,000 - 15,000</p>
            </div>
            <div className="p-6 rounded-3xl bg-surface-container-lowest border border-outline-variant/10 space-y-4">
              <label className="block text-sm font-bold text-on-surface-variant">Current Location</label>
              <div className="relative">
                <MapPin className="absolute left-5 top-1/2 -translate-y-1/2 text-outline w-5 h-5" />
                <input className="w-full pl-14 pr-5 py-5 bg-surface-container-low border-none rounded-2xl font-bold focus:ring-2 focus:ring-primary/20" placeholder="Colombo, Sri Lanka" type="text" />
              </div>
              <div className="flex items-center gap-2 px-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                <span className="text-xs font-semibold text-primary">Use precise GPS location</span>
              </div>
            </div>
          </div>
        </section>

        {/* Action Area */}
        <div className="pt-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          <button className="w-full md:w-auto px-8 py-4 text-on-surface-variant font-bold hover:bg-surface-container-high rounded-xl transition-all" type="button">
            Cancel & Discard
          </button>
          <button className="w-full md:w-80 bg-primary text-on-primary px-8 py-5 rounded-xl font-bold text-lg shadow-xl shadow-primary/20 flex items-center justify-center gap-3 active:scale-95 transition-all duration-150" type="submit">
            Next Step
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </form>
    </div>
  );
};
