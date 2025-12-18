import React, { useState, useEffect } from 'react';
import { CONFERENCE_DETAILS } from '../constants';
import { CalendarIcon, MapPinIcon } from './Icons';

const Hero: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2026-03-06T09:00:00').getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    calculateTimeLeft(); // Initial calculation
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, []);

  const isUrgent = timeLeft.days === 0 && (timeLeft.hours > 0 || timeLeft.minutes > 0 || timeLeft.seconds > 0);

  const TimeBlock = ({ value, label }: { value: number, label: string }) => (
    <div className={`flex flex-col items-center bg-white border ${isUrgent ? 'border-red-400 shadow-[0_0_15px_rgba(239,68,68,0.3)]' : 'border-slate-200'} p-2 rounded-lg shadow-sm min-w-[64px] sm:min-w-[72px] transition-all duration-300`}>
      <span className={`text-xl sm:text-2xl font-bold ${isUrgent ? 'text-red-600 animate-pulse' : 'text-govt-blue'} font-mono leading-none`}>
        {value.toString().padStart(2, '0')}
      </span>
      <span className="text-xs sm:text-[10px] font-semibold text-slate-400 uppercase tracking-wider mt-1">
        {label}
      </span>
    </div>
  );

  return (
    <section id="home" className="relative bg-surface overflow-hidden min-h-screen flex items-center py-20 lg:py-0">
        {/* Modern Background Decorations */}
        <div className="absolute inset-0 z-0 bg-grid-pattern bg-[length:40px_40px] opacity-40"></div>
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-100 blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-orange-100 blur-3xl opacity-50"></div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 xl:gap-24">
                
                {/* Text Content */}
                <div className="flex-1 text-center lg:text-left w-full lg:w-1/2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-white border border-slate-200 shadow-sm">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-govt-accent opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-govt-accent"></span>
                        </span>
                        <span className="text-xs font-bold tracking-widest uppercase text-slate-500">ORSI Indore Chapter</span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black text-govt-navy leading-tight mb-4 font-serif tracking-tight">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-govt-navy via-govt-blue to-govt-navy">
                            {CONFERENCE_DETAILS.acronym}
                        </span>
                    </h1>
                    
                    <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-slate-600 mb-4 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                         {CONFERENCE_DETAILS.titleMain}
                    </h2>

                    {/* Added Subheading */}
                    <p className="text-base md:text-lg font-medium text-govt-accent mb-6 text-center">
                        &
                    </p>

                    <p className="text-sm md:text-base text-slate-500 mb-8 italic border-l-4 border-govt-accent pl-4 lg:ml-0 inline-block lg:block text-left bg-white/50 lg:bg-transparent p-2 lg:p-0 rounded lg:rounded-none">
                         {CONFERENCE_DETAILS.subEvent}
                    </p>

                    {/* Countdown Timer */}
                    <div className="mb-8 flex flex-wrap justify-center lg:justify-start gap-3">
                        <div className={`flex items-center gap-2 text-xs font-bold ${isUrgent ? 'text-red-600' : 'text-govt-navy'} uppercase tracking-widest mr-2 lg:hidden w-full justify-center`}>
                           <span>Event Starts In</span>
                        </div>
                        <TimeBlock value={timeLeft.days} label="Days" />
                        <TimeBlock value={timeLeft.hours} label="Hours" />
                        <TimeBlock value={timeLeft.minutes} label="Mins" />
                        <TimeBlock value={timeLeft.seconds} label="Secs" />
                    </div>

                    <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                         {/* Updated Registration Button with better responsiveness */}
                         <a href="/Brochure.pdf" download="ICAORFDI-2026-Brochure.pdf" className="bg-govt-accent hover:bg-orange-700 text-white px-8 py-3.5 rounded-xl font-bold text-lg shadow-xl shadow-orange-500/20 transition-all transform hover:-translate-y-1 hover:scale-105 text-center w-full sm:w-auto sm:min-w-[180px] flex items-center justify-center">
                            Download Brochure <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                         </a>
                         <a href="#contact" className="bg-white hover:bg-slate-50 text-govt-navy border border-slate-200 px-8 py-3.5 rounded-xl font-bold text-lg shadow-md transition-all hover:border-govt-blue w-full sm:w-auto sm:min-w-[180px] text-center">
                            Contact Us
                         </a>
                    </div>
                </div>

                {/* Right Side Visuals */}
                <div className="w-full lg:w-1/2 relative mt-8 lg:mt-0 flex justify-center lg:justify-end">
                    {/* Main Visual Card */}
                    <div className="relative w-full max-w-lg lg:max-w-xl pb-8 pt-8">
                        {/* Card Container with Rotation */}
                        <div className="relative bg-white p-2 rounded-[2rem] shadow-2xl transform rotate-1 transition-transform duration-500 hover:rotate-0 z-20 aspect-[4/3] overflow-hidden border border-slate-100">
                             {/* College Image */}
                             <img 
                                src="/college_image.jpg"
                                alt="Govt. Holkar Science College"
                                className="w-full h-full object-cover rounded-[1.5rem]"
                             />
                             <div className="absolute inset-0 bg-gradient-to-t from-govt-navy/20 to-transparent rounded-[1.5rem]"></div>
                        </div>

                        {/* Floating Info Cards */}
                        <div className="absolute -bottom-4 -left-2 sm:-bottom-8 sm:-left-6 bg-white p-4 sm:p-5 rounded-2xl shadow-xl border border-slate-100 min-w-[180px] text-left z-30 animate-fade-in-up">
                            <div className="flex items-center gap-3">
                                <div className="bg-blue-50 p-2.5 rounded-xl text-govt-blue">
                                    <CalendarIcon className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Save the Date</p>
                                    <p className="text-sm font-bold text-govt-navy whitespace-nowrap">{CONFERENCE_DETAILS.date}</p>
                                </div>
                            </div>
                        </div>

                        {/* Location Card - Clickable Map Link */}
                        <a 
                            href="https://maps.app.goo.gl/sZ6dZiF9nX3BJ5DV8"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute -top-4 -right-2 sm:-top-8 sm:-right-6 bg-white p-3 sm:p-5 rounded-2xl shadow-xl border border-slate-100 min-w-[180px] sm:min-w-[200px] max-w-[250px] sm:max-w-[280px] text-left z-30 animate-fade-in-down delay-100 hover:scale-105 hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                        >
                            <div className="flex items-center gap-3">
                                <div className="bg-orange-50 p-2.5 rounded-xl text-govt-accent group-hover:bg-govt-accent group-hover:text-white transition-colors">
                                    <MapPinIcon className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-0.5">Conference Venue</p>
                                    <p className="text-xs sm:text-sm font-bold text-govt-navy leading-tight">
                                        {CONFERENCE_DETAILS.venue}
                                    </p>
                                </div>
                            </div>
                        </a>

                         {/* Decorative Background Blob */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gradient-to-br from-blue-100/40 via-purple-100/30 to-orange-100/40 rounded-full blur-3xl -z-10"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Hero;