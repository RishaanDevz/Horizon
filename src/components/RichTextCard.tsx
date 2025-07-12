import React from 'react';

interface Citation {
  source_app: string;
  source_sender: string;
  source_text: string;
  timestamp_iso: string;
  deep_link_to_source: string;
}

interface Action {
  display_text_from_template: string;
  deep_link_uri: string;
}

interface RichTextCardProps {
  title: string;
  displayTemplate: string;
  citations: Record<string, Citation>;
  actions: Record<string, Action>;
}

const RichTextCard: React.FC<RichTextCardProps> = ({ 
  title, 
  displayTemplate, 
  citations, 
  actions 
}) => {
  const parseTemplate = (template: string) => {
    const parts = [];
    let currentIndex = 0;
    
    // Find all citation and action tags
    const regex = /<(cite\d+|action\d+)>(.*?)<\/\1>/g;
    let match;
    
    while ((match = regex.exec(template)) !== null) {
      // Add text before the match
      if (match.index > currentIndex) {
        const textBefore = template.slice(currentIndex, match.index);
        if (textBefore.trim()) {
          parts.push({
            type: 'text',
            content: textBefore
          });
        }
      }
      
      // Add the matched citation or action
      const tagType = match[1].startsWith('cite') ? 'citation' : 'action';
      parts.push({
        type: tagType,
        tag: match[1],
        content: match[2]
      });
      
      currentIndex = match.index + match[0].length;
    }
    
    // Add remaining text
    if (currentIndex < template.length) {
      const remainingText = template.slice(currentIndex);
      if (remainingText.trim()) {
        parts.push({
          type: 'text',
          content: remainingText
        });
      }
    }
    
    return parts;
  };

  const renderPart = (part: any, index: number) => {
    switch (part.type) {
      case 'citation':
        return (
          <span
            key={index}
            className="relative bg-gradient-to-r from-[#007AFF] to-[#0056CC] text-white px-3 py-1.5 rounded-lg text-sm font-bold cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 active:scale-95"
            onClick={() => {
              // Handle citation click - could open modal or navigate
              console.log('Citation clicked:', part.tag, citations[part.tag]);
            }}
          >
            <span className="relative z-10">{part.content}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#0056CC] to-[#003d99] rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </span>
        );
      case 'action':
        return (
          <span
            key={index}
            className="relative bg-gradient-to-r from-[#FF9500] to-[#FF7A32] text-white px-3 py-1.5 rounded-lg text-sm font-bold cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25 active:scale-95"
            onClick={() => {
              // Handle action click - could execute action
              console.log('Action clicked:', part.tag, actions[part.tag]);
            }}
          >
            <span className="relative z-10">{part.content}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#CC7700] to-[#b8660a] rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </span>
        );
      default:
        return (
          <span key={index} className="whitespace-pre-wrap">
            {part.content}
          </span>
        );
    }
  };

  const parsedContent = parseTemplate(displayTemplate);

  return (
    <div className="group relative bg-gradient-to-br from-[#1C1C1E] via-[#1a1a1c] to-[#181818] rounded-[20px] p-6 mb-3 transition-all duration-500 ease-out hover:scale-[1.02] hover:-translate-y-3 hover:shadow-2xl hover:shadow-black/40 border border-gray-800/50 hover:border-gray-700/70 backdrop-blur-sm">
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-transparent rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Animated border glow */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#3892FF]/20 via-[#BE83FF]/20 to-[#FF7A32]/20 rounded-[22px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
      
      <div className="relative z-10">
        <h3 className="text-[#EBEBF5] text-base font-extrabold leading-[20.8px] mb-4 group-hover:text-white transition-colors duration-300">
          {title}
        </h3>
        <div className="text-[#EBEBF5] text-base font-light leading-[20.8px] group-hover:text-gray-100 transition-colors duration-300">
          {parsedContent.map((part, index) => renderPart(part, index))}
        </div>
      </div>
    </div>
  );
};

export default RichTextCard;