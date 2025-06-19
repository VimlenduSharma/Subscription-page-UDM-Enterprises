import React from 'react';

interface PricingToggleProps {
  activeOption: 'monthly' | 'yearly';
  onChange: (option: 'monthly' | 'yearly') => void;
}

const PricingToggle: React.FC<PricingToggleProps> = ({ activeOption, onChange }) => {
  return (
    <div className="flex items-center justify-center bg-white/10 rounded-full p-1 w-64 mx-auto">
      <button
        className={`py-2 px-6 rounded-full text-sm font-medium transition-all ${
          activeOption === 'monthly' 
            ? 'bg-black text-white shadow-lg' 
            : 'bg-transparent text-white hover:bg-white/5'
        }`}
        onClick={() => onChange('monthly')}
      >
        MONTHLY
      </button>
      <button
        className={`py-2 px-6 rounded-full text-sm font-medium transition-all ${
          activeOption === 'yearly' 
            ? 'bg-black text-white shadow-lg' 
            : 'bg-transparent text-white hover:bg-white/5'
        }`}
        onClick={() => onChange('yearly')}
      >
        YEARLY
      </button>
    </div>
  );
};

export default PricingToggle;
