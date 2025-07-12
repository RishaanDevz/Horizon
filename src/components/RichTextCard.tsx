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
            className="bg-[#007AFF] text-white px-2 py-1 rounded-md text-sm font-bold cursor-pointer hover:bg-[#0056CC] transition-colors"
            onClick={() => {
              // Handle citation click - could open modal or navigate
              console.log('Citation clicked:', part.tag, citations[part.tag]);
            }}
          >
            {part.content}
          </span>
        );
      case 'action':
        return (
          <span
            key={index}
            className="bg-[#FF9500] text-white px-2 py-1 rounded-md text-sm font-bold cursor-pointer hover:bg-[#CC7700] transition-colors"
            onClick={() => {
              // Handle action click - could execute action
              console.log('Action clicked:', part.tag, actions[part.tag]);
            }}
          >
            {part.content}
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
    <div className="bg-[#1C1C1E] rounded-[20px] p-5 mb-3 transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-2">
      <h3 className="text-[#EBEBF5] text-base font-extrabold leading-[20.8px] mb-3">
        {title}
      </h3>
      <div className="text-[#EBEBF5] text-base font-light leading-[20.8px]">
        {parsedContent.map((part, index) => renderPart(part, index))}
      </div>
    </div>
  );
};

export default RichTextCard;