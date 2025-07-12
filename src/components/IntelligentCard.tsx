import React from 'react';

interface IntelligentCardProps {
  title: string;
  content: string;
  type?: 'reminder' | 'followup' | 'context' | 'prediction' | 'optimization';
}

const IntelligentCard: React.FC<IntelligentCardProps> = ({ 
  title, 
  content, 
  type = 'default' 
}) => {
  const getTypeColor = (cardType: string) => {
    const colors = {
      reminder: '#F44336',
      followup: '#FF9800',
      context: '#2196F3',
      prediction: '#9C27B0',
      optimization: '#4CAF50',
      default: '#757575',
    };
    return colors[cardType as keyof typeof colors] || colors.default;
  };

  return (
    <div className="bg-[#1C1C1E] rounded-[20px] p-5 mb-3">
      <div className="flex items-start justify-between mb-1">
        <h3 className="text-[#EBEBF5] text-base font-extrabold leading-[20.8px] flex-1">
          {title}
        </h3>
        <div 
          className="px-2 py-0.5 rounded-[10px] ml-2 text-white text-[10px] font-extrabold tracking-wider uppercase"
          style={{ backgroundColor: getTypeColor(type) }}
        >
          {type}
        </div>
      </div>
      <p className="text-[#EBEBF5] text-base font-light leading-[20.8px]">
        {content}
      </p>
    </div>
  );
};

export default IntelligentCard;