import React from 'react';
import { Download, Clock, Shield } from 'lucide-react';
import Feature from './Feature';

const Features = () => {
  const features = [
    {
      Icon: Download,
      title: 'Easy to Use',
      description: 'Simple interface for quick and easy food ordering',
    },
    {
      Icon: Clock,
      title: 'Fast Delivery',
      description: 'Swift delivery to your doorstep within minutes',
    },
    {
      Icon: Shield,
      title: 'Secure Ordering',
      description: 'Safe and protected transactions every time',
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-brand-accent/20 py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;