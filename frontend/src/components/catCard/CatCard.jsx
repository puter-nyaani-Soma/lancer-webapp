import React from "react";
import { Link } from "react-router-dom";

function CatCard({ card }) {
  return (
    <Link to={`/gigs?cat=${card.cat}`}>
      <div className="w-50 h-80 left-0 mx-0 mr-3 bg-white text-white rounded-lg overflow-hidden relative cursor-pointer transition-transform transform hover:scale-105 md:w-64 md:h-[300px]">
        <img src={card.img} alt={card.title} className="w-full h-4/5 object-cover overflow-hidden" />
        <span className="text-white font-light absolute top-3 left-3 text-sm">{card.desc}</span>
        <span className="absolute top-8 left-3 text-lg font-semibold">{card.title}</span>
      </div>
    </Link>
  );
}

export default CatCard;

