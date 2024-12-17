import React from 'react';
import PhoneForm from './PhoneForm';
import FloatingFood from './animations/FloatingFood';
import { COLORS } from '../utils/theme';

const Hero = () => {
  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12 min-h-[calc(100vh-8rem)]">
      <FloatingFood />
      <div className="lg:w-1/2 relative z-10">
        <h1 className="text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
          Your Favorite Food,
          <span className="text-brand-primary animate-gradient-text"> Delivered Fast</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed animate-slide-up">
          Experience the convenience of ordering delicious food from your favorite restaurants. 
          Download Chowex now and enjoy seamless food delivery at your fingertips.
        </p>
        <div className="animate-fade-in-up">
          <PhoneForm />
        </div>
      </div>

      <div className="lg:w-1/2 relative perspective-1000">
        <div className="absolute inset-0 bg-gradient-radial from-brand-accent to-transparent opacity-60 rounded-2xl animate-pulse-slow"></div>
        <div 
          className="relative z-10 transform hover:scale-105 transition-transform duration-500 hover:rotate-y-12 rounded-2xl overflow-hidden shadow-2xl"
          style={{
            transform: 'perspective(1000px) rotateY(-5deg) rotateX(5deg)',
            transformStyle: 'preserve-3d',
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=2070"
            alt="Delicious Food"
            className="rounded-2xl animate-float"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;