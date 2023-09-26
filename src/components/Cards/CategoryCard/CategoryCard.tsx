import React from "react";
import "./category-card.scss";

const CategoryCard = (props: any) => {
  return (
    <button
      role="button"
      type="button"
      className={`${
        props.selected == true ? "category-card selected" : "category-card"
      }`}
    >
      <div className="icon-wrap">{props.icon}</div>
      <h5 className="category-card-title">{props.cardTitle}</h5>
      <p className="desc">{props.cardDesc}</p>
    </button>
  );
};

export default CategoryCard;
