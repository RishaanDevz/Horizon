import React from 'react';

interface LoadingCardProps {
  type: 'ai' | 'monitor';
  message?: string;
}

const LoadingCard: React.FC<LoadingCardProps> = ({ type, message = 'Processing...' }) => {
  const getBadgeColor = () => {
    return type === 'ai' ? '#6883ff' : '#FF9800';
  };

  return (
    <div className="bg-[#1C1C1E] rounded-[20px] p-5 mb-3">
      <div className="flex items-center">
        <div 
          className="w-3 h-3 rounded-full mr-3 animate-pulse"
          style={{ backgroundColor: getBadgeColor() }}
        />
        <div 
          className="px-2 py-0.5 rounded-[10px] text-white text-[10px] font-extrabold tracking-wider uppercase"
          style={{ backgroundColor: getBadgeColor() }}
        >
          {type}
        </div>
      </div>
      <p className="text-[#EBEBF5] text-base font-light leading-[20.8px] mt-3">
        {message}
      </p>
    </div>
  );
};

export default LoadingCard;