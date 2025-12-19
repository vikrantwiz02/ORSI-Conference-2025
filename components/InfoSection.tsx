import React from 'react';

interface InfoSectionProps {
  id: string;
  title: string;
  content: string;
  imageSrc: string;
  isReversed?: boolean;
  accentColor?: 'blue' | 'orange';
  imageContain?: boolean;
}

const InfoSection: React.FC<InfoSectionProps> = ({ id, title, content, imageSrc, isReversed = false, accentColor = 'blue', imageContain = false }) => {
  const isBlue = accentColor === 'blue';
  
  return (
    <section id={id} className="py-16 lg:py-24 relative overflow-hidden">
        {/* Background blobs based on alignment */}
        <div className={`absolute top-0 w-full h-full z-0 ${isReversed ? 'bg-white' : 'bg-surface'}`}></div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`flex flex-col lg:flex-row items-center gap-16 ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
            
            {/* Image Side */}
            <div className="w-full lg:w-1/2 group">
                <div className="relative">
                    {/* Decorative Frame */}
                    <div className={`absolute -inset-4 rounded-3xl opacity-20 transition-transform duration-500 group-hover:scale-105 ${isBlue ? 'bg-govt-blue' : 'bg-govt-accent'}`}></div>
                    <div className={`absolute -bottom-6 -right-6 w-32 h-32 rounded-full z-0 opacity-10 ${isBlue ? 'bg-govt-navy' : 'bg-orange-600'}`}></div>
                    
                    <img 
                        src={imageSrc} 
                        alt={title} 
                        className={`relative z-10 rounded-2xl shadow-xl w-full h-72 md:h-96 transform transition-transform duration-500 group-hover:-translate-y-2 ${imageContain ? 'object-contain bg-white p-6' : 'object-cover'}`}
                    />
                </div>
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-3 mb-6">
                    <span className={`h-px w-8 ${isBlue ? 'bg-govt-blue' : 'bg-govt-accent'}`}></span>
                    <span className={`text-xs font-bold tracking-widest uppercase ${isBlue ? 'text-govt-blue' : 'text-govt-accent'}`}>
                        About the Organizers
                    </span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-govt-navy mb-8 leading-tight">
                    {title}
                </h2>
                
                <div className="prose prose-lg text-slate-600 text-justify leading-relaxed">
                    <p>{content}</p>
                </div>

                <button className={`mt-8 flex items-center gap-2 text-sm font-bold border-b-2 pb-1 transition-all ${isBlue ? 'text-govt-blue border-govt-blue hover:text-blue-700' : 'text-govt-accent border-govt-accent hover:text-orange-700'}`}>
                    Read More 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </button>
            </div>
            </div>
        </div>
    </section>
  );
};

export default InfoSection;