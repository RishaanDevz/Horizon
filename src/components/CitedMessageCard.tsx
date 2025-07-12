import React from 'react';

interface CitedMessageCardProps {
  citation: string;
  body: string;
}

const CitedMessageCard: React.FC<CitedMessageCardProps> = ({ citation, body }) => {
  return (
    <div className="bg-[#1C1C1E] rounded-[20px] p-5 mb-3 border-l-4 border-[#6883ff]">
      <div className="text-[#6883ff] text-base font-extrabold mb-2">
        {citation}
      </div>
      <p className="text-[#EBEBF5] text-sm font-light leading-[18px]">
        {body}
      </p>
    </div>
  );
};

export default CitedMessageCard;