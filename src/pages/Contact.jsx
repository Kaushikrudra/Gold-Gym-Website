import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import SEO from '../components/SEO';
import BookingForm from '../components/BookingForm';
import FAQAccordion from '../components/FAQAccordion';

const ContactPage = () => {
  const [activeTab, setActiveTab] = useState('message'); // 'message' | 'booking'
  const [msgSuccess, setMsgSuccess] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    setMsgSuccess(true);
    setTimeout(() => {
      setMsgSuccess(false);
      e.target.reset();
    }, 4000);
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5 text-gold-primary" />,
      title: 'LOCATION',
      detail: '102 FIT STREET, METROPOLIS, NY 10001'
    },
    {
      icon: <Phone className="w-5 h-5 text-gold-primary" />,
      title: 'PHONE NUMBER',
      detail: '+1 (555) 234-5678'
    },
    {
      icon: <Mail className="w-5 h-5 text-gold-primary" />,
      title: 'EMAIL ADDRESS',
      detail: 'support@goldgym.com'
    }
  ];

  return (
    <div className="bg-bg-primary text-white min-h-screen">
      {/* SEO Title & Tags */}
      <SEO 
        title="Contact Us" 
        description="Reach out to Gold Gym in Metropolis. Use our online scheduler to book a free personal training trial or message our team today." 
      />

      {/* a) PAGE HERO BANNER */}
      <section className="relative py-28 bg-bg-secondary flex items-center justify-center overflow-hidden border-b border-gold-dark/20">
        <div 
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, #FFD700 0%, transparent 60%)'
          }}
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl sm:text-6xl font-black text-stroke-gold-thick uppercase tracking-widest mb-4">
            CONTACT
          </h1>
          <div className="flex justify-center items-center gap-2 text-sm font-bold tracking-widest uppercase">
            <Link to="/" className="text-text-body hover:text-gold-primary transition-colors">
              HOME
            </Link>
            <span className="text-gold-dark">/</span>
            <span className="text-gold-primary">CONTACT</span>
          </div>
        </div>
      </section>

      {/* b) 2-COLUMN LAYOUT */}
      <section className="py-24 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Column: Form Container with Tabs */}
            <div className="bg-bg-secondary border border-gold-dark/15 p-8 sm:p-10 text-left relative overflow-hidden">
              
              {/* Tab Header Selector */}
              <div className="flex border-b border-gold-dark/15 pb-6 mb-8">
                <button
                  type="button"
                  onClick={() => setActiveTab('message')}
                  className={`flex-1 text-center py-2.5 text-xs font-black tracking-widest uppercase transition-all duration-300 ${
                    activeTab === 'message' 
                      ? 'bg-gold-primary text-black' 
                      : 'border border-gold-primary/30 text-gold-primary hover:bg-gold-primary/5'
                  }`}
                >
                  SEND A MESSAGE
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('booking')}
                  className={`flex-1 text-center py-2.5 text-xs font-black tracking-widest uppercase transition-all duration-300 ml-4 ${
                    activeTab === 'booking' 
                      ? 'bg-gold-primary text-black' 
                      : 'border border-gold-primary/30 text-gold-primary hover:bg-gold-primary/5'
                  }`}
                >
                  BOOK A TRIAL
                </button>
              </div>

              {activeTab === 'message' ? (
                /* Tab 1: Email message form */
                <form onSubmit={handleMessageSubmit} className="space-y-6">
                  <div>
                    <label className="block text-[10px] font-bold text-gold-primary tracking-widest uppercase mb-2">
                      YOUR NAME
                    </label>
                    <input 
                      type="text" 
                      placeholder="ENTER YOUR NAME"
                      className="w-full bg-bg-primary border border-gold-dark/20 px-4 py-3 text-xs text-white tracking-widest rounded-none focus:outline-none focus:border-gold-primary transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-gold-primary tracking-widest uppercase mb-2">
                      YOUR EMAIL
                    </label>
                    <input 
                      type="email" 
                      placeholder="ENTER YOUR EMAIL"
                      className="w-full bg-bg-primary border border-gold-dark/20 px-4 py-3 text-xs text-white tracking-widest rounded-none focus:outline-none focus:border-gold-primary transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-gold-primary tracking-widest uppercase mb-2">
                      SUBJECT
                    </label>
                    <input 
                      type="text" 
                      placeholder="ENTER MESSAGE SUBJECT"
                      className="w-full bg-bg-primary border border-gold-dark/20 px-4 py-3 text-xs text-white tracking-widest rounded-none focus:outline-none focus:border-gold-primary transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-gold-primary tracking-widest uppercase mb-2">
                      MESSAGE
                    </label>
                    <textarea 
                      rows="5"
                      placeholder="WRITE YOUR MESSAGE HERE..."
                      className="w-full bg-bg-primary border border-gold-dark/20 px-4 py-3 text-xs text-white tracking-widest rounded-none focus:outline-none focus:border-gold-primary transition-colors resize-none"
                      required
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full py-4 text-xs font-bold tracking-widest text-black bg-gold-primary hover:bg-gold-accent transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    SEND MESSAGE
                  </button>
                </form>
              ) : (
                /* Tab 2: Scheduler Booking form */
                <BookingForm />
              )}

              {/* Message Success Toast overlay */}
              {activeTab === 'message' && msgSuccess && (
                <div className="absolute inset-0 bg-black/90 flex items-center justify-center border border-gold-primary p-6 animate-fade-in z-20">
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full border border-gold-primary flex items-center justify-center mx-auto mb-4 bg-gold-primary/10">
                      <svg className="w-6 h-6 text-gold-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-sm font-black text-white tracking-widest uppercase mb-2">
                      MESSAGE SENT
                    </p>
                    <p className="text-xs text-text-body leading-relaxed max-w-xs mx-auto">
                      Thanks for reaching out! Our support representatives will respond shortly.
                    </p>
                  </div>
                </div>
              )}

            </div>

            {/* Right Column: Contact Info Cards + Map */}
            <div className="space-y-8 text-left">
              <h3 className="text-2xl font-black text-white uppercase tracking-wider mb-8">
                GET IN <span className="text-gold-primary">TOUCH</span>
              </h3>

              {/* Info cards list */}
              <div className="space-y-4">
                {contactInfo.map((info, idx) => (
                  <div key={idx} className="flex items-center gap-4 bg-bg-secondary p-4 border border-gold-dark/10">
                    <div className="w-10 h-10 rounded-full border border-gold-primary/30 flex items-center justify-center bg-bg-primary flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-[10px] font-black text-gold-primary tracking-widest uppercase">
                        {info.title}
                      </h4>
                      <p className="text-white text-xs sm:text-sm font-bold mt-0.5">
                        {info.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Dark Google Map Iframe */}
              <div className="w-full border border-gold-dark/20 aspect-video relative overflow-hidden bg-bg-secondary">
                <iframe
                  src="https://www.google.com/maps?q=102+Fit+Street,+Metropolis,+NY+10001&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Gold Gym Location"
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Reusable Accordion component placed at bottom of contact */}
      <section className="py-20 bg-bg-secondary border-t border-gold-dark/15">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black uppercase tracking-wider">
              CONTACT & SUPPORT <span className="text-gold-primary">FAQS</span>
            </h2>
            <div className="w-16 h-[2px] bg-gold-primary mx-auto mt-3" />
          </div>

          <FAQAccordion />
        </div>
      </section>

    </div>
  );
};

export default ContactPage;
