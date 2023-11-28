import React from "react";
import "./ProjectCard.scss";
import { Link } from "react-router-dom";


function ProjectCard({ card }) {
  return (
    <Link to={`gig/${card._id}`}>

    <div className="projectCard transition-transform transform hover:scale-105 overflow-hidden">
      <img src={card.cover} alt="" />
      <div className="info">
        <img src={card.sellerImageUrl} alt="" />
        <div className="texts">
          <h2>{card.title.charAt(0).toUpperCase() + card.title.slice(1).toLowerCase()}</h2>
          <span>{card.seller}</span>
        </div>

      </div>
    </div>
    </Link>
  );
}

export default ProjectCard;
