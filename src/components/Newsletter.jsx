import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => {
        setSubscribed(false);
      }, 5000);
    }
  };

  return (
    <section className="py-16 bg-bg-secondary relative border-t border-b border-gold-dark/15 overflow-hidden">
      {/* Background flare */}
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-gold-primary/5 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-widest mb-2">
          STAY UPDATED
        </h3>
        <p className="text-text-body text-xs sm:text-sm mb-8 tracking-wider">
          Get fitness tips and exclusive offers straight to your inbox
        </p>

        {subscribed ? (
          <div className="max-w-md mx-auto bg-gold-primary/10 border border-gold-primary py-4 px-6 text-gold-primary text-xs font-black tracking-widest uppercase animate-fade-in">
            Thanks for subscribing! Check your inbox soon.
          </div>
        ) : (
          <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="ENTER YOUR EMAIL"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow bg-bg-primary border border-gold-dark/20 px-4 py-3 text-xs text-white tracking-widest rounded-none focus:outline-none focus:border-gold-primary transition-colors"
              required
            />
            <button
              type="submit"
              className="bg-gold-primary text-black font-black text-xs tracking-widest px-8 py-3 hover:bg-gold-accent transition-colors duration-300 rounded-none whitespace-nowrap"
            >
              SUBSCRIBE
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
