import React from 'react';
import { 
  Search, 
  ArrowLeft, 
  Compass, 
  Car, 
  PlusCircle, 
  User 
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { Screen } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
  showBack?: boolean;
  onBack?: () => void;
  title?: string;
}

export const Layout: React.FC<LayoutProps> = ({ 
  children, 
  currentScreen, 
  onNavigate, 
  showBack, 
  onBack,
  title = "Gaman"
}) => {
  return (
    <div className="min-h-screen bg-background text-on-background pb-24 md:pb-0">
      {/* Top App Bar */}
      <header className="fixed top-0 w-full z-50 bg-background/70 backdrop-blur-xl">
        <div className="flex justify-between items-center px-6 py-4 w-full max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            {showBack ? (
              <button 
                onClick={onBack}
                className="flex items-center justify-center w-10 h-10 rounded-xl hover:bg-surface-container-low transition-colors duration-300 active:scale-95"
              >
                <ArrowLeft className="w-6 h-6 text-primary" />
              </button>
            ) : (
              <div className="w-10 h-10 rounded-full bg-surface-container-high overflow-hidden border-2 border-primary-fixed">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQ32G7_MhvG0sZ1l7067kByokPHeTXEHNk6NvmbEaUlPBOfcDi4EO1_qXH8jtcJ2CVajl8r_1ygH0_zd-yAHmPb_tocYi4tmwAM5qS2dN3eH0QlYtdQzu4QVer5_ycXpl6oJtbo3SaGgUGvXBfB1dzGK4puAA_1ZmAKOVThumn6IryzgOhhlI1SK2wfI0Y1ytD1b2lAQ-ZSh8EnaGH2Kwo9uH4RYA85F7rOZc-x-KOaEsjVgqqO3dWeN0kdWqJZ_37cFXWLQfMIEM" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <span className="text-2xl font-bold tracking-tighter text-primary">{title}</span>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-surface-container-low transition-colors duration-300 rounded-xl">
              <Search className="w-6 h-6 text-on-surface-variant" />
            </button>
            <div className="hidden md:flex items-center gap-8 ml-4">
              <button 
                onClick={() => onNavigate('browse')}
                className={cn(
                  "text-sm font-medium transition-colors",
                  currentScreen === 'browse' ? "text-primary font-bold" : "text-on-surface-variant hover:text-primary"
                )}
              >
                Browse
              </button>
              <button 
                onClick={() => onNavigate('profile')}
                className={cn(
                  "text-sm font-medium transition-colors",
                  currentScreen === 'profile' ? "text-primary font-bold" : "text-on-surface-variant hover:text-primary"
                )}
              >
                My Trips
              </button>
              <button 
                onClick={() => onNavigate('list')}
                className={cn(
                  "text-sm font-medium transition-colors",
                  currentScreen === 'list' ? "text-primary font-bold" : "text-on-surface-variant hover:text-primary"
                )}
              >
                List Vehicle
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="pt-24 max-w-7xl mx-auto">
        {children}
      </main>

      {/* Bottom Nav Bar (Mobile) */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-3 bg-white/80 backdrop-blur-2xl shadow-[0_-10px_30px_rgba(25,28,30,0.04)] rounded-t-3xl md:hidden">
        <button 
          onClick={() => onNavigate('browse')}
          className={cn(
            "flex flex-col items-center justify-center px-5 py-2 transition-all duration-300",
            currentScreen === 'browse' ? "bg-primary text-white rounded-2xl scale-105" : "text-secondary hover:text-primary"
          )}
        >
          <Compass className="w-6 h-6" />
          <span className="text-[11px] font-semibold mt-1">Browse</span>
        </button>
        <button 
          onClick={() => onNavigate('profile')}
          className={cn(
            "flex flex-col items-center justify-center px-5 py-2 transition-all duration-300",
            currentScreen === 'profile' ? "bg-primary text-white rounded-2xl scale-105" : "text-secondary hover:text-primary"
          )}
        >
          <Car className="w-6 h-6" />
          <span className="text-[11px] font-semibold mt-1">My Trips</span>
        </button>
        <button 
          onClick={() => onNavigate('list')}
          className={cn(
            "flex flex-col items-center justify-center px-5 py-2 transition-all duration-300",
            currentScreen === 'list' ? "bg-primary text-white rounded-2xl scale-105" : "text-secondary hover:text-primary"
          )}
        >
          <PlusCircle className="w-6 h-6" />
          <span className="text-[11px] font-semibold mt-1">List</span>
        </button>
        <button 
          onClick={() => onNavigate('profile')}
          className={cn(
            "flex flex-col items-center justify-center px-5 py-2 transition-all duration-300",
            currentScreen === 'profile' ? "bg-primary text-white rounded-2xl scale-105" : "text-secondary hover:text-primary"
          )}
        >
          <User className="w-6 h-6" />
          <span className="text-[11px] font-semibold mt-1">Profile</span>
        </button>
      </nav>
    </div>
  );
};
