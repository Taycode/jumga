import React from "react";
import "./styles.scss";

const StatCard = ({ heading }) => {
  return (
    <div className="stat-card">
      <span className="stat-card__title">{heading}</span>
      <span> 90</span>
    </div>
  );
};

export default StatCard;
