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
    <div className="group relative bg-gradient-to-br from-[#1C1C1E] via-[#1a1a1c] to-[#181818] rounded-[20px] p-5 mb-3 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30 border border-gray-800/50 hover:border-gray-700/70">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-transparent rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-1">
          <h3 className="text-[#EBEBF5] text-base font-extrabold leading-[20.8px] flex-1 group-hover:text-white transition-colors duration-300">
            {title}
          </h3>
          <div 
            className="px-2 py-0.5 rounded-[10px] ml-2 text-white text-[10px] font-extrabold tracking-wider uppercase transition-all duration-300 hover:scale-110"
            style={{ backgroundColor: getCategoryColor(category) }}
          >
            {category}
          </div>
        </div>
        <p className="text-[#EBEBF5] text-base font-light leading-[20.8px] mb-2 group-hover:text-gray-100 transition-colors duration-300">
          {body}
        </p>
        <p className="text-[#8E8E93] text-xs font-light group-hover:text-gray-400 transition-colors duration-300">
          {time}
        </p>
      </div>
    </div>
  );
};

export default NotificationCard;