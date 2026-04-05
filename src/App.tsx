import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Layout } from './components/Layout';
import { BrowseScreen } from './components/BrowseScreen';
import { VehicleDetailsScreen } from './components/VehicleDetailsScreen';
import { ListVehicleScreen } from './components/ListVehicleScreen';
import { ProfileScreen } from './components/ProfileScreen';
import { Screen, Vehicle } from './types';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('browse');
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);

  const handleVehicleSelect = (vehicle: Vehicle) => {
    setSelectedVehicle(vehicle);
    setCurrentScreen('details');
  };

  const handleBack = () => {
    if (currentScreen === 'details') {
      setCurrentScreen('browse');
      setSelectedVehicle(null);
    }
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'browse':
        return <BrowseScreen onVehicleSelect={handleVehicleSelect} />;
      case 'details':
        return selectedVehicle ? (
          <VehicleDetailsScreen vehicle={selectedVehicle} />
        ) : (
          <BrowseScreen onVehicleSelect={handleVehicleSelect} />
        );
      case 'list':
        return <ListVehicleScreen />;
      case 'profile':
        return <ProfileScreen />;
      default:
        return <BrowseScreen onVehicleSelect={handleVehicleSelect} />;
    }
  };

  return (
    <Layout 
      currentScreen={currentScreen} 
      onNavigate={(screen) => {
        setCurrentScreen(screen);
        if (screen !== 'details') setSelectedVehicle(null);
      }}
      showBack={currentScreen === 'details'}
      onBack={handleBack}
      title={currentScreen === 'details' ? "Vehicle Details" : "Gaman"}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentScreen + (selectedVehicle?.id || '')}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {renderScreen()}
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}
