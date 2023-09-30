import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppThunk } from "../store";
import { axiosInstance } from "../../common/interceptors/axiosConfig";
import { showNotification } from "../../common/toast/toast";
import axios from "axios";
import { error } from "console";
import { useNavigate } from "react-router-dom";

export interface LoginState {
  errors: any;
  isLoading: boolean;
  isAuthenticated: boolean;
  accessToken: any;
  isSignup: any;
}

const initialState: LoginState = {
  errors: null,
  isLoading: false,
  isAuthenticated: false,
  accessToken: null,
  isSignup: null,
};

const LoginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setErrors: (state, { payload }: PayloadAction<any>) => {
      state.errors = payload;
    },
    setLoading: (state, { payload }: PayloadAction<any>) => {
      state.isLoading = payload;
    },
    setIsAuthenticated: (state, { payload }: PayloadAction<any>) => {
      state.isAuthenticated = payload;
    },
    setAccessToken: (state, { payload }: PayloadAction<any>) => {
      state.accessToken = payload;
    },
    setSignup: (state, { payload }: PayloadAction<any>) => {
      state.accessToken = payload;
    },
  },
});

export const login =
  (body: any, setIsSuccess: any): AppThunk =>
  async (dispatch) => {
    dispatch(setLoading(true));
    try {
      let URL = "/login";
      const response = await axiosInstance({
        data: { url: URL, method: "post", data: body },
        token: false,
      });
      if (response.data) {
        dispatch(setLoading(false));
        if (response.data.status && response.data.status === "success") {
          sessionStorage.setItem("token", response.data.token);
          dispatch(setIsAuthenticated(true));
          dispatch(setAccessToken(response.data.token));
          setIsSuccess(true);
        }
      }
    } catch (error: any) {
      dispatch(setLoading(false));
      dispatch(setErrors(error?.response));
    }
  };

export const logout = (): AppThunk => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    let URL = "/logout";
    const response = await axiosInstance({
      data: { url: URL, method: "post" },
      token: true,
    });
    if (response.data) {
      dispatch(setLoading(false));
      if (response.data.status && response.data.status === "success") {
        sessionStorage.clear();
        dispatch(setIsAuthenticated(false));
        dispatch(setAccessToken(""));
      }
    }
  } catch (error: any) {
    dispatch(setErrors(error?.response));
    dispatch(setLoading(false));
  }
};

export const signup =
  (body: any, setIsSuccess: any): AppThunk =>
  async (dispatch) => {
    dispatch(setLoading(true));
    try {
      let URL = "/register";
      const response = await axiosInstance({
        data: { url: URL, method: "post", data: body },
        token: false,
      });
      if (response.data) {
        dispatch(setLoading(false));
        if (response.data.status && response.data.status === "success") {
          sessionStorage.setItem("studentToken", response.data.token);
          dispatch(setIsAuthenticated(true));
          dispatch(setAccessToken(response.data.token));
          setIsSuccess(true);
          showNotification({
            message: "Registration success.",
            theme: "light",
            type: "success",
          });
        }
      }
    } catch (error: any) {
      dispatch(setLoading(false));
      dispatch(setErrors(error?.response));
    }
  };

export const forgotPassword =
  (body: any): AppThunk =>
  async (dispatch) => {
    dispatch(setLoading(true));
    try {
      let URL = "/register";
      const response = await axiosInstance({
        data: { url: URL, method: "post", data: body },
        token: false,
      });
      if (response.data) {
        dispatch(setLoading(false));
        if (response.data.status && response.data.status === "success") {
          dispatch(setSignup(response.data));
        }
      }
    } catch (error: any) {
      dispatch(setLoading(false));
      dispatch(setErrors(error?.response));
    }
  };

export const forgotPasswordEmailSubmit =
  (body: { otp: string; phone: string }, setIsSuccess: any): AppThunk =>
  async (dispatch) => {
    dispatch(setLoading(true));
    console.log(body, "bodyy email");
    try {
      let URL = "/forgot/password";
      const response = await axiosInstance({
        data: { url: URL, method: "post", data: body },
        token: false,
      });
      if (response.data) {
        console.log(response.data, "response dataaa email");
        dispatch(setLoading(false));
        if (response.data.status && response.data.status === "success") {
          setIsSuccess(true);
        }
      }
    } catch (error: any) {
      dispatch(setLoading(false));
      dispatch(setErrors(error?.response));
    }
  };

export const emailOtp =
  (body: any): AppThunk =>
  async (dispatch) => {
    dispatch(setLoading(true));
    console.log(body, "bodyysss");
    try {
      let URL = "/verify/email/otp";
      const response = await axiosInstance({
        data: { url: URL, method: "post", data: body },
        token: false,
      });
      if (response.data) {
        console.log(response.data, "response dataaa otpp");
        dispatch(setLoading(false));
        if (response.data.status && response.data.status === "success") {
        }
      }
    } catch (error: any) {
      dispatch(setLoading(false));
      dispatch(setErrors(error?.response));
    }
  };

export const passwordReset =
  (body: {
    password: string;
    confirm_password: string;
    setIsSuccess: any;
  }): AppThunk =>
  async (dispatch) => {
    dispatch(setLoading(true));
    console.log(body, "bodyy email");
    try {
      let URL = "/forgot/passwor/change/password";
      const response = await axiosInstance({
        data: { url: URL, method: "post", data: body },
        token: false,
      });
      if (response.data) {
        console.log(response.data, "response data reset password");
        dispatch(setLoading(false));
        if (response.data.status && response.data.status === "success") {
          body.setIsSuccess(true);
        }
      }
    } catch (error: any) {
      dispatch(setLoading(false));
      dispatch(setErrors(error?.response));
    }
  };

export const mobileValidation =
  (body: any, setIndex: any): AppThunk =>
  async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const URL = "/generate/phone/otp";
      const response = await axiosInstance({
        data: { url: URL, method: "post", data: body },
        token: true,
      });
      if (response.data) {
        console.log(response.data, "response data");
        dispatch(setLoading(false));
        if (response.data && response.data.status === "success") {
          setIndex(1);
        }
      }
    } catch (error: any) {
      dispatch(setLoading(false));
      dispatch(setErrors(error?.response));
    }
  };

export const mobileOtp =
  (body: { otp: string; phone: string }, setIndex: any): AppThunk =>
  async (dispatch) => {
    dispatch(setLoading(true));
    console.log(body, "bodyyy");
    try {
      const URL = "verify/phone/otp";
      const response = await axiosInstance({
        data: { url: URL, method: "post", data: body },
        token: true,
      });
      if (response.data) {
        dispatch(setLoading(false));
        if (response.data && response.data.status === "success") {
          setIndex(2);
        }
      }
    } catch (error: any) {
      dispatch(setLoading(false));
      dispatch(setErrors(error?.response));
    }
  };

export const registerFinish =
  (body: any, setIndex: any): AppThunk =>
  async (dispatch) => {
    dispatch(setLoading(true));
    console.log(body, "regfinishbody");
    try {
      let URL = "register/finish";
      const response = await axiosInstance({
        data: { url: URL, method: "post", data: body },
        token: true,
      });
      if (response.data) {
        console.log(response.data, "responceee");
        dispatch(setLoading(false));
        if (response.data.status && response.data.status === "success") {
        }
      }
    } catch (error: any) {
      dispatch(setLoading(false));
      dispatch(setErrors(error?.response));
    }
  };

export const {
  setErrors,
  setLoading,
  setIsAuthenticated,
  setAccessToken,
  setSignup,
} = LoginSlice.actions;

export default LoginSlice.reducer;
