import React, { useRef, useCallback } from 'react';
import { toPng } from 'html-to-image';
import { sampleCards } from '../data/cards';
import RichTextCard from '../components/RichTextCard';

const DownloadCardsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0D0D0D] p-8">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold text-white">Card Exporter</h1>
        <p className="text-gray-400 mt-2">Click the button on any card to download it as a high-quality PNG.</p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sampleCards.map((card) => (
          <CardDownloader key={card.card_id} card={card} />
        ))}
      </div>
    </div>
  );
};

interface CardDownloaderProps {
  card: typeof sampleCards[0];
}

const CardDownloader: React.FC<CardDownloaderProps> = ({ card }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const onButtonClick = useCallback(() => {
    if (cardRef.current === null) {
      return;
    }

    toPng(cardRef.current, { cacheBust: true, pixelRatio: 3 })
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = `${card.title.replace(/\s+/g, '-').toLowerCase()}.png`;
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [cardRef, card.title]);

  return (
    <div className="flex flex-col items-center">
      <div className="w-[400px]" ref={cardRef}>
        <RichTextCard
          title={card.title}
          displayTemplate={card.display_template}
          citations={card.citations}
          actions={card.actions}
        />
      </div>
      <button
        onClick={onButtonClick}
        className="mt-4 bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-full transition-all duration-300 font-medium"
      >
        Download PNG
      </button>
    </div>
  );
};

export default DownloadCardsPage; 