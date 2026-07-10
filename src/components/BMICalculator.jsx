import React, { useState } from 'react';

const BMICalculator = () => {
  const [unit, setUnit] = useState('metric'); // 'metric' | 'imperial'
  const [heightCm, setHeightCm] = useState('');
  const [weightKg, setWeightKg] = useState('');
  const [heightFt, setHeightFt] = useState('');
  const [heightIn, setHeightIn] = useState('');
  const [weightLbs, setWeightLbs] = useState('');
  const [bmiResult, setBmiResult] = useState(null);
  const [category, setCategory] = useState('');
  const [badgeColor, setBadgeColor] = useState('');

  const calculateBMI = (e) => {
    e.preventDefault();
    let bmi = 0;

    if (unit === 'metric') {
      const heightM = parseFloat(heightCm) / 100;
      const weight = parseFloat(weightKg);
      if (heightM > 0 && weight > 0) {
        bmi = weight / (heightM * heightM);
      }
    } else {
      const feet = parseFloat(heightFt) || 0;
      const inches = parseFloat(heightIn) || 0;
      const totalInches = (feet * 12) + inches;
      const weight = parseFloat(weightLbs);
      if (totalInches > 0 && weight > 0) {
        bmi = (weight / (totalInches * totalInches)) * 703;
      }
    }

    if (bmi > 0) {
      const finalBmi = parseFloat(bmi.toFixed(1));
      setBmiResult(finalBmi);
      determineCategory(finalBmi);
    }
  };

  const determineCategory = (bmi) => {
    if (bmi < 18.5) {
      setCategory('UNDERWEIGHT');
      setBadgeColor('bg-blue-950 text-blue-400 border-blue-500');
    } else if (bmi >= 18.5 && bmi < 25) {
      setCategory('NORMAL WEIGHT');
      setBadgeColor('bg-green-950 text-green-400 border-green-500');
    } else if (bmi >= 25 && bmi < 30) {
      setCategory('OVERWEIGHT');
      setBadgeColor('bg-amber-950 text-amber-400 border-amber-500');
    } else {
      setCategory('OBESE');
      setBadgeColor('bg-red-950 text-red-400 border-red-500');
    }
  };

  // Map BMI of 15 to 40 into 0% to 100% for progress slider
  const getMarkerPosition = () => {
    if (!bmiResult) return 0;
    const minBmi = 15;
    const maxBmi = 40;
    const percentage = ((bmiResult - minBmi) / (maxBmi - minBmi)) * 100;
    return Math.min(Math.max(percentage, 0), 100);
  };

  return (
    <section className="py-24 bg-bg-primary relative overflow-hidden border-t border-gold-dark/15">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-wider text-white">
            BMI <span className="text-gold-primary">CALCULATOR</span>
          </h2>
          <p className="text-text-body text-xs sm:text-sm mt-3 max-w-md mx-auto">
            Calculate your Body Mass Index (BMI) instantly to help track your fitness objectives.
          </p>
        </div>

        {/* Content Box */}
        <div className="bg-bg-secondary border border-gold-dark/20 p-8 sm:p-12">
          <form onSubmit={calculateBMI} className="space-y-8">
            {/* Unit Toggle */}
            <div className="flex justify-center border-b border-gold-dark/10 pb-6">
              <button
                type="button"
                onClick={() => { setUnit('metric'); setBmiResult(null); }}
                className={`px-6 py-2.5 text-xs font-black tracking-widest transition-all ${
                  unit === 'metric' ? 'bg-gold-primary text-black' : 'border border-gold-primary text-gold-primary hover:bg-gold-primary/10'
                }`}
              >
                METRIC (KG/CM)
              </button>
              <button
                type="button"
                onClick={() => { setUnit('imperial'); setBmiResult(null); }}
                className={`ml-4 px-6 py-2.5 text-xs font-black tracking-widest transition-all ${
                  unit === 'imperial' ? 'bg-gold-primary text-black' : 'border border-gold-primary text-gold-primary hover:bg-gold-primary/10'
                }`}
              >
                IMPERIAL (LBS/FT-IN)
              </button>
            </div>

            {/* Input fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {unit === 'metric' ? (
                <>
                  <div>
                    <label className="block text-[10px] font-bold text-gold-primary tracking-widest uppercase mb-2 text-left">
                      HEIGHT (CM)
                    </label>
                    <input
                      type="number"
                      placeholder="e.g. 175"
                      value={heightCm}
                      onChange={(e) => setHeightCm(e.target.value)}
                      required
                      min="100"
                      max="250"
                      className="w-full bg-bg-primary border border-gold-dark/20 px-4 py-3 text-xs text-white tracking-widest rounded-none focus:outline-none focus:border-gold-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-gold-primary tracking-widest uppercase mb-2 text-left">
                      WEIGHT (KG)
                    </label>
                    <input
                      type="number"
                      placeholder="e.g. 70"
                      value={weightKg}
                      onChange={(e) => setWeightKg(e.target.value)}
                      required
                      min="30"
                      max="200"
                      className="w-full bg-bg-primary border border-gold-dark/20 px-4 py-3 text-xs text-white tracking-widest rounded-none focus:outline-none focus:border-gold-primary"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <label className="block text-[10px] font-bold text-gold-primary tracking-widest uppercase mb-2 text-left">
                      HEIGHT
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="number"
                        placeholder="FT"
                        value={heightFt}
                        onChange={(e) => setHeightFt(e.target.value)}
                        required
                        min="3"
                        max="8"
                        className="w-full bg-bg-primary border border-gold-dark/20 px-4 py-3 text-xs text-white tracking-widest rounded-none focus:outline-none focus:border-gold-primary"
                      />
                      <input
                        type="number"
                        placeholder="IN"
                        value={heightIn}
                        onChange={(e) => setHeightIn(e.target.value)}
                        required
                        min="0"
                        max="11"
                        className="w-full bg-bg-primary border border-gold-dark/20 px-4 py-3 text-xs text-white tracking-widest rounded-none focus:outline-none focus:border-gold-primary"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-gold-primary tracking-widest uppercase mb-2 text-left">
                      WEIGHT (LBS)
                    </label>
                    <input
                      type="number"
                      placeholder="e.g. 150"
                      value={weightLbs}
                      onChange={(e) => setWeightLbs(e.target.value)}
                      required
                      min="50"
                      max="500"
                      className="w-full bg-bg-primary border border-gold-dark/20 px-4 py-3 text-xs text-white tracking-widest rounded-none focus:outline-none focus:border-gold-primary"
                    />
                  </div>
                </>
              )}
            </div>

            {/* Calculate Button */}
            <div className="text-center">
              <button
                type="submit"
                className="px-10 py-4 text-xs font-bold tracking-widest text-black bg-gold-primary hover:bg-gold-accent transition-all duration-300 transform hover:-translate-y-0.5"
              >
                CALCULATE BMI
              </button>
            </div>
          </form>

          {/* Results Display */}
          {bmiResult !== null && (
            <div className="mt-12 pt-10 border-t border-gold-dark/15 text-center animate-fade-in">
              <p className="text-xs font-bold text-text-body tracking-wider uppercase mb-1">
                YOUR BMI IS
              </p>
              
              <div className="text-5xl font-black text-gold-primary tracking-tighter mb-4">
                {bmiResult}
              </div>

              {/* Category Badge */}
              <div className={`inline-block border px-4 py-1.5 text-xs font-black tracking-widest mb-8 ${badgeColor}`}>
                {category}
              </div>

              {/* Progress Meter Bar */}
              <div className="max-w-md mx-auto relative pt-4 pb-8">
                {/* Horizontal Bar with ranges */}
                <div className="h-2 w-full bg-bg-primary flex overflow-hidden">
                  <div className="h-full w-[14%] bg-blue-500/80" title="Underweight (< 18.5)" />
                  <div className="h-full w-[26%] bg-green-500/80" title="Normal (18.5 - 24.9)" />
                  <div className="h-full w-[20%] bg-amber-500/80" title="Overweight (25 - 29.9)" />
                  <div className="h-full w-[40%] bg-red-500/80" title="Obese (>= 30)" />
                </div>

                {/* Range markers */}
                <div className="flex justify-between text-[9px] font-bold text-text-body/60 mt-2 tracking-widest">
                  <span>15</span>
                  <span>18.5</span>
                  <span>25</span>
                  <span>30</span>
                  <span>40</span>
                </div>

                {/* Needle Cursor Indicator */}
                <div 
                  className="absolute top-2 w-[3px] h-4 bg-white shadow-lg transition-all duration-500"
                  style={{ left: `${getMarkerPosition()}%`, transform: 'translateX(-50%)' }}
                >
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 border-t-4 border-t-white border-x-4 border-x-transparent" />
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default BMICalculator;
