import React from "react";
import "./Card.css";
const Card = ({ rank, list }) => {
  return (
    <div className="container-card">
      <span className="rank-title">{rank}</span>
      <button type="button" class="btn btn-success">
        {list}
      </button>
    </div>
  );
};

export default Card;
