import React from 'react';
import { BRAND } from '../utils/theme';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center mb-16">
      <div className="flex items-center space-x-2">
        <img 
          src={BRAND.logo} 
          alt={BRAND.name} 
          className="h-12 w-auto"
        />
      </div>
    </nav>
  );
};

export default Navbar;