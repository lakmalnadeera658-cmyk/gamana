import React from 'react';
import { MapPin, SlidersHorizontal } from 'lucide-react';
import { Vehicle } from '../types';

interface BrowseScreenProps {
  onVehicleSelect: (vehicle: Vehicle) => void;
}

const VEHICLES: Vehicle[] = [
  {
    id: '1',
    brand: 'Porsche',
    model: '911 Carrera S',
    year: 2023,
    price: 45000,
    currency: 'LKR',
    fuelType: 'Petrol',
    transmission: 'Automatic',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWhcqHJNnEHtvDFoGK5nCt5GE--ULV9oynFxGsHhopTyfrCIdLs0ZxtoZXBiosiVrNmN3_hA36qbBzH0053paIdamRWjDSPCZgPH3eXSBmlOspXWC8lI3O-KCKvcLL6YgozqJNoKDJAGwwhZXkobCZvlPt-e0pA6tqfoADjFromadSmumPiVa_v0BcEJJa-iBTNTDbkrl2SlP8NjWIy9igRPHomriA66GcSGhFo2_DFSUlmOtITVykiQZ3A23_4k_EM8KDVEJ8LH0',
    status: 'available',
    location: 'Colombo, Sri Lanka'
  },
  {
    id: '2',
    brand: 'Land Rover',
    model: 'Defender 110',
    year: 2022,
    price: 38000,
    currency: 'LKR',
    fuelType: 'Diesel',
    transmission: '4x4',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWURHjOOPZbH0RjfETB-CvqBCdmsmCXH-LoSX6vy6qJ3AkVZTyYfryIeCSX0MvVcFlB_E5G9Dq7lOK-PPbFwkcOVaxddCE3CfqOGB5Xhgt4-vc8w78fL0BZByu3Z5or3zH4RzPNQMiUHW0wgWVmn1vxXUqDDoeHAlUWVdmPop-6IazX0nTl5uJJBssjw7_StonMPSPognrUilU77fHShYpMc9IL2HSUMQcsXe0dw99YzOTECfeU3OJ-CLx4pPLp0dyKFmPH6mf9B8',
    status: 'booked',
    location: 'Kandy, Sri Lanka'
  },
  {
    id: '3',
    brand: 'Tesla',
    model: 'Model S Plaid',
    year: 2024,
    price: 52000,
    currency: 'LKR',
    fuelType: 'Electric',
    transmission: 'Autopilot',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBgi6PXmJXwgNTqCVlEEWmLfL-MGpAqzZX1JJToqDclNtarv08s-56UapmknlNhVD-yXtXoGmlwMCw6ryS8HdY5fJAXgQGAuLLpzhXKG8LdrH72MiRI31mlcc9LJGphZyS2vklM7ECi9DyhVLdzA5nXu6AEcu0CJNPFPklHynPkmUXEnuuJIsVbyO7DoeDZ-B0d2Rc2Nsns-f1Kc5IY7TLQYw6N9ijJiaTGWhHeMhxFxYI7bQ6ubdZR6XHIl08ppH21uefTi9rExk',
    status: 'available',
    location: 'Colombo, Sri Lanka'
  },
  {
    id: '4',
    brand: 'Audi',
    model: 'RS7 Sportback',
    year: 2023,
    price: 42500,
    currency: 'LKR',
    fuelType: 'Petrol',
    transmission: 'Quattro',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDf6OKHJw36u1dtzJ4z9JPpuwEUAGqrooToU0gUSUGqmXcdAoWYe_ptWJEL4JcMnY8Ut4rTLOFN5DQD5-1rd1-9aYUfE2uKymH2Qd0YboazxjkbuWyvLW3WresI9m0YnZATYT9LgNnF4MiSU2M5TtibYJ3XukGnS9e5a63N6t5vDdZsV445OwkGXNV1jPE55-btZBn9FeWzLFZIEQQkOL48CnDqz_r2dgS_wZUSHaCFhz-bSbpf2Sv7KeOmFeOh20KNzOeJ0Pll-1U',
    status: 'available',
    location: 'Galle, Sri Lanka'
  }
];

export const BrowseScreen: React.FC<BrowseScreenProps> = ({ onVehicleSelect }) => {
  return (
    <div className="px-6 pb-12">
      {/* Hero Search Section */}
      <section className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-primary leading-tight mb-6">
              Find your next <br/>
              <span className="text-surface-tint">architectural journey.</span>
            </h1>
            <p className="text-on-surface-variant text-lg max-w-md">
              Premium vehicles for those who value endurance, dignity, and the open road.
            </p>
          </div>
          <div className="lg:col-span-5 w-full">
            <div className="bg-surface-container-lowest p-2 rounded-xl shadow-[0_20px_40px_rgba(25,28,30,0.06)] flex items-center">
              <div className="flex-grow flex items-center px-4 gap-3">
                <MapPin className="w-5 h-5 text-outline" />
                <input 
                  className="w-full border-none focus:ring-0 bg-transparent py-4 text-on-surface placeholder:text-outline-variant font-medium" 
                  placeholder="Where to, nomad?" 
                  type="text"
                />
              </div>
              <button className="bg-primary text-on-primary px-8 py-4 rounded-lg font-bold hover:opacity-90 transition-opacity">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="mb-12 space-y-6">
        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-bold uppercase tracking-widest text-outline">Fuel Type</h3>
          <div className="flex flex-wrap gap-3">
            <button className="bg-primary text-on-primary px-6 py-2 rounded-full text-sm font-semibold">All Fuels</button>
            {['Electric', 'Hybrid', 'Petrol', 'Diesel'].map(fuel => (
              <button key={fuel} className="bg-surface-container-high text-on-surface-variant px-6 py-2 rounded-full text-sm font-semibold hover:bg-surface-variant transition-colors">
                {fuel}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-bold uppercase tracking-widest text-outline">Top Brands</h3>
          <div className="flex flex-wrap gap-3">
            {['Land Rover', 'Tesla'].map(brand => (
              <button key={brand} className="bg-surface-container-high text-on-surface-variant px-6 py-2 rounded-full text-sm font-semibold hover:bg-surface-variant transition-colors">
                {brand}
              </button>
            ))}
            <button className="bg-primary text-on-primary px-6 py-2 rounded-full text-sm font-semibold">Toyota</button>
            {['Mercedes-Benz', 'BMW', 'Audi'].map(brand => (
              <button key={brand} className="bg-surface-container-high text-on-surface-variant px-6 py-2 rounded-full text-sm font-semibold hover:bg-surface-variant transition-colors">
                {brand}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle Feed */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {VEHICLES.map((vehicle, index) => (
          <div 
            key={vehicle.id}
            className={vehicle.id === '4' ? "lg:col-span-1" : ""} // Just for layout variety
          >
            {/* Featured Card Style for BMW M8 equivalent (index 3 in original but let's just do one) */}
            {index === 3 ? (
              <div className="lg:col-span-2 group bg-primary-container rounded-xl overflow-hidden flex flex-col md:flex-row shadow-[0_20px_40px_rgba(0,66,83,0.1)] h-full">
                <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
                  <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNWDMpK-QcD7bd7eW2ZklugXfLDil04cp6srNQ9g5H9ycNqPNeqDrSc9x2oXXjDgPOm52V2Dm9hK19mo33GoyzMSqonHCJBVa630uRB5FwyszrhkyKBAs7B5WDRUYv0FrRyp6cG5_7oMrNaqyE6-Hml1kjc-6zy9aA5vuLoaoUztqmGZMep0p3s6j6FPwz_8m9-iOdKiztngnpfCOHsuSFlzUza3-7s_L0oiFaMN7MaXEfY27zd2myYNKq5vvK4AeBhlhqAoedDak" 
                    alt="BMW M8" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                  <p className="text-primary-fixed text-xs font-bold uppercase tracking-[0.2em] mb-2">Featured Expedition</p>
                  <h4 className="text-3xl font-extrabold text-white mb-4 leading-tight">BMW M8 Competition <br/>Gran Coupe</h4>
                  <p className="text-primary-fixed-dim mb-6 text-sm">Experience uncompromised power paired with architectural elegance.</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-white text-2xl font-black">LKR 65,000</p>
                      <p className="text-primary-fixed-dim text-[10px] font-medium uppercase">Day Rate</p>
                    </div>
                    <button className="bg-primary text-on-primary px-6 py-3 rounded-lg font-bold text-sm shadow-xl">Book Now</button>
                  </div>
                </div>
              </div>
            ) : (
              <div 
                className="group bg-surface-container-lowest rounded-xl overflow-hidden transition-all duration-300 hover:translate-y-[-4px] cursor-pointer"
                onClick={() => onVehicleSelect(vehicle)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={vehicle.image} 
                    alt={vehicle.model} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-lg text-[10px] font-bold tracking-widest uppercase ${
                    vehicle.status === 'available' ? 'bg-primary text-on-primary' : 'bg-outline-variant text-on-surface'
                  }`}>
                    {vehicle.status}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-xs font-bold text-outline uppercase tracking-wider mb-1">{vehicle.brand}</p>
                      <h4 className="text-xl font-bold text-primary">{vehicle.model}</h4>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-extrabold text-primary">{vehicle.currency} {vehicle.price.toLocaleString()}</p>
                      <p className="text-[10px] text-on-surface-variant font-medium">per day</p>
                    </div>
                  </div>
                  <div className="flex gap-2 mb-6">
                    <span className="bg-surface-container-low text-on-secondary-container px-3 py-1 rounded-full text-[11px] font-semibold">{vehicle.fuelType}</span>
                    <span className="bg-surface-container-low text-on-secondary-container px-3 py-1 rounded-full text-[11px] font-semibold">{vehicle.transmission}</span>
                    <span className="bg-surface-container-low text-on-secondary-container px-3 py-1 rounded-full text-[11px] font-semibold">{vehicle.year}</span>
                  </div>
                  <button className="w-full bg-secondary-container text-on-secondary-container py-3 rounded-lg font-bold text-sm hover:bg-primary hover:text-on-primary transition-all">
                    View Details
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </section>

      {/* Floating Action Button */}
      <button className="fixed bottom-24 right-6 md:bottom-12 md:right-12 bg-primary text-on-primary w-14 h-14 rounded-full flex items-center justify-center shadow-2xl z-40 active:scale-95 transition-transform">
        <SlidersHorizontal className="w-6 h-6" />
      </button>
    </div>
  );
};
