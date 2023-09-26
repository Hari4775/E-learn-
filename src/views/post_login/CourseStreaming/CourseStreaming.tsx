import React, { useEffect, useState } from "react";
import "./course-streaming.scss";

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
import { ReactComponent as CheckCircleFilledIcon } from "../../../assets/icons/icon-tick-circle.svg";
import { ReactComponent as SendIcon } from "../../../assets/icons/icon-send.svg";

// components
import CourseCard from "../../../components/Cards/CourseCard/CourseCard";
import Chat from "../../../components/Chat/chat";

const CourseStreaming = () => {
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

  const chats = [
    {
      id: 1,
      isUser: true,
      message: "lorem ipsum dolor sit ament lorem ipsum dolor sit amet",
      avatarUrl: "",
    },
    {
      id: 2,
      isUser: false,
      message: "lorem ipsum dolor sit ament lorem ipsum dolor sit amet",
      avatarUrl: "",
    },
    {
      id: 3,
      isUser: true,
      message: "lorem ipsum dolor sit ament lorem ipsum dolor sit amet",
      avatarUrl: "",
    },
    {
      id: 4,
      isUser: false,
      message: "lorem ipsum dolor sit ament lorem ipsum dolor sit amet",
      avatarUrl: "",
    },
    {
      id: 5,
      isUser: true,
      message: "lorem ipsum dolor sit ament lorem ipsum dolor sit amet",
      avatarUrl: "",
    },
    {
      id: 6,
      isUser: false,
      message: "lorem ipsum dolor sit ament lorem ipsum dolor sit amet",
      avatarUrl: "",
    },
  ];

  return (
    <>
      <div className="course-streaming-page">
        <div className="course-streaming">
          <div className="container-lg">
            <div className="row">
              {/* video player */}
              <div className="col-12 col-xl-7 col-xxl-8">
                <div className="video-player-wrapper">
                  {/* show title only for video, don't show this for tests */}
                  {/* <h4 className="course-title">
                  Programming in C++: Beginner level
                </h4> */}
                  {/* <div className="video-player">video player goes here</div> */}

                  {/* test component */}
                  <div className="test-area">
                    <h3 className="test-title">Test 1</h3>
                    <div className="test-wrapper">
                      <h4 className="question mb-4">1{")"} .What is a token</h4>
                      <div className="row g-sm-4">
                        <div className="col-12 col-sm-6">
                          <div className="form-radio-btn">
                            <input
                              type="radio"
                              name="radioDefault"
                              id="radio1"
                            />
                            <label htmlFor="radio1">Option 1</label>
                          </div>
                        </div>
                        <div className="col-12 col-sm-6">
                          <div className="form-radio-btn">
                            <input
                              type="radio"
                              name="radioDefault"
                              id="radio2"
                            />
                            <label htmlFor="radio2">Option 2</label>
                          </div>
                        </div>
                        <div className="col-12 col-sm-6">
                          <div className="form-radio-btn">
                            <input
                              type="radio"
                              name="radioDefault"
                              id="radio3"
                            />
                            <label htmlFor="radio3">Option 3</label>
                          </div>
                        </div>
                        <div className="col-12 col-sm-6">
                          <div className="form-radio-btn">
                            <input
                              type="radio"
                              name="radioDefault"
                              id="radio4"
                            />
                            <label htmlFor="radio4">Option 4</label>
                          </div>
                        </div>
                      </div>

                      {/* result component */}
                      <div className="results-sec">
                        <div className="result-title">Congratulations</div>
                        {/* use class names "green" for green color, and "red" for red color */}
                        {/* <span className="score red">8</span> */}
                        <p className="results">
                          You scored <span className="score green">8</span> out
                          of <span className="score">10</span>
                        </p>
                      </div>

                      <div className="mt-5 d-flex align-items-center justify-content-between">
                        <button className="btn btn-md btn-outline-primary disabled">
                          Prev
                        </button>
                        <button className="btn btn-md btn-outline-primary ">
                          Next
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* tab section */}
                <div className="tab-section">
                  <div className="nav-wrap">
                    <ul
                      className="nav nav-pills mb-3 mb-md-4"
                      id="pills-tab"
                      role="tablist"
                    >
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link active"
                          id="pills-about-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-about"
                          type="button"
                          role="tab"
                          aria-controls="pills-about"
                          aria-selected="true"
                        >
                          About
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-test-score-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-test-score"
                          type="button"
                          role="tab"
                          aria-controls="pills-test-score"
                          aria-selected="false"
                        >
                          Test Score
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="tab-content" id="pills-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="pills-about"
                      role="tabpanel"
                      aria-labelledby="pills-about-tab"
                    >
                      <div className="mw-962">
                        <div className="tab-title-wrap">
                          {/* <h4 className="tab-title">About</h4> */}
                          <p className="desc">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the
                            leapLorem Ipsum is simply dummy text of the printing
                            and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-test-score"
                      role="tabpanel"
                      aria-labelledby="pills-test-score-tab"
                    >
                      <div className="mw-962">
                        <div className="row">
                          <div className="col-12">
                            <div className="test-score-card">
                              <div>
                                <h5 className="title">Chapter 1 Test 1</h5>
                              </div>
                              <p className="score">
                                {/* <span className="green">8</span> */}
                                <span className="red">3</span>
                                /20
                              </p>
                              <div>
                                <button className="btn btn-sm btn-outline-primary">
                                  Take Retest
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="test-score-card">
                              <div>
                                <h5 className="title">Chapter 1 Test 1</h5>
                              </div>
                              <p className="score">
                                {/* <span className="green">8</span> */}
                                <span className="red">3</span>
                                /20
                              </p>
                              <div>
                                <button className="btn btn-sm btn-outline-primary">
                                  Take Retest
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="test-score-card">
                              <div>
                                <h5 className="title">Chapter 1 Test 1</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* course content section */}
              <div className="col-12 col-xl-5 col-xxl-4">
                {/* course content */}
                <div className="sub-section mb-5 mb-xl-3">
                  <h4 className="sub-section-title mb-3 d-none d-xl-block">
                    Programming in C++: Beginner level
                  </h4>
                  {/* NOTE: for devs: content added only for first accordion, 2 and 3 are just placeholders please don't change the classnames from its position  , also give unique id names accordingly -- remove this comment after integration */}
                  <div className="course-content-section">
                    <div className="course-sec-scroll-area">
                      <div
                        className="accordion accordion-flush"
                        id="accordionFlushExample"
                      >
                        <div className="accordion-item chapter-accordion">
                          <h2
                            className="accordion-header"
                            id="flush-headingOne"
                          >
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
                              {/* inner cards - completed */}
                              <button
                                className="inner-card completed"
                                type="button"
                              >
                                <div className="d-flex align-items-center">
                                  <span className="start-icon me-2">
                                    <VideoOctagonIcon />
                                    {/* <ClipboardTextIcon /> */}
                                  </span>
                                  <h6 className="inner-heading">Tokens</h6>
                                </div>
                                <div className="d-flex align-items-center">
                                  <p className="text me-2">23:45</p>
                                  <span className="end-icon">
                                    {/* if video playback completed show the check circle icon, else show the circle */}
                                    <CheckCircleFilledIcon />
                                    {/* <div className="circle"></div> */}
                                  </span>
                                </div>
                              </button>

                              {/* inner cards */}
                              <button className="inner-card" type="button">
                                <div className="d-flex align-items-center">
                                  <span className="start-icon me-2">
                                    <VideoOctagonIcon />
                                    {/* <ClipboardTextIcon /> */}
                                  </span>
                                  <h6 className="inner-heading">Operators</h6>
                                </div>
                                <div className="d-flex align-items-center">
                                  <p className="text me-2">23:45</p>
                                  <span className="end-icon">
                                    {/* if video playback completed show the check circle icon, else show the circle */}
                                    {/* <CheckCircleFilledIcon /> */}
                                    <div className="circle"></div>
                                  </span>
                                </div>
                              </button>

                              {/* inner cards */}
                              <button className="inner-card" type="button">
                                <div className="d-flex align-items-center">
                                  <span className="start-icon me-2">
                                    {/* <VideoOctagonIcon /> */}
                                    <ClipboardTextIcon />
                                  </span>
                                  <h6 className="inner-heading">Test 1</h6>
                                </div>
                                <div className="d-flex align-items-center">
                                  <p className="text me-2">5 Que</p>
                                  <span className="end-icon">
                                    {/* if video playback completed show the check circle icon, else show the circle */}
                                    {/* <CheckCircleFilledIcon /> */}
                                    <div className="circle"></div>
                                  </span>
                                </div>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item chapter-accordion">
                          <h2
                            className="accordion-header"
                            id="flush-headingTwo"
                          >
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
                              {/* inner cards - completed */}
                              <button
                                className="inner-card completed"
                                type="button"
                              >
                                <div className="d-flex align-items-center">
                                  <span className="start-icon me-2">
                                    <VideoOctagonIcon />
                                    {/* <ClipboardTextIcon /> */}
                                  </span>
                                  <h6 className="inner-heading">Tokens</h6>
                                </div>
                                <div className="d-flex align-items-center">
                                  <p className="text me-2">23:45</p>
                                  <span className="end-icon">
                                    {/* if video playback completed show the check circle icon, else show the circle */}
                                    <CheckCircleFilledIcon />
                                    {/* <div className="circle"></div> */}
                                  </span>
                                </div>
                              </button>

                              {/* inner cards */}
                              <button className="inner-card" type="button">
                                <div className="d-flex align-items-center">
                                  <span className="start-icon me-2">
                                    <VideoOctagonIcon />
                                    {/* <ClipboardTextIcon /> */}
                                  </span>
                                  <h6 className="inner-heading">Operators</h6>
                                </div>
                                <div className="d-flex align-items-center">
                                  <p className="text me-2">23:45</p>
                                  <span className="end-icon">
                                    {/* if video playback completed show the check circle icon, else show the circle */}
                                    {/* <CheckCircleFilledIcon /> */}
                                    <div className="circle"></div>
                                  </span>
                                </div>
                              </button>

                              {/* inner cards */}
                              <button className="inner-card" type="button">
                                <div className="d-flex align-items-center">
                                  <span className="start-icon me-2">
                                    {/* <VideoOctagonIcon /> */}
                                    <ClipboardTextIcon />
                                  </span>
                                  <h6 className="inner-heading">Test 1</h6>
                                </div>
                                <div className="d-flex align-items-center">
                                  <p className="text me-2">5 Que</p>
                                  <span className="end-icon">
                                    {/* if video playback completed show the check circle icon, else show the circle */}
                                    {/* <CheckCircleFilledIcon /> */}
                                    <div className="circle"></div>
                                  </span>
                                </div>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item chapter-accordion">
                          <h2
                            className="accordion-header"
                            id="flush-headingThree"
                          >
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
                              <code>.accordion-flush</code> class. This is the
                              third item's accordion body. Nothing more exciting
                              happening here in terms of content, but just
                              filling up the space to make it look, at least at
                              first glance, a bit more representative of how
                              this would look in a real-world application.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* doubts section */}
                <div className="doubts-wrapper mb-5 d-none d-xl-block">
                  <div className="title-sec">
                    <h5 className="title">Doubts</h5>
                  </div>
                  <div className="chat-section">
                    <div className="scroll-area">
                      {chats.map((chat) => (
                        <div className="chat-bubble-wrapper" key={chat.id}>
                          {chat.isUser !== true ? (
                            <div>
                              <div className="avatar-wrap me-3">
                                <img
                                  src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                                  alt="avatar"
                                />
                              </div>
                            </div>
                          ) : null}
                          <div
                            className={`chat-bubble ${
                              chat.isUser === true
                                ? "user-chat-bubble"
                                : "tutor-chat-bubble"
                            }`}
                          >
                            <p className="message">{chat.message}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="input-wrapper">
                    <div className="form-group">
                      <input type="text" className="form-control" />
                      <button className="send-btn">
                        <SendIcon />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Chat />
    </>
  );
};

export default CourseStreaming;
