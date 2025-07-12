import React from 'react';

interface NotificationCardProps {
  title: string;
  body: string;
  time: string;
  category?: 'meeting' | 'work' | 'urgent' | 'transport' | 'social' | 'personal';
}

const NotificationCard: React.FC<NotificationCardProps> = ({ 
  title, 
  body, 
  time, 
  category = 'personal' 
}) => {
  const getCategoryColor = (cat: string) => {
    const colors = {
      meeting: '#4CAF50',
      work: '#2196F3',
      urgent: '#F44336',
      transport: '#FF9800',
      social: '#9C27B0',
      personal: '#757575',
    };
    return colors[cat as keyof typeof colors] || colors.personal;
  };

  return (
    <div className="bg-[#1C1C1E] rounded-[20px] p-5 mb-3">
      <div className="flex items-start justify-between mb-1">
        <h3 className="text-[#EBEBF5] text-base font-extrabold leading-[20.8px] flex-1">
          {title}
        </h3>
        <div 
          className="px-2 py-0.5 rounded-[10px] ml-2 text-white text-[10px] font-extrabold tracking-wider uppercase"
          style={{ backgroundColor: getCategoryColor(category) }}
        >
          {category}
        </div>
      </div>
      <p className="text-[#EBEBF5] text-base font-light leading-[20.8px] mb-2">
        {body}
      </p>
      <p className="text-[#8E8E93] text-xs font-light">
        {time}
      </p>
    </div>
  );
};

export default NotificationCard;