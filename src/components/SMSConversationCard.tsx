import React from 'react';

interface Message {
  body: string;
  time: string;
  sender?: string;
}

interface SMSConversationCardProps {
  title: string;
  messages: Message[];
}

const SMSConversationCard: React.FC<SMSConversationCardProps> = ({ title, messages }) => {
  return (
    <div className="bg-[#1C1C1E] rounded-[20px] p-5 mb-3">
      <h3 className="text-[#EBEBF5] text-base font-extrabold leading-[20.8px] mb-4">
        {title}
      </h3>
      <div className="space-y-2">
        {messages.map((message, index) => (
          <div key={index} className="bg-[#2C2C2E] rounded-[12px] p-3">
            <p className="text-[#EBEBF5] text-sm font-light leading-[18px] mb-1">
              {message.body}
            </p>
            <div className="flex justify-between items-center">
              {message.sender && (
                <span className="text-[#8E8E93] text-xs font-light">
                  {message.sender}
                </span>
              )}
              <span className="text-[#8E8E93] text-xs font-light ml-auto">
                {message.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SMSConversationCard;