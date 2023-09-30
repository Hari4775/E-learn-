import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppThunk } from "../store";
import { axiosInstance } from "../../common/interceptors/axiosConfig";

export interface courseState {
  errors: any;
  isLoading: boolean;
  courseList: any;
  successFlag: boolean;
  courseCategory: any[];
}

const initialState: courseState = {
  errors: null,
  isLoading: false,
  courseList: [],
  courseCategory: [],
  successFlag: false,
};

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    setErrors: (state, { payload }: PayloadAction<any>) => {
      state.errors = payload;
    },
    setLoading: (state, { payload }: PayloadAction<any>) => {
      state.isLoading = payload;
    },
    setCourseList: (state, { payload }: PayloadAction<any>) => {
      state.courseList = payload;
    },
    setCourseCategory: (state, { payload }: PayloadAction<any>) => {
      state.courseCategory = payload;
    },
  },
});

export const getCourseList = (): AppThunk => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    let URL = "/course/list";
    const response = await axiosInstance({
      data: { url: URL, method: "post", data: null },
      token: true,
    });
    if (response.data) {
      if (response.data.status && response.data.status === "success") {
        dispatch(setLoading(false));
        if (response.data?.course && response.data?.course?.data) {
          dispatch(setCourseList(response.data?.course?.data));
        }
      }
    }
  } catch (error: any) {
    dispatch(setLoading(false));
    dispatch(setErrors(error?.response));
  }
};

export const getcourseCategory = (): AppThunk => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    let URL = "/program/list";
    const response = await axiosInstance({
      data: { url: URL, method: "post", data: null },
      token: true,
    });
    if (response.data) {
      if (response.data.status && response.data.status === "success") {
        dispatch(setCourseCategory(response?.data?.program));
        dispatch(setLoading(false));
      }
    }
  } catch (error: any) {
    dispatch(setLoading(false));
    dispatch(setErrors(error?.response));
  }
};

export const { setLoading, setErrors, setCourseList, setCourseCategory } =
  courseSlice.actions;

export default courseSlice.reducer;
