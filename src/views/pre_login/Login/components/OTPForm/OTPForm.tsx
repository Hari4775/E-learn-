import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  otpValidationSchema,
  formatEmail,
} from "../../../../../common/validations/loginValidations";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import OTPInput from "react-otp-input";
import { emailOtp } from "../../../../../redux/pages/loginSlice";

interface IVeMailOtp {
  email: string; // Add the email prop here
}

const OTPForm: React.FC<IVeMailOtp> = ({ email }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(30);

  const {
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(otpValidationSchema),
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  const resendOtp = () => {
    setMinutes(1);
    setSeconds(30);
  };

  const onSubmit = async (data: any) => {
    if (data) {
      const { otp } = data;
      console.log(data, "otpp");
      await dispatch(emailOtp({ otp, email }));
    }
  };
  useEffect(() => {
    if (isSuccess) {
      navigate("/reset-password");
      setIsSuccess(false);
    }
  }, [isSuccess, navigate]);

  return (
    <div className="form-area">
      <h1 className="form-title">Verify mail</h1>
      <p className="description mw-400 mx-auto">
        Enter OTP that sent to your registered email<span>&nbsp; </span>
        {formatEmail(email)}
      </p>
      <div>
        <div className="otp-form">
          <form>
            <div className="form-control-wrap otp-field-wrap mb-4">
              <label className="form-label">Enter OTP</label>
              <div className="otp-fields">
                <OTPInput
                  value={watch("otp")}
                  onChange={(Value) => setValue("otp", Value)}
                  numInputs={5}
                  renderSeparator={<span>&nbsp;&nbsp; </span>}
                  renderInput={(props) => (
                    <input {...props} className="otpinput" />
                  )}
                />
              </div>
              <div className="d-flex justify-content-between mt-2">
                {seconds > 0 || minutes > 0 ? (
                  <p className="timer">
                    {minutes < 10 ? `0${minutes}` : minutes}:
                    {seconds < 10 ? `0${seconds}` : seconds}
                  </p>
                ) : (
                  <div>
                    <p className="desc">Didn't receive OTP?</p>
                    <button
                      disabled={seconds > 0 || minutes > 0}
                      style={{
                        color:
                          seconds > 0 || minutes > 0 ? "#DFE3E8" : "#FF5630",
                      }}
                      onClick={resendOtp}
                      type="button"
                      role="button"
                      className="btn btn-link d-inline ms-1 font-14"
                    >
                      Resend
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="mb-4">
              <button
                type="button"
                role="button"
                className="btn btn-lg btn-outline-primary w-100"
                onClick={handleSubmit(onSubmit)}
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
