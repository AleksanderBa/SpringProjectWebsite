import { useState } from 'react';
import Home from './imports/Home';
import NewInTheGlobalBackyard from './imports/NewInTheGlobalBackyard';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'exhibition'>('home');

  // Create a modified Home component with working navigation
  const HomeWithNav = () => {
    const handleNavigation = (page: string) => {
      if (page === 'Exhibitions') {
        setCurrentPage('exhibition');
      }
    };

    return (
      <div onClick={(e) => {
        const target = e.target as HTMLElement;
        const text = target.textContent?.trim();
        if (text) handleNavigation(text);
      }}>
        <Home />
      </div>
    );
  };

  // Create a modified Exhibition component with working navigation
  const ExhibitionWithNav = () => {
    const handleNavigation = (page: string) => {
      if (page === 'Home') {
        setCurrentPage('home');
      }
    };

    return (
      <div onClick={(e) => {
        const target = e.target as HTMLElement;
        const text = target.textContent?.trim();
        if (text) handleNavigation(text);
      }}>
        <NewInTheGlobalBackyard />
      </div>
    );
  };

  return (
    <div className="min-h-screen">
      {currentPage === 'home' ? <HomeWithNav /> : <ExhibitionWithNav />}
    </div>
  );
}
