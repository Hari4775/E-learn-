import React, { useState } from "react";
import "./my-learnings.scss";

// icons
import { ReactComponent as SearchIcon } from "../../../assets/icons/icon-search.svg";
import { ReactComponent as PaginationLeftArrowIcon } from "../../../assets/icons/icon-arrow-left.svg";
import { ReactComponent as PaginationRightArrowIcon } from "../../../assets/icons/icon-arrow-right.svg";

// components
import CourseCard from "../../../components/Cards/CourseCard/CourseCard";

const MyLearnings = () => {
  const [inputValue, setInputValue] = useState("");

  const myLearnings = [
    {
      id: 1,
      courseName: "Introduction to python",
      description:
        "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet ",
      courseProgress: true,
      imageURL:
        "https://images.unsplash.com/photo-1591779051696-1c3fa1469a79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      courseName: "Introduction to python sfdf sdfdfdf sfdfsf",
      description:
        "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet ",
      courseProgress: true,
      imageURL:
        "https://images.unsplash.com/photo-1591779051696-1c3fa1469a79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      courseName: "Introduction to python sfdfsdf sfsfdsfdfd sdfdsfs",
      description:
        "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet ",
      courseProgress: true,
      imageURL:
        "https://images.unsplash.com/photo-1591779051696-1c3fa1469a79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 4,
      courseName: "Introduction to python sfdfsdf sfsfdsfdfd sdfdsfs",
      description:
        "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet ",
      courseProgress: true,
      imageURL:
        "https://images.unsplash.com/photo-1591779051696-1c3fa1469a79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 5,
      courseName: "Introduction to python sfdfsdf sfsfdsfdfd sdfdsfs",
      description:
        "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet ",
      courseProgress: true,
      imageURL:
        "https://images.unsplash.com/photo-1591779051696-1c3fa1469a79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 6,
      courseName: "Introduction to python sfdfsdf sfsfdsfdfd sdfdsfs",
      description:
        "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet ",
      courseProgress: true,
      imageURL:
        "https://images.unsplash.com/photo-1591779051696-1c3fa1469a79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
  ];

  const wishList = [
    {
      id: 1,
      courseName: "Introduction to python",
      description:
        "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet ",
      newPrice: "210",
      oldPrice: "360",
      wishList: true,
      imageURL:
        "https://images.unsplash.com/photo-1591779051696-1c3fa1469a79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      courseName: "Introduction to python sfdf sdfdfdf sfdfsf",
      description:
        "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet ",
      newPrice: "210",
      oldPrice: "360",
      wishList: true,
      imageURL:
        "https://images.unsplash.com/photo-1591779051696-1c3fa1469a79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      courseName: "Introduction to python sfdfsdf sfsfdsfdfd sdfdsfs",
      description:
        "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet ",
      newPrice: "210",
      oldPrice: "360",
      wishList: true,
      imageURL:
        "https://images.unsplash.com/photo-1591779051696-1c3fa1469a79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 4,
      courseName: "Introduction to python sfdfsdf sfsfdsfdfd sdfdsfs",
      description:
        "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet ",
      newPrice: "210",
      oldPrice: "360",
      wishList: true,
      imageURL:
        "https://images.unsplash.com/photo-1591779051696-1c3fa1469a79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 5,
      courseName: "Introduction to python sfdfsdf sfsfdsfdfd sdfdsfs",
      description:
        "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet ",
      newPrice: "210",
      oldPrice: "360",
      wishList: true,
      imageURL:
        "https://images.unsplash.com/photo-1591779051696-1c3fa1469a79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 6,
      courseName: "Introduction to python sfdfsdf sfsfdsfdfd sdfdsfs",
      description:
        "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet ",
      newPrice: "210",
      oldPrice: "360",
      wishList: true,
      imageURL:
        "https://images.unsplash.com/photo-1591779051696-1c3fa1469a79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
  ];

  return (
    <div className="my-learnings">
      <div className="my-learnings-listing">
        <div className="container-lg">
          <div className="title-section">
            <h4 className="section-title">My Learnings</h4>
            <div className="search-filter-wrap mb-4">
              <div className="search-wrap">
                <div className="form-control-wrap">
                  <div className="icon-form-control">
                    <div className="start-icon">
                      <SearchIcon />
                    </div>
                    <input
                      className="form-control"
                      placeholder="Search Courses here"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                    />
                    <div
                      className={`auto-suggestions-menu ${
                        inputValue.length > 0 ? "h-auto" : "h-0"
                      }`}
                    >
                      <ul>
                        <li>
                          <button className="suggestion">
                            Suggestions 1fdfdf sdfsdf sdfsdf sf
                          </button>
                        </li>
                        <li>
                          <button className="suggestion">
                            Suggestions 1fdfdf sdfsdf sdfsdf sf
                          </button>
                        </li>
                        <li>
                          <button className="suggestion">
                            Suggestions 1fdfdf sdfsdf sdfsdf sf
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="tab-section">
            <ul className="nav nav-pills mb-4" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="pills-learnings-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-learnings"
                  type="button"
                  role="tab"
                  aria-controls="pills-learnings"
                  aria-selected="true"
                >
                  Learnings
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-wishlist-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-wishlist"
                  type="button"
                  role="tab"
                  aria-controls="pills-wishlist"
                  aria-selected="false"
                >
                  Wishlist
                </button>
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-learnings"
                role="tabpanel"
                aria-labelledby="pills-learnings-tab"
              >
                <div className="row">
                  <div className="col-12">
                    <div className="row gx-4 gy-4 mb-5">
                      {myLearnings.map((course) => (
                        <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                          <CourseCard courseData={course} />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="pagination-wrapper">
                      <nav aria-label="...">
                        <ul className="pagination mb-0">
                          <li className="page-item disabled me-4">
                            <a className="page-link">
                              <span className="me-2">
                                <PaginationLeftArrowIcon />
                              </span>
                              Prev
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              1
                            </a>
                          </li>
                          <li className="page-item active" aria-current="page">
                            <a className="page-link">2</a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              3
                            </a>
                          </li>
                          <li className="page-item disabled">
                            <a className="page-link" href="#">
                              ..........
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              5
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              6
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              7
                            </a>
                          </li>
                          <li className="page-item ms-4">
                            <a className="page-link" href="#">
                              Next
                              <span className="ms-2">
                                <PaginationRightArrowIcon />
                              </span>
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-wishlist"
                role="tabpanel"
                aria-labelledby="pills-wishlist-tab"
              >
                <div className="row">
                  <div className="col-12">
                    <div className="row gx-4 gy-4 mb-5">
                      {wishList.map((course) => (
                        <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                          <CourseCard courseData={course} />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="pagination-wrapper">
                      <nav aria-label="...">
                        <ul className="pagination mb-0">
                          <li className="page-item disabled me-4">
                            <a className="page-link">
                              <span className="me-2">
                                <PaginationLeftArrowIcon />
                              </span>
                              Prev
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              1
                            </a>
                          </li>
                          <li className="page-item active" aria-current="page">
                            <a className="page-link">2</a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              3
                            </a>
                          </li>
                          <li className="page-item disabled">
                            <a className="page-link" href="#">
                              ..........
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              5
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              6
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              7
                            </a>
                          </li>
                          <li className="page-item ms-4">
                            <a className="page-link" href="#">
                              Next
                              <span className="ms-2">
                                <PaginationRightArrowIcon />
                              </span>
                            </a>
                          </li>
                        </ul>
                      </nav>
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

export default MyLearnings;
