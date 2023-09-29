import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {useForm} from "react-hook-form"; 
import { yupResolver } from "@hookform/resolvers/yup";
import { otpValidationSchema } from "../../../../../common/validations/loginValidations";
import loginSlice, { mobileOtp, } from "../../../../../redux/pages/loginSlice";
import OTPInput from "react-otp-input";
import { getcourseCategory } from "../../../../../redux/pages/courseSlice";


interface IVOtp{
  setIndex:(data:any)=>void;
  phoneNumber:string;
}

const OTPVerification = forwardRef<any,IVOtp>((props,ref) => {
const {
  setIndex=()=>{},phoneNumber
 }=props;
 
const [minutes,setMinutes] = useState(1)
const [seconds,setSeconds] =useState(30)
const otpFormRef = useRef<any>();
const navigate = useNavigate();
const dispatch = useDispatch<any>()
const [isSuccess,setIsSuccess] = useState<boolean>(false);
const {handleSubmit,setValue,watch, formState: {errors}}=useForm({
  resolver : yupResolver(otpValidationSchema)
})

useImperativeHandle(ref,()=>({
  onSaveOtpTrigger :()=>{
    otpFormRef?.current?.requestSubmit()
  }
}))

useEffect(()=>{
  if(isSuccess){
    navigate("finish-registration")
    setIsSuccess(false)
  }
},[isSuccess]);

useEffect(()=>{
  const interval = setInterval(()=>{
    if(seconds > 0){
      setSeconds(seconds-1)
    }
    if(seconds ===0){
      if(minutes ===0){
        clearInterval(interval);
      }else{
        setSeconds(59)
        setMinutes(minutes -1);
      }
    }
  },1000);
  return ()=>{
    clearInterval(interval);
  };
},[seconds]);

const resendOtp = ()=>{
  setMinutes(1);
  setSeconds(30);
}

const onSubmit = async (data: any )=>{
  if(data){
  const { otp } = data;
   await dispatch(mobileOtp({otp, phone:phoneNumber},setIndex));
  dispatch(getcourseCategory());
  console.log(otp,"otp ")
  console.log(phoneNumber,"phone")
  }
}
  return (
    <div className="mw-480 mx-auto mb-5">
      <div className="form-control-wrap mb-3 otp-field-wrap">
        <label className="form-label">Enter OTP</label>
        <form ref={otpFormRef} onSubmit={handleSubmit(onSubmit)}>
        <div className="otp-fields">
          <OTPInput
          value={watch("otp")}
          onChange={(Value) =>setValue("otp",Value)}
          numInputs={5}
          renderSeparator={<span>&nbsp;&nbsp; </span>}
          renderInput={(props) => <input {...props} className="otpinput"  inputMode="numeric"/>}
        />
        </div>
        </form>

        
          {/* <input
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
          /> */}
        <div className="d-flex justify-content-between mt-2">
          <div>
          <p className="desc">Resend OTP in</p>
          </div>
          <div>
          {seconds > 0 || minutes > 0 ? (
          <p className="timer">
          {minutes < 10 ? `0${minutes}` : minutes}:
          {seconds < 10 ? `0${seconds}` : seconds}
          </p>
          ) : (
          <p></p>
          )}
          
            <button
              disabled={seconds > 0 || minutes > 0}
              style={{
                color: seconds > 0 || minutes > 0 ? "#DFE3E8" : "#FF5630",
              }}
              onClick={resendOtp}

              type="button"
              role="button"
              className="btn btn-link d-inline ms-1 font-14"
            >
              Resend OTP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
);

export default OTPVerification;
