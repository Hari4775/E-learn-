import React, { useState } from "react";
import "./cart-item-card.scss";

// icons
import { ReactComponent as HeartFilledIcon } from "../../../assets/icons/icon-heart-filled.svg";
import { ReactComponent as HeartOutlineIcon } from "../../../assets/icons/icon-heart-outline.svg";

const CartItemCard = (props: any) => {
  const course = props.course;
  const [wishList, setWishList] = useState<boolean>(course.wishList);
  return (
    <div className="cart-item-card">
      <div className="img-sec">
        <div className="thumbnail-wrap">
          <img
            src={course.imageURL}
            className="thumbnail"
            alt="course-thumbnail"
          />
        </div>
      </div>

      <div className="course-card-body">
        <div className="details">
          <div className="title-wrap">
            <h3 className="course-card-title">{course.courseName}</h3>
            <p className="course-card-desc">{course.description}</p>
          </div>
          <div className="d-flex btn-sec">
            <button className="btn btn-sm btn-link">Delete</button>
            <button className="btn btn-sm btn-link-black">
              Add to wishlist
            </button>
          </div>
        </div>
        <div>
          <div className="price-wrap">
            <p className="new-price text-end">₹ 260.00</p>
            <p className="old-price striked text-end">₹ 390.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;
