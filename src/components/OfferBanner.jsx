import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

const OfferBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Check if dismissed in this session
    const isDismissed = sessionStorage.getItem('offer_banner_dismissed');
    if (!isDismissed) {
      setIsVisible(true);
    }

    const getEndOfMonth = () => {
      const now = new Date();
      // Year, Month + 1, Day 0 returns the last day of the current month
      return new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59, 999);
    };

    const calculateTimeLeft = () => {
      const difference = +getEndOfMonth() - +new Date();
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem('offer_banner_dismissed', 'true');
  };

  if (!isVisible) return null;

  // Formatting utility to pad zeros
  const padZero = (num) => String(num).padStart(2, '0');

  return (
    <div className="w-full bg-gold-primary text-black py-1.5 px-4 flex flex-wrap items-center justify-between gap-4 z-[60] relative shadow-md select-none">
      
      {/* Banner Text + Countdown Timer */}
      <div className="flex-1 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-center text-xs font-black tracking-widest uppercase">
        <span className="flex items-center gap-1.5 animate-pulse">
          🔥 LIMITED TIME: 20% OFF ALL MEMBERSHIPS THIS MONTH
        </span>
        
        {/* Countdown */}
        <div className="flex items-center gap-1 font-mono text-xs bg-black/10 px-2 py-0.5 rounded-sm border border-black/5">
          <span>{padZero(timeLeft.days)}D</span>:
          <span>{padZero(timeLeft.hours)}H</span>:
          <span>{padZero(timeLeft.minutes)}M</span>:
          <span>{padZero(timeLeft.seconds)}S</span>
        </div>
      </div>

      {/* Button & Dismiss Icon */}
      <div className="flex items-center gap-3">
        <Link
          to="/pricing"
          className="bg-black text-white hover:bg-white hover:text-black text-[9px] font-black tracking-widest px-3 py-1 transition-colors duration-300"
        >
          CLAIM OFFER
        </Link>
        <button
          onClick={handleDismiss}
          className="text-black/70 hover:text-black p-0.5"
          aria-label="Dismiss banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};

export default OfferBanner;
