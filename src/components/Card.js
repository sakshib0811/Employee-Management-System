import React from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";
const Card = ({ rank, list, path }) => {
  const Navigate = useNavigate();
  const handleClick = () => {
    Navigate(path, { replace: true });
  };
  return (
    <div className="container-card">
      <span className="rank-title">{rank}</span>
      <button type="button" class="btn btn-success" onClick={handleClick}>
        {list}
      </button>
    </div>
  );
};

export default Card;
