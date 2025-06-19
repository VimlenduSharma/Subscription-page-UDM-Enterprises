import React from 'react';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface PricingCardProps {
  type: 'free' | 'monthly' | 'yearly';
  price: string;
  priceSubtext?: string;
  features: string[];
  buttonText?: string;
  isFeatured?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ 
  type, 
  price, 
  priceSubtext,
  features, 
  buttonText = "CHOOSE PLAN",
  isFeatured = false
}) => {
  const getCardStyles = () => {
    switch (type) {
      case 'free':
        return {
          background: 'linear-gradient(135deg, #5b21b6 0%, #7c3aed 100%)',
          labelBg: 'bg-white',
          labelText: 'text-purple-800',
          priceText: 'text-white',
          featureText: 'text-white/90',
          separatorBg: 'bg-white/20',
          buttonStyle: 'bg-transparent border border-white text-white hover:bg-white/10'
        };
      case 'monthly':
        return {
          background: 'linear-gradient(135deg, #1f2937 0%, #111827 100%)',
          labelBg: 'bg-white',
          labelText: 'text-gray-800',
          priceText: 'text-white',
          featureText: 'text-white/90',
          separatorBg: 'bg-white/20',
          buttonStyle: 'bg-transparent border border-white text-white hover:bg-white/10'
        };
      case 'yearly':
        return {
          background: 'linear-gradient(135deg, #5b21b6 0%, #7c3aed 100%)',
          labelBg: 'bg-white',
          labelText: 'text-purple-800',
          priceText: 'text-white',
          featureText: 'text-white/90',
          separatorBg: 'bg-white/20',
          buttonStyle: 'bg-transparent border border-white text-white hover:bg-white/10'
        };
      default:
        return {};
    }
  };

  const styles = getCardStyles();
  
  return (
    <div 
      className={`relative rounded-3xl p-6 flex flex-col items-center max-w-xs ${isFeatured ? 'transform scale-105 shadow-2xl' : ''}`}
      style={{ background: styles.background }}
    >
      <div className={`px-6 py-1 rounded-full text-sm font-medium mb-4 ${styles.labelBg} ${styles.labelText} uppercase`}>
        {type}
      </div>
      
      <div className="text-center mb-6">
        <div className={`flex items-baseline justify-center ${styles.priceText}`}>
          <span className="text-lg">₹</span>
          <span className="text-6xl font-bold ml-1">{price}</span>
        </div>
        {priceSubtext && (
          <div className={`text-sm mt-2 ${styles.priceText} opacity-80`}>
            {priceSubtext}
          </div>
        )}
      </div>
      
      <div className={`text-center ${styles.featureText} space-y-2 w-full mb-6`}>
        {features.map((feature, index) => (
          <p key={index} className="text-sm">{feature}</p>
        ))}
      </div>
      
      <Separator className={`w-4/5 my-4 ${styles.separatorBg}`} />
      
      <div className={`text-xs text-center mb-6 ${styles.featureText} opacity-80`}>
        Interdum et malesuada fames ac ante ipsum primis in faucibus.
      </div>
      
      <Button 
        className={styles.buttonStyle}
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default PricingCard;
