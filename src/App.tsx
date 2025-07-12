import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import CurvedLoop from './components/CurvedLoop';
import InfiniteScroll from './components/InfiniteScroll';
import RichTextCard from './components/RichTextCard';
import HowItWorks from './components/HowItWorks';
import { sampleCards } from './data/cards';

function App() {
  const [email, setEmail] = useState('');

  const cardItems = [
    ...sampleCards.map(card => ({
      content: (
        <RichTextCard
          key={card.card_id}
          title={card.title}
          displayTemplate={card.display_template}
          citations={card.citations}
          actions={card.actions}
        />
      )
    }))
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission here
    console.log('Email submitted:', email);
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white">
      {/* Header */}
      <header className="flex items-center justify-between p-6 md:p-8">
        <div className="text-xl font-medium">horizon</div>
        <div className="flex items-center gap-6">
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            blog
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            sign in
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center px-6 md:px-8 py-10 md:py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium mb-8 leading-tight">
            making your phone actually{' '}
            <span 
              className="bg-gradient-to-r from-[#3892FF] via-[#BE83FF] via-[#E86CA0] to-[#FF7A32] bg-clip-text text-transparent font-bold"
              style={{
                backgroundImage: 'linear-gradient(to right, #3892FF, #BE83FF, #E86CA0, #FF7A32)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontFamily: 'CyGrotesk',
                fontWeight: 700
              }}
            >
              intelligent
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-16 max-w-2xl mx-auto">
            horizon is the world's first ai native launcher
          </p>

          {/* Email Signup Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="relative">
              {/* Underglow gradient */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#3892FF]/20 via-[#BE83FF]/20 via-[#E86CA0]/20 to-[#FF7A32]/20 rounded-full blur-lg opacity-75"></div>
              
              {/* Main input container */}
              <div className="relative flex items-center bg-gray-800/50 backdrop-blur-sm rounded-full p-2 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300">
                <div className="flex items-center pl-4 pr-2 text-gray-400">
                  <Mail className="w-5 h-5 mr-3" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="enter your email for early access"
                  className="flex-1 bg-transparent text-white placeholder-gray-500 border-none outline-none py-3 px-2 text-sm md:text-base"
                  required
                />
                <button
                  type="submit"
                  className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-full transition-all duration-300 text-sm md:text-base font-medium whitespace-nowrap"
                >
                  join beta
                </button>
              </div>
            </div>
          </form>

        </div>
      </main>

      {/* Curved Text Separator */}
      <CurvedLoop 
        marqueeText="Invisible ✦ Proactive ✦ Powerful"
        speed={2}
        curveAmount={300}
        direction="left"
        interactive={true}
      />

      {/* Infinite Scroll Cards Section */}
      <div style={{ height: '500px', position: 'relative' }}>
        <InfiniteScroll
          items={cardItems}
          isTilted={true}
          tiltDirection="left"
          autoplay={true}
          autoplaySpeed={1.5}
          autoplayDirection="down"
          width="400px"
          itemMinHeight={300}
          negativeMargin="-200px"
        />
      </div>

      {/* Intelligence Section */}
      <section className="py-20 md:py-32 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left Side */}
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium leading-tight">
                Intelligence that{' '}
                <span 
                  className="bg-gradient-to-r from-[#3892FF] via-[#BE83FF] via-[#E86CA0] to-[#FF7A32] bg-clip-text text-transparent"
                  style={{
                    backgroundImage: 'linear-gradient(to right, #3892FF, #BE83FF, #E86CA0, #FF7A32)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  finds you.
                </span>
              </h2>
            </div>

            {/* Right Side */}
            <div className="space-y-6">
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                Horizon's cards anticipate your needs, surfacing everything from your flight info to the perfect playlist, right when you need it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <HowItWorks />

    </div>
  );
}

export default App;