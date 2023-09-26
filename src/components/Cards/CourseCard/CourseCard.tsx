import React, { useEffect, useState } from "react";
import "./course-card.scss";

// icons
import { ReactComponent as HeartFilledIcon } from "../../../assets/icons/icon-heart-filled.svg";
import { ReactComponent as HeartOutlineIcon } from "../../../assets/icons/icon-heart-outline.svg";
import { Link } from "react-router-dom";

interface IDCourse{
  courseData: any;
};

const CourseCard:React.FC<IDCourse> = (props) => {
  const {
    courseData = {}
  } = props;
  
  const [wishList, setWishList] = useState<any>([]);

  return (
    <div className="course-card">
      <div className="thumbnail-wrap">
        <img
          src={courseData?.imageURL}
          className="thumbnail"
          alt="course-thumbnail"
        />
      </div>
      <div className="course-card-body">
        <div className="title-wrap">
          <h3 className="course-card-title">{courseData?.courseName}</h3>
          <div>
            {courseData?.courseProgress == true ? null : (
              <button
                onClick={() => setWishList(!wishList)}
                className="wishlist-btn"
              >
                {wishList == true ? <HeartFilledIcon /> : <HeartOutlineIcon />}
              </button>
            )}
          </div>
        </div>
        <p className="course-card-desc">{courseData?.description}</p>
        {courseData?.courseProgress == true ? (
          <div className="progress-wrap">
            <h6 className="progress-title">Progress</h6>
            <div className="progress-track">
              {/* pass the percentage value to the width property to get the completion width for progress bar - remove this comment after integration */}
              <div className="progress-bar" style={{ width: "60%" }}></div>
            </div>
            <div className="d-flex justify-content-end">
              <p className="text">60% completed</p>
            </div>
          </div>
        ) : (
          <>
            <div className="price-wrap">
              <p className="new-price">₹ 260.00</p>
              <p className="old-price striked">₹ 390.00</p>
            </div>
            <Link to="/course-details" className="btn btn-sm btn-outline-primary w-100">
              View Details
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default CourseCard;
