import React from "react";
import "./styles.scss";

const StatCard = ({ heading, stat }) => {
  return (
    <div className="stat-card">
      <span className="stat-card__title">{heading}</span>
      <span> {stat}</span>
    </div>
  );
};

export default StatCard;
