import React, { useState } from 'react';

const BookingForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [trainer, setTrainer] = useState('Any Available Trainer');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('Morning 6-9AM');
  const [sessionType, setSessionType] = useState('Personal Training');
  const [toastMessage, setToastMessage] = useState('');

  // Get today's date formatted as YYYY-MM-DD for date-picker min value
  const getTodayDateString = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    return `${yyyy}-${mm}-${dd}`;
  };

  const handleBooking = (e) => {
    e.preventDefault();

    // Custom Validation Checks
    const phonePattern = /^[0-9\-\+\s]{10,15}$/;
    if (!phonePattern.test(phone)) {
      alert("Please enter a valid phone number (10 to 15 digits).");
      return;
    }

    // Success state
    setToastMessage("Booking request received! We'll confirm within 24 hours.");

    // Reset Form after delay
    setTimeout(() => {
      setName('');
      setPhone('');
      setEmail('');
      setTrainer('Any Available Trainer');
      setDate('');
      setTimeSlot('Morning 6-9AM');
      setSessionType('Personal Training');
      setToastMessage('');
    }, 4000);
  };

  const trainersList = [
    'Any Available Trainer',
    'Vikram Singh (Strength & Conditioning)',
    'Ananya Reddy (Weight Loss)',
    'Karan Mehta (Bodybuilding)',
    'Simran Kaur (Group Fitness)'
  ];

  return (
    <div className="relative">
      <form onSubmit={handleBooking} className="space-y-6">
        {/* Name */}
        <div>
          <label className="block text-[10px] font-bold text-gold-primary tracking-widest uppercase mb-2">
            YOUR NAME
          </label>
          <input
            type="text"
            placeholder="ENTER YOUR NAME"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-bg-primary border border-gold-dark/20 px-4 py-3 text-xs text-white tracking-widest rounded-none focus:outline-none focus:border-gold-primary"
            required
          />
        </div>

        {/* Email & Phone grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-[10px] font-bold text-gold-primary tracking-widest uppercase mb-2">
              YOUR EMAIL
            </label>
            <input
              type="email"
              placeholder="ENTER YOUR EMAIL"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-bg-primary border border-gold-dark/20 px-4 py-3 text-xs text-white tracking-widest rounded-none focus:outline-none focus:border-gold-primary"
              required
            />
          </div>
          <div>
            <label className="block text-[10px] font-bold text-gold-primary tracking-widest uppercase mb-2">
              PHONE NUMBER
            </label>
            <input
              type="tel"
              placeholder="ENTER PHONE NUMBER"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full bg-bg-primary border border-gold-dark/20 px-4 py-3 text-xs text-white tracking-widest rounded-none focus:outline-none focus:border-gold-primary"
              required
            />
          </div>
        </div>

        {/* Trainer & Date Selectors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-[10px] font-bold text-gold-primary tracking-widest uppercase mb-2">
              SELECT TRAINER
            </label>
            <select
              value={trainer}
              onChange={(e) => setTrainer(e.target.value)}
              className="w-full bg-bg-primary border border-gold-dark/20 px-4 py-3 text-xs text-text-body tracking-wider rounded-none focus:outline-none focus:border-gold-primary"
            >
              {trainersList.map((t, idx) => (
                <option key={idx} value={t} className="bg-bg-secondary text-white">
                  {t}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-[10px] font-bold text-gold-primary tracking-widest uppercase mb-2">
              SELECT DATE
            </label>
            <input
              type="date"
              min={getTodayDateString()}
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full bg-bg-primary border border-gold-dark/20 px-4 py-3 text-xs text-text-body tracking-wider rounded-none focus:outline-none focus:border-gold-primary"
              required
            />
          </div>
        </div>

        {/* Time Slot Selector */}
        <div>
          <label className="block text-[10px] font-bold text-gold-primary tracking-widest uppercase mb-2">
            SELECT TIME SLOT
          </label>
          <select
            value={timeSlot}
            onChange={(e) => setTimeSlot(e.target.value)}
            className="w-full bg-bg-primary border border-gold-dark/20 px-4 py-3 text-xs text-text-body tracking-wider rounded-none focus:outline-none focus:border-gold-primary"
          >
            <option value="Morning 6-9AM" className="bg-bg-secondary text-white">Morning (6:00 AM - 9:00 AM)</option>
            <option value="Afternoon 12-3PM" className="bg-bg-secondary text-white">Afternoon (12:00 PM - 3:00 PM)</option>
            <option value="Evening 5-8PM" className="bg-bg-secondary text-white">Evening (5:00 PM - 8:00 PM)</option>
          </select>
        </div>

        {/* Session Type Radios */}
        <div>
          <label className="block text-[10px] font-bold text-gold-primary tracking-widest uppercase mb-3">
            SESSION TYPE
          </label>
          <div className="flex gap-8">
            <label className="flex items-center text-xs font-bold tracking-widest text-white cursor-pointer select-none">
              <input
                type="radio"
                name="sessionType"
                checked={sessionType === 'Personal Training'}
                onChange={() => setSessionType('Personal Training')}
                className="mr-2 accent-gold-primary"
              />
              PERSONAL TRAINING
            </label>
            <label className="flex items-center text-xs font-bold tracking-widest text-white cursor-pointer select-none">
              <input
                type="radio"
                name="sessionType"
                checked={sessionType === 'Group Training'}
                onChange={() => setSessionType('Group Training')}
                className="mr-2 accent-gold-primary"
              />
              GROUP TRAINING
            </label>
          </div>
        </div>

        {/* Book Button */}
        <button
          type="submit"
          className="w-full py-4 text-xs font-bold tracking-widest text-black bg-gold-primary hover:bg-gold-accent transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
        >
          BOOK TRIAL SESSION
        </button>
      </form>

      {/* Success Toast */}
      {toastMessage && (
        <div className="absolute inset-0 bg-black/90 flex items-center justify-center border border-gold-primary p-6 animate-fade-in z-20">
          <div className="text-center">
            <div className="w-12 h-12 rounded-full border border-gold-primary flex items-center justify-center mx-auto mb-4 bg-gold-primary/10">
              <svg className="w-6 h-6 text-gold-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-sm font-black text-white tracking-widest uppercase mb-2">
              BOOKING SUCCESSFUL
            </p>
            <p className="text-xs text-text-body leading-relaxed max-w-xs mx-auto">
              {toastMessage}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingForm;
