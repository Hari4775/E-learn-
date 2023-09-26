import { useState } from "react";

// import { ReactComponent as LockDotsIcon } from "../../../../../assets/icons/icon-lock-dots.svg";
// import { ReactComponent as LockIcon } from "../../../../../assets/icons/icon-lock.svg";
// import { ReactComponent as InfoCircleIcon } from "../../../../../assets/icons/icon-info-circle.svg";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm } from "react-hook-form"
import { ReactComponent as MailIcon } from "../../../../../assets/icons/icon-email.svg"
import { useDispatch } from "react-redux";

interface forgotValidInterface {
  email: string
}

const ForgotPasswordForm = () => {


  const resetLoginSchema = yup.object({
    email: yup.string().required(),
  }).required();

  const { register, handleSubmit, watch, formState: { errors } } = useForm<forgotValidInterface>({
    resolver: yupResolver(resetLoginSchema)
  });

  const dispatch = useDispatch<any>()

  const forgotPasswordSubmit = (submitData: any) => {
    dispatch(forgotPasswordSubmit(submitData))
  }

  return (
    <div className="form-area">
      <h1 className="form-title">Reset password</h1>
      <p className="description">Enter your email below and submit to reset password. An email will be sent to you with instructions.</p>
      <div>
        <div className="login-form">
          <form onSubmit={handleSubmit(forgotPasswordSubmit)} action="">
            <div className="form-control-wrap mb-3">
              <label className="form-label">Email Address</label>
              <div className="icon-form-control">
                <div className="start-icon">
                  <MailIcon />
                </div>
                <input
                  className="form-control"
                  placeholder="Enter your email"
                  {...register("email")}
                  name="email"
                />
              </div>
              <p className="validation-text">{errors.email?.message}</p>
            </div>

            <div className="mb-4">
              <button
                type="submit"
                role="button"
                className="btn btn-lg btn-primary w-100"
              // disabled={isLoading}
              // onClick={loginClick}
              >
                Reset Password
                {/* {isLoading ? "Logging in..." : "Login"} */}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
