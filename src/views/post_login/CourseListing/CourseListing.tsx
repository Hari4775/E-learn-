import React, { useEffect, useState } from "react";
import "./course-listing.scss";
import Banner from "../../../components/Banner/Banner";
import CourseCard from "../../../components/Cards/CourseCard/CourseCard";

// icons
import { ReactComponent as SearchIcon } from "../../../assets/icons/icon-search.svg";
import { ReactComponent as SortIcon } from "../../../assets/icons/icon-sort.svg";
import { ReactComponent as PaginationLeftArrowIcon } from "../../../assets/icons/icon-arrow-left.svg";
import { ReactComponent as PaginationRightArrowIcon } from "../../../assets/icons/icon-arrow-right.svg";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../redux/hooks";
import { getCourseList, setCourseList } from "../../../redux/pages/courseSlice";

const CourseListing = () => {
  const [inputValue, setInputValue] = useState("");
  const [courseListData, setCourseListData] = useState<any>([]);

  //redux
  const dispatch = useDispatch<any>();
  const courseInfo = useAppSelector((state) => state.course.courseList);

  useEffect(() => {
    dispatch(getCourseList());

    return(() => {
      dispatch(setCourseList([]));
    });
  }, []);

  useEffect(() => {
    if (courseInfo && courseInfo?.length) {
      setCourseListData([...courseInfo]);
    }
  }, [courseInfo]);

  return (
    <div className="course-listing-page">
      <Banner />
      <div className="course-listing py-3">
        <div className="container-lg">
          <div className="title-section">
            <h4 className="section-title mb-2">Courses</h4>
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
              <div>
                <div className="dropdown sort-dropdown">
                  <button
                    className="btn btn-outline-black dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span className="me-2">
                      <SortIcon />
                    </span>
                    Sort
                  </button>
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Name
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Date
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="row gx-4 gy-4 mb-5">
            {courseListData?.map((course: any, key: any) => (
              <div key={key} className="col-12 col-sm-6 col-lg-4 col-xl-3">
                <CourseCard courseData={course} />
              </div>
            ))}
          </div>
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
  );
};

export default CourseListing;
