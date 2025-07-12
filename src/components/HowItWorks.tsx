import React, { useState, useEffect } from 'react';
import { Radar, Brain, Zap, Calendar, MapPin, Bluetooth, Bell, Lock } from 'lucide-react';
import { TextShimmer } from './ui/text-shimmer';
import NotificationCard from './NotificationCard';

const HowItWorks: React.FC = () => {
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % 3);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 md:py-32 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-medium mb-4">
            Horizon in{' '}
            <span 
              className="bg-gradient-to-r from-[#3892FF] via-[#BE83FF] via-[#E86CA0] to-[#FF7A32] bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(to right, #3892FF, #BE83FF, #E86CA0, #FF7A32)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              3 steps
            </span>
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Step 1: Sense */}
          <div className={`relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-500 ${
            activeCard === 0 
              ? 'scale-105 border-[#3892FF]/50 shadow-2xl shadow-[#3892FF]/20' 
              : 'border-gray-700/50 hover:border-gray-600/50'
          }`}>
            {/* Gradient background overlay */}
            <div className={`absolute inset-0 rounded-2xl transition-opacity duration-500 ${
              activeCard === 0 ? 'opacity-100' : 'opacity-0'
            }`}>
              <div className="absolute inset-0 bg-gradient-to-br from-[#3892FF]/20 via-[#BE83FF]/10 to-transparent rounded-2xl animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#3892FF]/5 to-[#BE83FF]/15 rounded-2xl"></div>
            </div>
            
            <div className="relative z-10">
              <div className="mb-6">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all duration-500 ${
                  activeCard === 0 
                    ? 'bg-gradient-to-br from-[#3892FF] to-[#BE83FF] shadow-lg shadow-[#3892FF]/30' 
                    : 'bg-white/10'
                }`}>
                  <Radar className={`w-6 h-6 transition-colors duration-500 ${
                    activeCard === 0 ? 'text-white' : 'text-white/70'
                  }`} />
                </div>
                <h3 className={`text-xl font-semibold mb-2 transition-colors duration-500 ${
                  activeCard === 0 ? 'text-white' : 'text-gray-200'
                }`}>Step 1: Understands Your World</h3>
                <p className={`text-sm mb-4 transition-colors duration-500 ${
                  activeCard === 0 ? 'text-[#3892FF]' : 'text-gray-400'
                }`}>Tunes into your context</p>
              </div>
              <div className="space-y-3">
                <p className={`leading-relaxed transition-colors duration-500 ${
                  activeCard === 0 ? 'text-gray-100' : 'text-gray-300'
                }`}>
                  Horizon tunes into your phone's unique context—your calendar, location, and connections—to see what's happening now and anticipate what's next.
                </p>
                <div className="pt-4">
                  <div className={`w-full h-32 rounded-lg flex items-center justify-center gap-6 transition-all duration-500 ${
                    activeCard === 0 
                      ? 'bg-gradient-to-r from-[#3892FF]/20 via-[#BE83FF]/20 to-[#E86CA0]/20' 
                      : 'bg-gray-700/30'
                  }`}>
                    <Calendar className={`w-6 h-6 transition-all duration-500 ${
                      activeCard === 0 ? 'text-[#3892FF] animate-bounce' : 'text-white/70 animate-pulse'
                    }`} />
                    <MapPin className={`w-6 h-6 transition-all duration-500 ${
                      activeCard === 0 ? 'text-[#BE83FF] animate-bounce' : 'text-white/70 animate-pulse'
                    }`} style={{ animationDelay: '0.15s' }} />
                    <Bluetooth className={`w-6 h-6 transition-all duration-500 ${
                      activeCard === 0 ? 'text-[#E86CA0] animate-bounce' : 'text-white/70 animate-pulse'
                    }`} style={{ animationDelay: '0.3s' }} />
                    <Bell className={`w-6 h-6 transition-all duration-500 ${
                      activeCard === 0 ? 'text-[#FF7A32] animate-bounce' : 'text-white/70 animate-pulse'
                    }`} style={{ animationDelay: '0.5s' }} />
                  </div>
                  <div className="mt-3 text-center">
                    <TextShimmer 
                      className={`text-xs transition-colors duration-500 ${
                        activeCard === 0 ? 'text-[#3892FF]' : 'text-gray-400'
                      }`}
                      duration={1.5}
                      as="div"
                    >
                      Sensing signals…
                    </TextShimmer>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2: Reason */}
          <div className={`relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-500 ${
            activeCard === 1 
              ? 'scale-105 border-[#BE83FF]/50 shadow-2xl shadow-[#BE83FF]/20' 
              : 'border-gray-700/50 hover:border-gray-600/50'
          }`}>
            {/* Gradient background overlay */}
            <div className={`absolute inset-0 rounded-2xl transition-opacity duration-500 ${
              activeCard === 1 ? 'opacity-100' : 'opacity-0'
            }`}>
              <div className="absolute inset-0 bg-gradient-to-br from-[#BE83FF]/20 via-[#E86CA0]/10 to-transparent rounded-2xl animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-[#BE83FF]/5 to-[#E86CA0]/15 rounded-2xl"></div>
            </div>
            
            <div className="relative z-10">
            <div className="mb-6">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all duration-500 ${
                activeCard === 1 
                  ? 'bg-gradient-to-br from-[#BE83FF] to-[#E86CA0] shadow-lg shadow-[#BE83FF]/30' 
                  : 'bg-white/10'
              }`}>
                <Brain className={`w-6 h-6 transition-colors duration-500 ${
                  activeCard === 1 ? 'text-white' : 'text-white/70'
                }`} />
              </div>
              <h3 className={`text-xl font-semibold mb-2 transition-colors duration-500 ${
                activeCard === 1 ? 'text-white' : 'text-gray-200'
              }`}>Step 2: Privately Connects the Dots</h3>
              <p className={`text-sm mb-4 transition-colors duration-500 ${
                activeCard === 1 ? 'text-[#BE83FF]' : 'text-gray-400'
              }`}>On-device intelligence</p>
            </div>
            <div className="space-y-3">
              <p className={`leading-relaxed transition-colors duration-500 ${
                activeCard === 1 ? 'text-gray-100' : 'text-gray-300'
              }`}>
                All processing happens securely on your device. Our AI finds patterns and predicts your needs without your data ever leaving your phone.
              </p>
              <div className="pt-4">
                <div className={`w-full h-32 rounded-lg flex items-center justify-center transition-all duration-500 ${
                  activeCard === 1 
                    ? 'bg-gradient-to-r from-[#BE83FF]/20 via-[#E86CA0]/20 to-[#FF7A32]/20' 
                    : 'bg-gray-700/30'
                }`}>
                  <div className="relative w-24 h-24 flex items-center justify-center">
                    <Lock className={`w-8 h-8 transition-colors duration-500 ${
                      activeCard === 1 ? 'text-[#BE83FF]' : 'text-white/90'
                    }`} />
                    <div className={`absolute w-16 h-16 border-2 border-dashed rounded-full transition-all duration-500 ${
                      activeCard === 1 ? 'border-[#BE83FF]/50 animate-spin' : 'border-white/10'
                    }`}></div>
                    <div className={`absolute w-full h-full border-2 border-dashed rounded-full transition-all duration-500 ${
                      activeCard === 1 ? 'border-[#E86CA0]/30 animate-spin' : 'border-white/10'
                    }`} style={{ animationDirection: 'reverse', animationDuration: '3s' }}></div>
                  </div>
                </div>
                <div className="mt-3 text-center">
                  <TextShimmer 
                    className={`text-xs transition-colors duration-500 ${
                      activeCard === 1 ? 'text-[#BE83FF]' : 'text-gray-400'
                    }`}
                    duration={1.2}
                    as="div"
                  >
                    Processing securely...
                  </TextShimmer>
                </div>
              </div>
            </div>
            </div>
          </div>

          {/* Step 3: Act */}
          <div className={`relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-500 md:col-span-2 lg:col-span-1 ${
            activeCard === 2 
              ? 'scale-105 border-[#FF7A32]/50 shadow-2xl shadow-[#FF7A32]/20' 
              : 'border-gray-700/50 hover:border-gray-600/50'
          }`}>
            {/* Gradient background overlay */}
            <div className={`absolute inset-0 rounded-2xl transition-opacity duration-500 ${
              activeCard === 2 ? 'opacity-100' : 'opacity-0'
            }`}>
              <div className="absolute inset-0 bg-gradient-to-br from-[#E86CA0]/20 via-[#FF7A32]/10 to-transparent rounded-2xl animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-[#FF7A32]/5 to-[#E86CA0]/15 rounded-2xl"></div>
            </div>
            
            <div className="relative z-10">
            <div className="mb-6">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all duration-500 ${
                activeCard === 2 
                  ? 'bg-gradient-to-br from-[#E86CA0] to-[#FF7A32] shadow-lg shadow-[#FF7A32]/30' 
                  : 'bg-white/10'
              }`}>
                <Zap className={`w-6 h-6 transition-colors duration-500 ${
                  activeCard === 2 ? 'text-white' : 'text-white/70'
                }`} />
              </div>
              <h3 className={`text-xl font-semibold mb-2 transition-colors duration-500 ${
                activeCard === 2 ? 'text-white' : 'text-gray-200'
              }`}>Step 3: Surfaces the Perfect Action</h3>
              <p className={`text-sm mb-4 transition-colors duration-500 ${
                activeCard === 2 ? 'text-[#FF7A32]' : 'text-gray-400'
              }`}>Cards & actions</p>
            </div>
            <div className="space-y-3">
              <p className={`leading-relaxed transition-colors duration-500 ${
                activeCard === 2 ? 'text-gray-100' : 'text-gray-300'
              }`}>
                Forget searching. Horizon delivers the right information at the right moment, with one-tap buttons to join a call, track a package, or play your music.
              </p>
              <div className="pt-4">
                <div className={`transition-all duration-500 ${
                  activeCard === 2 ? 'transform scale-105' : ''
                }`}>
                  <NotificationCard 
                    title="Team Standup"
                    body="Starts in 15 minutes at 2:00 PM"
                    time="1:45 PM"
                    category="meeting"
                  />
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>

        {/* Flow Arrow (Optional) */}
        <div className="hidden lg:flex items-center justify-center mt-8 text-gray-500">
          <div className="flex items-center space-x-4">
            <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
            <div className="w-8 h-px bg-gray-500"></div>
            <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
            <div className="w-8 h-px bg-gray-500"></div>
            <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 