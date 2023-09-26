import React, { useState } from "react";
import "./settings.scss";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";

// icons
import { ReactComponent as SearchIcon } from "../../../assets/icons/icon-search.svg";
import { ReactComponent as PaginationLeftArrowIcon } from "../../../assets/icons/icon-arrow-left.svg";
import { ReactComponent as PaginationRightArrowIcon } from "../../../assets/icons/icon-arrow-right.svg";
import { ReactComponent as EditIcon } from "../../../assets/icons/icon-edit.svg";
import { ReactComponent as UserIcon } from "../../../assets/icons/icon-profile.svg";
import { ReactComponent as TrashIcon } from "../../../assets/icons/icon-trash.svg";

import { ReactComponent as LockDotsIcon } from "../../../assets/icons/icon-lock-dots.svg";
import { ReactComponent as LockIcon } from "../../../assets/icons/icon-lock.svg";
import { ReactComponent as EyeIcon } from "../../../assets/icons/icon-eye.svg";
import { ReactComponent as EyeSlashedIcon } from "../../../assets/icons/icon-eye-slash.svg";
import { ReactComponent as InfoCircleIcon } from "../../../assets/icons/icon-info-circle.svg";
import { ReactComponent as ImportIcon } from "../../../assets/icons/icon-import.svg";

// components
import CourseCard from "../../../components/Cards/CourseCard/CourseCard";
import DeleteModal from "../../../components/modals/DeleteModal/DeleteModal";

const Settings = () => {
  const [inputValue, setInputValue] = useState("");
  const [phone, setPhone] = useState("");

  const [currentPasswordVisible, setCurrentPasswordVisible] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const handleCurrentPasswordVisibility = () => {
    setCurrentPasswordVisible(!currentPasswordVisible);
  };
  const handlePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const handleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  return (
    <>
      <div className="settings-page">
        <div className="setting-wrapper">
          <div className="container-lg">
            <div className="title-section">
              <h4 className="section-title">Settings</h4>
            </div>

            <div className="tab-section">
              <div className="nav-wrap">
                <ul
                  className="nav nav-pills mb-4"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="pills-general-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-general"
                      type="button"
                      role="tab"
                      aria-controls="pills-general"
                      aria-selected="true"
                    >
                      General
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-payment-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-payment"
                      type="button"
                      role="tab"
                      aria-controls="pills-payment"
                      aria-selected="false"
                    >
                      Payment
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-security-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-security"
                      type="button"
                      role="tab"
                      aria-controls="pills-security"
                      aria-selected="false"
                    >
                      Security
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-account-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-account"
                      type="button"
                      role="tab"
                      aria-controls="pills-account"
                      aria-selected="false"
                    >
                      Account
                    </button>
                  </li>
                </ul>
              </div>
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-general"
                  role="tabpanel"
                  aria-labelledby="pills-general-tab"
                >
                  <div className="mw-962">
                    <div className="tab-title-wrap">
                      <h4 className="tab-title">Profile</h4>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="avatar-wrap">
                          <div className="avatar">
                            <img
                              src="https://images.unsplash.com/photo-1505968409348-bd000797c92e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                              alt="user image"
                            />
                            <span className="placeholder-icon">
                              <UserIcon />
                            </span>
                          </div>
                          <button className="edit-btn">
                            <EditIcon />
                          </button>
                        </div>
                        <div className="row">
                          <div className="col-12 col-md-5">
                            <form action="">
                              <div className="form-control-wrap mb-3">
                                <label className="form-label">Name</label>
                                <input
                                  className="form-control"
                                  placeholder="Enter your name"
                                />
                                <p className="validation-text">
                                  Please provide a valid name.
                                </p>
                              </div>

                              <div className="form-control-wrap mb-3">
                                <label className="form-label">Email</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter your mail"
                                />
                                <p className="validation-text">
                                  Please provide a valid email.
                                </p>
                              </div>

                              <div className="form-control-wrap mb-3 country-code-selector">
                                <label className="form-label">
                                  Phone Number
                                </label>
                                <PhoneInput
                                  country={"eg"}
                                  enableSearch={true}
                                  value={phone}
                                  onChange={(phone) => setPhone(phone)}
                                />
                                <p className="validation-text">
                                  Please provide a valid email.
                                </p>
                              </div>

                              <div className="mb-4">
                                <button
                                  type="button"
                                  role="button"
                                  className="btn btn-md btn-primary w-100"
                                >
                                  Login
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-payment"
                  role="tabpanel"
                  aria-labelledby="pills-payment-tab"
                >
                  <div className="mw-962">
                    <div className="tab-title-wrap">
                      <h4 className="tab-title">Payment</h4>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="payment-card">
                          <div>
                            <h6 className="course-title">Program in C++</h6>
                          </div>
                          <div>
                            <div className="text-wrap">
                              <p className="text">Success</p>
                              <p className="text">10 June 2023</p>
                              <p className="text">₹ 300</p>
                              <p className="text">UPI</p>
                            </div>
                          </div>
                          <div>
                            <button className="btn btn-sm btn-link">
                              <span className="me-2">
                                <ImportIcon />
                              </span>
                              Invoice
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="payment-card">
                          <div>
                            <h6 className="course-title">Program in C++</h6>
                          </div>
                          <div>
                            <div className="text-wrap">
                              <p className="text">Success</p>
                              <p className="text">10 June 2023</p>
                              <p className="text">₹ 300</p>
                              <p className="text">UPI</p>
                            </div>
                          </div>
                          <div>
                            <button className="btn btn-sm btn-link">
                              <span className="me-2">
                                <ImportIcon />
                              </span>
                              Invoice
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-security"
                  role="tabpanel"
                  aria-labelledby="pills-security-tab"
                >
                  <div className="mw-962">
                    <div className="tab-title-wrap">
                      <h4 className="tab-title">Security</h4>
                      <p className="desc">
                        You are signed up using the email is{" "}
                        <span className="fw-bold">johndoe12@gmail.com</span>
                      </p>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <form action="">
                          <div className="row">
                            <div className="col-12 col-md-5">
                              <div className="form-control-wrap mb-3">
                                <label className="form-label">
                                  Current Password
                                </label>
                                <div className="icon-form-control">
                                  <div className="start-icon">
                                    <LockDotsIcon />
                                  </div>
                                  <input
                                    type={
                                      currentPasswordVisible
                                        ? "text"
                                        : "password"
                                    }
                                    className="form-control"
                                    placeholder="Enter current password"
                                  />
                                  <div className="end-icon">
                                    <button
                                      type="button"
                                      role="button"
                                      onClick={handleCurrentPasswordVisibility}
                                    >
                                      {currentPasswordVisible ? (
                                        <EyeIcon />
                                      ) : (
                                        <EyeSlashedIcon />
                                      )}
                                    </button>
                                  </div>
                                </div>
                              </div>

                              <div className="form-control-wrap mb-3">
                                <label className="form-label">
                                  New Password
                                </label>
                                <div className="icon-form-control">
                                  <div className="start-icon">
                                    <LockDotsIcon />
                                  </div>
                                  <input
                                    type={passwordVisible ? "text" : "password"}
                                    className="form-control"
                                    placeholder="Enter new password"
                                  />
                                  <div className="end-icon">
                                    <button
                                      type="button"
                                      role="button"
                                      onClick={handlePasswordVisibility}
                                    >
                                      {passwordVisible ? (
                                        <EyeIcon />
                                      ) : (
                                        <EyeSlashedIcon />
                                      )}
                                    </button>
                                  </div>
                                </div>
                              </div>

                              <div className="form-control-wrap mb-4">
                                <label className="form-label">
                                  Confirm Password
                                </label>
                                <div className="icon-form-control">
                                  <div className="start-icon">
                                    <LockIcon />
                                  </div>
                                  <input
                                    type={
                                      confirmPasswordVisible
                                        ? "text"
                                        : "password"
                                    }
                                    className="form-control"
                                    placeholder="Re-enter new password"
                                  />
                                  <div className="end-icon">
                                    <button
                                      type="button"
                                      role="button"
                                      onClick={handleConfirmPasswordVisibility}
                                    >
                                      {confirmPasswordVisible ? (
                                        <EyeIcon />
                                      ) : (
                                        <EyeSlashedIcon />
                                      )}
                                    </button>
                                  </div>
                                </div>
                              </div>

                              <div className="d-flex align-items-end">
                                <button
                                  type="button"
                                  role="button"
                                  className="btn btn-md btn-primary w-100 w-md-auto mb-3"
                                >
                                  Change password
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-account"
                  role="tabpanel"
                  aria-labelledby="pills-account-tab"
                >
                  <div className="mw-962">
                    <div className="tab-title-wrap">
                      <h4 className="tab-title">Delete Account</h4>
                      <p className="desc">
                        By deleting you will lose all the courses you are
                        enrolled, you cannot undo!
                      </p>
                    </div>
                    <div className="">
                      <button
                        type="button"
                        role="button"
                        className="btn btn-md btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                      >
                        <span className="me-2">
                          <TrashIcon />
                        </span>
                        Delete Account
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DeleteModal />
    </>
  );
};

export default Settings;
