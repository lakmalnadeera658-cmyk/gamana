import React from 'react';
import { Phone, Mail, BadgeCheck, Sparkles, Calendar, CalendarCheck, Map, ReceiptText, Plus } from 'lucide-react';

export const ProfileScreen: React.FC = () => {
  return (
    <div className="px-6 pb-32">
      {/* User Identity Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {/* Profile Card */}
        <div className="md:col-span-2 bg-surface-container-lowest p-8 rounded-xl flex flex-col md:flex-row items-start md:items-center gap-8 shadow-[0_20px_40px_rgba(25,28,30,0.03)]">
          <div className="relative">
            <div className="w-32 h-32 rounded-3xl overflow-hidden shadow-lg">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGCijuUEcsLhSGjktkNj0TkmW8ByzTMzhlg7JjTYjkvZ9DkfQqBvgtaLTun-9Tes7BTkle4s10fWpK8OYhUhLpNdhpwahZwjLWAa6v8tZCTCzz1zHmuG-8wI51uAKbVhb2uimGaLfazABHGCilhNz17XrY9zGxeHPtFG46hh_Enh7ufZ7JHl8YZCbl-yRfxYM1jnbqJWG1uK3Fm30c04diioDaUW26e8Z3jdurwD6-R7IqHrmLW9wtWzS5X3vUTsP5TwWgetkiDgw" 
                alt="Julian Thorne" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-primary text-on-primary p-2 rounded-xl">
              <BadgeCheck className="w-4 h-4 fill-current" />
            </div>
          </div>
          <div className="flex-1">
            <h1 className="text-4xl font-extrabold tracking-tight text-primary mb-2">Julian Thorne</h1>
            <div className="flex flex-col gap-1 text-on-surface-variant">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span className="font-medium">+1 (555) 234-8890</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span className="font-medium">j.thorne@voyager.com</span>
              </div>
            </div>
            <div className="mt-6 flex gap-3">
              <button className="bg-primary text-on-primary px-6 py-2.5 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity">Edit Profile</button>
              <button className="bg-secondary-container text-on-secondary-container px-6 py-2.5 rounded-xl font-semibold text-sm hover:bg-surface-variant transition-colors">Settings</button>
            </div>
          </div>
        </div>

        {/* Stats Card */}
        <div className="bg-primary-container text-on-primary p-8 rounded-xl flex flex-col justify-between shadow-lg">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold opacity-70">Membership Status</span>
            <h3 className="text-2xl font-bold mt-1 text-primary-fixed">Elite Voyager</h3>
          </div>
          <div className="mt-8">
            <div className="flex justify-between items-end">
              <div>
                <span className="block text-3xl font-bold">12</span>
                <span className="text-sm opacity-80">Completed Trips</span>
              </div>
              <Sparkles className="w-10 h-10 opacity-40" />
            </div>
            <div className="w-full bg-on-primary/20 h-1.5 rounded-full mt-4">
              <div className="bg-primary-fixed w-3/4 h-full rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Rentals Section */}
      <section className="space-y-12">
        {/* Active Rental */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold tracking-tight text-primary">Current Rental</h2>
            <span className="px-4 py-1.5 bg-[#e8f5e9] text-[#2e7d32] rounded-full text-xs font-bold uppercase tracking-wider">Active Now</span>
          </div>
          <div className="bg-surface-container-lowest rounded-xl overflow-hidden flex flex-col lg:flex-row shadow-[0_20px_40px_rgba(25,28,30,0.04)]">
            <div className="lg:w-2/5 h-64 lg:h-auto">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpXhSl9F79ASetS7RrrMw58kGQ166zYpucY1vMh_IdVdm8_VaRcROSX4fOve4K6YYd3HIoPdgUV6D9IgvsNaU_KYTid-qgPNOJNGDD3hXVyN8ndpdcFjyNjQuGTPPURFJwtiAMg8Kn6s_L4pYW6RKvhcRLFRODz8T0atKOXaqIGsasllz4hOZ8FqF0zrsm3PocoDxgpgGM67IgFfK1rfy3jaTXiTD50UemfO8uirCWzqT63Fm8A3Gajqv-ePEtTXEzknrvVHwg9tE" 
                alt="Active Vehicle" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 lg:w-3/5 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-sm text-on-surface-variant font-medium">Rental ID: GAM-99201</span>
                  <h3 className="text-2xl font-bold text-primary mt-1">Lucid Air Touring · 2024</h3>
                </div>
                <div className="text-right">
                  <span className="text-xs text-on-surface-variant block uppercase font-bold tracking-tighter">Total Cost</span>
                  <span className="text-2xl font-extrabold text-primary">$1,240.00</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6 my-8">
                <div className="space-y-1">
                  <span className="text-xs text-on-surface-variant uppercase font-bold tracking-widest">Start Date</span>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="font-bold">Oct 12, 2023</span>
                  </div>
                </div>
                <div className="space-y-1">
                  <span className="text-xs text-on-surface-variant uppercase font-bold tracking-widest">End Date</span>
                  <div className="flex items-center gap-2">
                    <CalendarCheck className="w-5 h-5 text-primary" />
                    <span className="font-bold">Oct 19, 2023</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <button className="flex-1 bg-primary text-on-primary py-3 rounded-xl font-bold text-sm">Modify Reservation</button>
                <button className="px-4 bg-surface-container-low text-primary rounded-xl flex items-center justify-center">
                  <Map className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Past Adventures */}
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-primary mb-8">Past Adventures</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PastTripCard 
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuCbLxpLYJTTdrm70FP1gS856uTA1rgOTJeq5ZEW_UgnOggPtWpI6oJbGhZT6jl4TKqVteB1n0YYIMxwauyTZdkoL6cBptMZ1z_t7YMy8Wat18txzilRCWGEfeNT0RplsxhhXt2PPTstMhtvApWP0PXbcUyp85bnvqAi8DPW3fXUQ_9SmoLglhjjCJvi2H2VvmSieXIDoXfWXuhjFWZB4rNmKlkhkZfU17zsptra1_cWGJmmPTcu9PggeW29vKs4EN4U1iyIP_XtNjE"
              id="GAM-88210"
              title="Porsche 911 Carrera"
              dates="Sep 05 - Sep 10"
              total="$2,100"
            />
            <PastTripCard 
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuCBUOUsNMiqP2JaiL2HIY9FwTQDnFFmpWdBPYqqXAoItj6lvZFbeDUCeFb_095132DIW1IRRa2Q6DqHV0-kXkvqtW8EtjiXkRROzRmc1PWprxeOpuDepyZHQvUYp7usOGPjSqUP6QLxbM6W4vG2G9JIwrianXVkhCeEPgWdkl0CwYhiZVWdZ7_GDLB-ff3aKvagUu3x2XIR074PzCMHe1uVgN2VaQeuzWMaV2d3qHQleRM2qzFKr9oPrikfYdHkJPXaaFkBAQ1xTUM"
              id="GAM-77641"
              title="Land Rover Defender"
              dates="Aug 12 - Aug 18"
              total="$1,450"
            />
            <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border-2 border-dashed border-outline-variant flex flex-col items-center justify-center p-8 text-center min-h-[300px]">
              <div className="w-16 h-16 bg-surface-container-low rounded-full flex items-center justify-center mb-4">
                <Plus className="w-8 h-8 text-outline" />
              </div>
              <h4 className="text-lg font-bold text-primary">Plan a New Trip</h4>
              <p className="text-sm text-on-surface-variant mt-2 mb-6">Discover our curated collection of luxury vehicles.</p>
              <button className="bg-primary text-on-primary px-8 py-3 rounded-xl font-bold text-sm">Explore Fleet</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const PastTripCard: React.FC<{ image: string, id: string, title: string, dates: string, total: string }> = ({ image, id, title, dates, total }) => (
  <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
    <div className="h-48 relative">
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute top-4 right-4 bg-surface-container-lowest/90 backdrop-blur px-3 py-1 rounded-full">
        <span className="text-[10px] font-bold text-primary uppercase">ID: {id}</span>
      </div>
    </div>
    <div className="p-6">
      <h4 className="text-lg font-bold text-primary">{title}</h4>
      <div className="mt-4 flex justify-between items-center">
        <div className="text-xs text-on-surface-variant">
          <span className="block">{dates}</span>
          <span className="font-bold text-on-surface">Total: {total}</span>
        </div>
        <button className="text-primary font-bold text-sm flex items-center gap-1">
          Invoice <ReceiptText className="w-4 h-4" />
        </button>
      </div>
    </div>
  </div>
);
