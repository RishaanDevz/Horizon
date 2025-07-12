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
          <div className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 ${
            activeCard === 0 ? 'scale-105 border-gray-500/70 shadow-2xl' : ''
          }`}>
            {/* Animated gradient background */}
            <div className={`absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 ${
              activeCard === 0 ? 'opacity-20' : ''
            }`} style={{
              background: 'linear-gradient(135deg, #3892FF/20, #BE83FF/20, #E86CA0/20)',
              backgroundSize: '200% 200%',
              animation: activeCard === 0 ? 'gradientShift 3s ease-in-out infinite' : 'none'
            }}></div>
            
            <div className="relative z-10">
              <div className="mb-6">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4">
                  <Radar className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Step 1: Understands Your World</h3>
                <p className="text-gray-400 text-sm mb-4">Tunes into your context</p>
              </div>
              <div className="space-y-3">
                <p className="text-gray-300 leading-relaxed">
                  Horizon tunes into your phone's unique context—your calendar, location, and connections—to see what's happening now and anticipate what's next.
                </p>
                <div className="pt-4">
                  <div className="w-full h-32 bg-gray-700/30 rounded-lg flex items-center justify-center gap-6">
                    <Calendar className="w-6 h-6 text-white/70 animate-pulse" />
                    <MapPin className="w-6 h-6 text-white/70 animate-pulse" style={{ animationDelay: '0.15s' }} />
                    <Bluetooth className="w-6 h-6 text-white/70 animate-pulse" style={{ animationDelay: '0.3s' }} />
                    <Bell className="w-6 h-6 text-white/70 animate-pulse" style={{ animationDelay: '0.5s' }} />
                  </div>
                  <div className="mt-3 text-center">
                    <TextShimmer 
                      className="text-xs text-gray-400" 
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
          <div className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 ${
            activeCard === 1 ? 'scale-105 border-gray-500/70 shadow-2xl' : ''
          }`}>
            <div className="mb-6">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Step 2: Privately Connects the Dots</h3>
              <p className="text-gray-400 text-sm mb-4">On-device intelligence</p>
            </div>
            <div className="space-y-3">
              <p className="text-gray-300 leading-relaxed">
                All processing happens securely on your device. Our AI finds patterns and predicts your needs without your data ever leaving your phone.
              </p>
              <div className="pt-4">
                <div className="w-full h-32 bg-gray-700/30 rounded-lg flex items-center justify-center">
                  <div className="relative w-24 h-24 flex items-center justify-center">
                    <Lock className="w-8 h-8 text-white/90" />
                    <div className="absolute w-16 h-16 border-2 border-dashed border-white/10 rounded-full"></div>
                    <div className="absolute w-full h-full border-2 border-dashed border-white/10 rounded-full"></div>
                  </div>
                </div>
                <div className="mt-3 text-center">
                  <TextShimmer 
                    className="text-xs text-gray-400" 
                    duration={1.2}
                    as="div"
                  >
                    Processing securely...
                  </TextShimmer>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3: Act */}
          <div className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 md:col-span-2 lg:col-span-1 ${
            activeCard === 2 ? 'scale-105 border-gray-500/70 shadow-2xl' : ''
          }`}>
            <div className="mb-6">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Step 3: Surfaces the Perfect Action</h3>
              <p className="text-gray-400 text-sm mb-4">Cards & actions</p>
            </div>
            <div className="space-y-3">
              <p className="text-gray-300 leading-relaxed">
                Forget searching. Horizon delivers the right information at the right moment, with one-tap buttons to join a call, track a package, or play your music.
              </p>
              <div className="pt-4">
                <div className={`transition-all duration-500 ${
                  activeCard === 2 ? 'animate-pulse' : ''
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