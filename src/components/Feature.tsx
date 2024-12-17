import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureProps {
  Icon: LucideIcon;
  title: string;
  description: string;
}

const Feature = ({ Icon, title, description }: FeatureProps) => {
  return (
    <div className="text-center p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
      <div className="bg-brand-accent w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
        <Icon className="text-brand-primary" size={24} />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-brand-secondary">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Feature;