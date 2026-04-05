import React from 'react';
import { Star, MapPin, Calendar, Zap, Gauge, Armchair, ShieldCheck } from 'lucide-react';
import { Vehicle } from '../types';

interface VehicleDetailsScreenProps {
  vehicle: Vehicle;
}

export const VehicleDetailsScreen: React.FC<VehicleDetailsScreenProps> = ({ vehicle }) => {
  // Mock data for details not in the basic Vehicle type
  const details = {
    rating: 4.9,
    reviews: 128,
    mileage: '4,200 km',
    capacity: '4 Seats',
    description: 'The Porsche Taycan 4S defines the future of electric driving. With its breathtaking acceleration and surgical precision handling, every journey becomes an editorial moment. Equipped with the latest Performance Battery Plus.',
    features: ['Autopilot', 'Panoramic Roof', 'Bose Sound']
  };

  return (
    <div className="px-6 pb-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
        {/* Left Column: Media & Details */}
        <div className="lg:col-span-7 space-y-12">
          {/* Vehicle Hero */}
          <section className="relative group">
            <div className="aspect-[16/10] overflow-hidden rounded-[2rem] bg-surface-container shadow-sm">
              <img 
                src={vehicle.image} 
                alt={vehicle.model} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            {/* Overlapping Title Card */}
            <div className="relative -mt-16 mx-6 p-8 bg-surface-container-lowest rounded-3xl shadow-[0_20px_40px_rgba(25,28,30,0.06)] border border-outline-variant/15">
              <div className="flex justify-between items-start">
                <div>
                  <span className="px-3 py-1 bg-primary-fixed text-on-primary-fixed rounded-full font-semibold text-[11px] mb-3 inline-block">PREMIUM SELECTION</span>
                  <h1 className="text-4xl md:text-5xl font-extrabold text-on-background tracking-tight mb-2">{vehicle.brand} {vehicle.model}</h1>
                  <div className="flex items-center gap-4 text-on-surface-variant">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm font-bold">{details.rating}</span>
                      <span className="text-sm opacity-60">({details.reviews} reviews)</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{vehicle.location}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <span className="block text-3xl font-extrabold text-primary">${vehicle.price.toLocaleString()}</span>
                  <span className="text-sm text-on-surface-variant font-medium">per day</span>
                </div>
              </div>
            </div>
          </section>

          {/* Vehicle Specs Bento Grid */}
          <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <SpecCard icon={<Calendar className="w-6 h-6" />} label="Year" value={vehicle.year.toString()} />
            <SpecCard icon={<Zap className="w-6 h-6" />} label="Fuel Type" value={vehicle.fuelType} />
            <SpecCard icon={<Gauge className="w-6 h-6" />} label="Mileage" value={details.mileage} />
            <SpecCard icon={<Armchair className="w-6 h-6" />} label="Capacity" value={details.capacity} />
          </section>

          {/* Description */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-on-surface">Experience pure performance</h2>
            <p className="text-lg text-on-surface-variant leading-relaxed font-medium max-w-2xl">
              {details.description}
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {details.features.map(feature => (
                <span key={feature} className="px-4 py-2 bg-surface-container text-on-surface-variant rounded-full text-sm font-semibold">
                  {feature}
                </span>
              ))}
            </div>
          </section>

          {/* Map Section */}
          <section className="space-y-4">
            <h3 className="text-xl font-bold">Pick-up Location</h3>
            <div className="aspect-video w-full rounded-3xl overflow-hidden grayscale contrast-125 opacity-90 border border-outline-variant/10">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNbevC62SDncUjp-742JPVs3XygIFCCpqaLoEKClsMrw_hDX8yxbFqha9ATn4ox2CDfURGUiZ_8NM-lzXkSMAJrXk68qiwru1c3Kcughfl6Gr8Sr18Fd7dYi_v_SDwg8-FZJjdL0VKky8en5Af0r8qrUjZgiWvXgCYnVHVyyHfqgi8vZ1Ao4rWEeC_kDEQDfBeYnROJAS5TPatRKLXBrR0E_psd4rbt9j6gagnYEAHGefKbjoarBPu8nWeTyMY2j0EHYHux95Xdf0" 
                alt="Map" 
                className="w-full h-full object-cover"
              />
            </div>
          </section>
        </div>

        {/* Right Column: Booking Widget */}
        <div className="lg:col-span-5">
          <div className="sticky top-28 bg-surface-container-lowest p-8 rounded-[2.5rem] shadow-[0_20px_40px_rgba(25,28,30,0.06)] border border-outline-variant/15 space-y-8">
            <h2 className="text-2xl font-extrabold tracking-tight">Reserve Vehicle</h2>
            <div className="space-y-6">
              {/* Date Selectors */}
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-on-surface-variant uppercase tracking-widest px-1">Start Date</label>
                  <div className="flex items-center gap-3 p-4 bg-surface-container-low rounded-2xl border border-transparent focus-within:bg-white focus-within:border-primary/20 transition-all duration-300">
                    <Calendar className="w-5 h-5 text-outline" />
                    <input className="bg-transparent border-none p-0 focus:ring-0 w-full font-bold text-on-surface" type="text" defaultValue="Oct 24, 2023" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-on-surface-variant uppercase tracking-widest px-1">End Date</label>
                  <div className="flex items-center gap-3 p-4 bg-surface-container-low rounded-2xl border border-transparent focus-within:bg-white focus-within:border-primary/20 transition-all duration-300">
                    <Calendar className="w-5 h-5 text-outline" />
                    <input className="bg-transparent border-none p-0 focus:ring-0 w-full font-bold text-on-surface" type="text" defaultValue="Oct 28, 2023" />
                  </div>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="pt-6 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-on-surface-variant font-medium">Rental (4 days x ${vehicle.price})</span>
                  <span className="font-bold">${(vehicle.price * 4).toLocaleString()}.00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-on-surface-variant font-medium">Insurance (Premium Coverage)</span>
                  <span className="font-bold">$40.00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-on-surface-variant font-medium">Service Fee</span>
                  <span className="font-bold">$24.00</span>
                </div>
                <div className="pt-6 mt-4 border-t-2 border-surface-container flex justify-between items-end">
                  <div>
                    <p className="text-[11px] font-bold text-on-surface-variant uppercase tracking-widest">Total Amount</p>
                    <p className="text-4xl font-extrabold text-primary tracking-tight">${(vehicle.price * 4 + 64).toLocaleString()}.00</p>
                  </div>
                  <p className="text-[11px] text-on-surface-variant font-medium pb-1">All taxes included</p>
                </div>
              </div>

              {/* Primary Action */}
              <button className="w-full py-5 bg-primary text-white rounded-2xl font-bold text-lg hover:brightness-110 active:scale-95 transition-all duration-300 shadow-xl shadow-primary/10">
                Book Now
              </button>
              <p className="text-center text-xs text-on-surface-variant font-medium">You won't be charged yet</p>
            </div>

            {/* Host Info */}
            <div className="pt-8 border-t border-surface-container">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-fixed flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-primary fill-current" />
                </div>
                <div>
                  <p className="text-sm font-bold text-on-surface">Hosted by Erik Larssen</p>
                  <p className="text-xs text-on-surface-variant">Identity Verified • 4.8 Rating</p>
                </div>
                <button className="ml-auto text-primary font-bold text-sm">Message</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SpecCard: React.FC<{ icon: React.ReactNode, label: string, value: string }> = ({ icon, label, value }) => (
  <div className="bg-surface-container-low p-6 rounded-2xl flex flex-col gap-3">
    <div className="text-primary">{icon}</div>
    <div>
      <p className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">{label}</p>
      <p className="text-lg font-bold text-on-surface">{value}</p>
    </div>
  </div>
);
