import React, { useEffect, useState } from "react";
import "./course-details.scss";
import CourseCard from "../../../components/Cards/CourseCard/CourseCard";

// icons
import { ReactComponent as PaginationLeftArrowIcon } from "../../../assets/icons/icon-arrow-left.svg";
import { ReactComponent as ClipboardTextIcon } from "../../../assets/icons/icon-clipboard-text.svg";
import { ReactComponent as Book2Icon } from "../../../assets/icons/icon-book-2.svg";
import { ReactComponent as CupIcon } from "../../../assets/icons/icon-cup.svg";
import { ReactComponent as UserOctagonIcon } from "../../../assets/icons/icon-user-octagon.svg";
import { ReactComponent as HeartFilledIcon } from "../../../assets/icons/icon-heart-filled.svg";
import { ReactComponent as HeartOutlineIcon } from "../../../assets/icons/icon-heart-outline.svg";
import { ReactComponent as CheckCircleIcon } from "../../../assets/icons/icon-check-circle.svg";
import { ReactComponent as VideoOctagonIcon } from "../../../assets/icons/icon-video-octagon.svg";

const CourseDetails = () => {
  const courses = [
    {
      id: 1,
      courseName: "Introduction to python",
      description: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet ",
      newPrice: "210",
      oldPrice: "360",
      wishList: true,
      imageURL:
        "https://images.unsplash.com/photo-1591779051696-1c3fa1469a79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      courseName: "Introduction to python sfdf sdfdfdf sfdfsf",
      description: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet ",
      newPrice: "210",
      oldPrice: "360",
      wishList: true,
      imageURL:
        "https://images.unsplash.com/photo-1591779051696-1c3fa1469a79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      courseName: "Introduction to python sfdfsdf sfsfdsfdfd sdfdsfs",
      description: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet ",
      newPrice: "210",
      oldPrice: "360",
      wishList: true,
      imageURL:
        "https://images.unsplash.com/photo-1591779051696-1c3fa1469a79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
  ];

  const [inputValue, setInputValue] = useState("");
  const [wishList, setWishList] = useState<boolean>(false);

  return (
    <div className="course-details-page">
      <div className="course-details py-3">
        <div className="container-lg">
          <div className="row">
            {/* title section */}
            <div className="col-12 col-xl-8">
              <div className="title-wrapper">
                <div>
                  <button className="back-btn">
                    <PaginationLeftArrowIcon />
                  </button>
                </div>
                <div>
                  <h1 className="course-title">
                    Programming in C++ : Beginner Level
                  </h1>
                  <p className="course-desc">
                    This is the course to pick if you are just getting into
                    coding and want to build a strong foundation. Widely used in
                    competitive programming.
                  </p>
                </div>
              </div>
            </div>

            {/* video player */}
            <div className="col-12 col-xl-8">
              <div className="video-player-wrapper">
                <div className="video-player">video player goes here</div>
              </div>
            </div>

            {/* right side box */}
            <div className="col-12 col-xl-4">
              <div className="course-side-box">
                <h4 className="title">This Course includes</h4>

                <div className="row">
                  <div className="col-12 col-sm-6 col-xl-12">
                    <div className="icon-box">
                      <span className="me-2">
                        <ClipboardTextIcon />
                      </span>
                      <p className="desc">Tests</p>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-xl-12">
                    <div className="icon-box">
                      <span className="me-2">
                        <Book2Icon />
                      </span>
                      <p className="desc">Lectures and Notes</p>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-xl-12">
                    <div className="icon-box">
                      <span className="me-2">
                        <CupIcon />
                      </span>
                      <p className="desc">Certificate of completion</p>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-xl-12">
                    <div className="icon-box">
                      <span className="me-2">
                        <UserOctagonIcon />
                      </span>
                      <p className="desc">Mentor Support</p>
                    </div>
                  </div>
                </div>

                <div className="line"></div>

                <div className="price-section">
                  <p className="new-price">₹ 540</p>
                  <p className="old-price striked">₹ 1500</p>
                  <p className="offer">44 % off</p>
                </div>
                <div className="btn-section">
                  <div className="btn-wrap ">
                    <button className="btn btn-lg btn-primary">
                      Add to Cart
                    </button>
                  </div>
                  <div>
                    <button
                      className="wish-list-btn"
                      onClick={() => setWishList(!wishList)}
                    >
                      {wishList == true ? (
                        <HeartFilledIcon />
                      ) : (
                        <HeartOutlineIcon />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* about */}
            <div className="col-12 col-xl-8">
              <div className="sub-section">
                <h4 className="sub-section-title">About</h4>
                <p className="summary">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leapLorem Ipsum is simply dummy text of the printing
                  and typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type
                </p>
              </div>
            </div>

            {/* what you will learn section */}
            <div className="col-12 col-xl-8">
              <div className="sub-section">
                <h4 className="sub-section-title">What you will learn</h4>
                <div className="course-goals">
                  <div className="row gy-3">
                    <div className="col-12 col-sm-6">
                      <div className="icon-box">
                        <span className="me-2">
                          <CheckCircleIcon />
                        </span>
                        <p className="title">Introduction to programming</p>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6">
                      <div className="icon-box">
                        <span className="me-2">
                          <CheckCircleIcon />
                        </span>
                        <p className="title">Publishing our work</p>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6">
                      <div className="icon-box">
                        <span className="me-2">
                          <CheckCircleIcon />
                        </span>
                        <p className="title">Advanced programming approaches</p>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6">
                      <div className="icon-box">
                        <span className="me-2">
                          <CheckCircleIcon />
                        </span>
                        <p className="title">3 Real world project</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* course content section */}
            <div className="col-12 col-xl-8">
              <div className="sub-section">
                <h4 className="sub-section-title">Course Content</h4>
                {/* NOTE: for devs: content added only for first accordion, 2 and 3 are just placeholders please don't change the classnames from its position  , also give unique id names accordingly -- remove this comment after integration */}
                <div className="course-content-section">
                  <div
                    className="accordion accordion-flush"
                    id="accordionFlushExample"
                  >
                    <div className="accordion-item chapter-accordion">
                      <h2 className="accordion-header" id="flush-headingOne">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseOne"
                          aria-expanded="false"
                          aria-controls="flush-collapseOne"
                        >
                          Chapter 1
                        </button>
                      </h2>
                      <div
                        id="flush-collapseOne"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingOne"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <div
                            className="accordion accordion-flush "
                            id="accordionFlushInnerExample"
                          >
                            <div className="accordion-item accordion-inner">
                              <h2
                                className="accordion-header"
                                id="flush-inner-headingOne"
                              >
                                <button
                                  className="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#flush-inner-collapseOne"
                                  aria-expanded="false"
                                  aria-controls="flush-collapseOne"
                                >
                                  <div className="d-flex align-items-center justify-content-between w-100">
                                    <div className="d-flex align-items-center">
                                      <span className="me-2">
                                        <VideoOctagonIcon />
                                        {/* <ClipboardTextIcon /> */}
                                      </span>
                                      <h6 className="inner-accordion-heading">
                                        Tokens
                                      </h6>
                                    </div>
                                    <div className="d-flex align-items-center">
                                      <button className="btn btn-sm btn-link me-3">
                                        Preview
                                      </button>
                                      <p className="text me-3">23:45</p>
                                    </div>
                                  </div>
                                </button>
                              </h2>
                              <div
                                id="flush-inner-collapseOne"
                                className="accordion-collapse collapse"
                                aria-labelledby="flush-inner-headingOne"
                                data-bs-parent="#accordionFlushInnerExample"
                              >
                                <div className="accordion-body">
                                  <p className="desc">
                                    A dummy description about the course.These
                                    description is displayed as we given in the
                                    first step.A dummy description
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="accordion-item accordion-inner">
                              <h2
                                className="accordion-header"
                                id="flush-inner-headingTwo"
                              >
                                <button
                                  className="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#flush-inner-collapseTwo"
                                  aria-expanded="false"
                                  aria-controls="flush-collapseTwo"
                                >
                                  <div className="d-flex align-items-center justify-content-between w-100">
                                    <div className="d-flex align-items-center">
                                      <span className="me-2">
                                        <VideoOctagonIcon />
                                        {/* <ClipboardTextIcon /> */}
                                      </span>
                                      <h6 className="inner-accordion-heading">
                                        Operators
                                      </h6>
                                    </div>
                                    <div className="d-flex align-items-center">
                                      <button className="btn btn-sm btn-link me-3">
                                        Preview
                                      </button>
                                      <p className="text me-3">23:45</p>
                                    </div>
                                  </div>
                                </button>
                              </h2>
                              <div
                                id="flush-inner-collapseTwo"
                                className="accordion-collapse collapse"
                                aria-labelledby="flush-inner-headingTwo"
                                data-bs-parent="#accordionFlushInnerExample"
                              >
                                <div className="accordion-body">
                                  <p className="desc">
                                    A dummy description about the course.These
                                    description is displayed as we given in the
                                    first step.A dummy description
                                  </p>
                                </div>
                              </div>
                            </div>
                            {/* as per Abhinav no accordion needed for test in course details page-- remove this comment on integration */}
                            <div className="test-card d-flex align-items-center justify-content-between w-100">
                              <div className="d-flex align-items-center">
                                <span className="me-2">
                                  {/* <VideoOctagonIcon /> */}
                                  <ClipboardTextIcon />
                                </span>
                                <h6 className="inner-accordion-heading">
                                  Test 1
                                </h6>
                              </div>
                              <div className="d-flex align-items-center">
                                {/* <button className="btn btn-sm btn-link me-3">
                                        Preview
                                      </button> */}
                                <p className="text me-3">5 Que</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item chapter-accordion">
                      <h2 className="accordion-header" id="flush-headingTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseTwo"
                          aria-expanded="false"
                          aria-controls="flush-collapseTwo"
                        >
                          Chapter 2
                        </button>
                      </h2>
                      <div
                        id="flush-collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingTwo"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          Placeholder content for this accordion, which is
                          intended to demonstrate the{" "}
                          <code>.accordion-flush</code> className. This is the
                          second item's accordion body. Let's imagine this being
                          filled with some actual content.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item chapter-accordion">
                      <h2 className="accordion-header" id="flush-headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseThree"
                          aria-expanded="false"
                          aria-controls="flush-collapseThree"
                        >
                          Chapter 3
                        </button>
                      </h2>
                      <div
                        id="flush-collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingThree"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          Placeholder content for this accordion, which is
                          intended to demonstrate the{" "}
                          <code>.accordion-flush</code> class. This is the third
                          item's accordion body. Nothing more exciting happening
                          here in terms of content, but just filling up the
                          space to make it look, at least at first glance, a bit
                          more representative of how this would look in a
                          real-world application.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* course you may interested section */}
            <div className="col-12 col-xl-8">
              <div className="sub-section">
                <h4 className="sub-section-title">Course you may interested</h4>
                <div className="row gx-4 gy-4 mb-4">
                  {courses.map((course) => (
                    <div className="col-12 col-sm-4 ">
                      <CourseCard courseData={course} />
                    </div>
                  ))}
                  <div className="col-12">
                    <div className="d-flex justify-content-center">
                      <button className="btn btn-link">Show More</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
