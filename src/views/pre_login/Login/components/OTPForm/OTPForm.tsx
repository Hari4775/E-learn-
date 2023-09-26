import React from "react";

const OTPForm = () => {
  return (
    <div className="form-area">

      <h1 className="form-title">Verify mail</h1>
      <p className="description mw-400 mx-auto">
        Enter OTP that sent to your registered email
        ab*******4@gmail.com
      </p>
      <div>
        <div className="otp-form">
          <form action="">
            <div className="form-control-wrap otp-field-wrap mb-4">
              <label className="form-label">Enter OTP</label>
              <div className="otp-fields">
                <input
                  className="form-control otp-field"
                  maxLength={1}
                  placeholder="0"
                />
                <input
                  className="form-control otp-field"
                  maxLength={1}
                  placeholder="0"
                />
                <input
                  className="form-control otp-field"
                  maxLength={1}
                  placeholder="0"
                />
                <input
                  className="form-control otp-field"
                  maxLength={1}
                  placeholder="0"
                />
                <input
                  className="form-control otp-field"
                  maxLength={1}
                  placeholder="0"
                />
              </div>
              <div className="d-flex justify-content-between mt-2">
                <p className="timer">3:50</p>
                <div>
                  <p className="desc">
                    Didn't receive OTP?
                    <button
                      type="button"
                      role="button"
                      className="btn btn-link d-inline ms-1 font-14"
                    >
                      Resend
                    </button>
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <button
                type="button"
                role="button"
                className="btn btn-lg btn-outline-primary w-100"
              >
                Confirm
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OTPForm;
