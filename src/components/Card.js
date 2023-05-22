import React, { useState } from "react";
import "./Card.css";
import { Link, useNavigate } from "react-router-dom";
import EmpListing from "./EmpListing";
const Card = ({ rank, list, role, head }) => {
  console.log(head);
  const Navigate = useNavigate();
  let pos = role;
  let title = head;
  const handleClick = () => {
    Navigate("/EmpListing", { replace: true });
  };
  return (
    <div className="container-card">
      <span className="rank-title">{rank}</span>
      <Link to="/EmpListing" state={{ from: pos, foo: title }}>
        <button type="button" class="btn btn-success">
          {list}
        </button>
      </Link>
    </div>
  );
};

export default Card;
