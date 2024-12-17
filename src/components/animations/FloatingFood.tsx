import React from 'react';
import { Pizza, Coffee, Sandwich, IceCream, Beef } from 'lucide-react';

const foods = [
  { Icon: Pizza, delay: 0, position: 'top-20 left-20' },
  { Icon: Coffee, delay: 1, position: 'top-40 right-32' },
  { Icon: Sandwich, delay: 2, position: 'bottom-32 left-1/4' },
  { Icon: IceCream, delay: 1.5, position: 'top-1/3 right-1/4' },
  { Icon: Beef, delay: 0.5, position: 'bottom-20 right-20' },
];

const FloatingFood = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {foods.map(({ Icon, delay, position }, index) => (
        <div
          key={index}
          className={`absolute ${position} animate-float`}
          style={{
            animationDelay: `${delay}s`,
            transform: 'perspective(1000px) rotateX(10deg) rotateY(10deg)',
          }}
        >
          <Icon
            size={48}
            className="text-brand-primary/30 filter drop-shadow-lg"
            style={{
              animation: `spin 20s linear infinite`,
              animationDelay: `${delay}s`,
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingFood;