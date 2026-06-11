import React from 'react';

function SectionHeader({ eyebrow, title, subtitle, centered = true }) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      {eyebrow && (
        <span className="inline-block text-teal-600 text-xs font-bold uppercase tracking-widest mb-3">
          {eyebrow}
        </span>
      )}

      <h2 className="text-3xl sm:text-4xl font-bold text-navy-800 leading-tight mb-4">
        {title}
      </h2>
      
      {subtitle && (
        <p
          className={`text-gray-500 text-base leading-relaxed max-w-2xl ${
            centered ? 'mx-auto' : ''
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
export default SectionHeader;
