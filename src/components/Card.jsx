import React from 'react';
import { ArrowRight } from 'lucide-react';

function Card({
  icon: Icon,
  logo,
  title,
  description,
  onViewMore,
  variant = 'default',
}) {
  if (variant === 'company') {
    return (
      <div className="group bg-white rounded-2xl border border-gray-100 p-6 flex flex-col">
        <div className="w-12 h-12 rounded-xl bg-marine-50 flex items-center justify-center mb-4">
          {logo ? (
            <img src={logo} alt={title} className="w-8 h-8 object-contain" />
          ) : (
            Icon && <Icon className="w-6 h-6 text-navy-600" />
          )}
        </div>
        <h3 className="text-navy-800 font-bold text-lg mb-2">{title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed flex-grow mb-5">
          {description}
        </p>
        <button
          onClick={onViewMore}
          className="inline-flex items-center gap-1.5 text-navy-600 text-sm font-semibold group/btn"
        >
          View More
          <ArrowRight className="w-4 h-4 text-teal-500" />
        </button>
      </div>
    );
  }

  return (
    <div className="group bg-white rounded-2xl border border-gray-100 p-6">
      {logo ? (
        <div className="w-12 h-12 rounded-xl bg-marine-50 flex items-center justify-center mb-4">
          <img src={logo} alt={title} className="w-8 h-8 object-contain" />
        </div>
      ) : (
        Icon && (
          <div className="w-12 h-12 rounded-xl bg-marine-50 flex items-center justify-center mb-4">
            <Icon className="w-6 h-6 text-navy-600" />
          </div>
        )
      )}
      <h3 className="text-navy-800 font-bold text-lg mb-2">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

export default Card;
