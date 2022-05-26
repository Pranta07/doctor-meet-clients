import axios, { AxiosRequestConfig } from "axios";
import {
  ALL_USERS_FAIL,
  ALL_USERS_REQUEST,
  ALL_USERS_SUCCESS,
  CLEAR_ERRORS,
  DELETE_USER_FAIL,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  FORGOT_PASSWORD_FAIL,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  LOAD_USER_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_USER_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  RESET_PASSWORD_FAIL,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_FAIL,
  UPDATE_PASSWORD_REQUEST,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PROFILE_FAIL,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_USER_FAIL,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
} from "../constants/userConstants";
import { AppDispatch } from "./../store";

// Login
export const login =
  (email: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      let token = window.localStorage.getItem("token");
      // if (!token) {
      //   token = document.cookie.split("=")[1];
      // }
      dispatch({ type: LOGIN_REQUEST });

      const config = { headers: { "Content-Type": "application/json" } };

      // console.log(token);
      const { data } = await axios.post(
        `https://doctor-meet-server.herokuapp.com/api/v1/login`,
        { email, password },
        config,
        //@ts-ignore
        token
      );
      localStorage.setItem("token", data.token);
      dispatch({ type: LOGIN_SUCCESS, payload: data.user });
    } catch (error: any) {
      dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
    }
  };

// Register
export const register = (userData: any) => async (dispatch: AppDispatch) => {
  try {
    dispatch({ type: REGISTER_USER_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(
      `https://doctor-meet-server.herokuapp.com/api/v1/register`,
      userData,
      config
    );
    window.localStorage.setItem("token", data.token);
    // const token = window.localStorage.getItem("token");
    //@ts-ignore
    // document.cookie = `token=${token}`;
    dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user });
  } catch (error: any) {
    dispatch({
      type: REGISTER_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Load User
export const loadUser = () => async (dispatch: AppDispatch) => {
  try {
    let token = window.localStorage.getItem("token");
    // if (!token) {
    //   token = document.cookie.split("=")[1];
    // }
    dispatch({ type: LOAD_USER_REQUEST });
    const { data } = await axios.get(
      `https://doctor-meet-server.herokuapp.com/api/v1/me`,
      //@ts-ignore
      { headers: { Authorization: `Bearer ${token}` } }
    );

    dispatch({ type: LOAD_USER_SUCCESS, payload: data.user });
  } catch (error: any) {
    dispatch({ type: LOAD_USER_FAIL, payload: error.response.data.message });
  }
};

// Logout User
export const logout = () => async (dispatch: AppDispatch) => {
  try {
    await axios.get(`https://doctor-meet-server.herokuapp.com/api/v1/logout`);
    window.localStorage.removeItem("token");
    dispatch({ type: LOGOUT_SUCCESS });
  } catch (error: any) {
    dispatch({ type: LOGOUT_FAIL, payload: error.response.data.message });
  }
};

// Update Profile
export const updateProfile =
  (userData: any) => async (dispatch: AppDispatch) => {
    try {
      dispatch({ type: UPDATE_PROFILE_REQUEST });

      const config = { headers: { "Content-Type": "multipart/form-data" } };

      const { data } = await axios.put(
        `https://doctor-meet-server.herokuapp.com/api/v1/me/update`,
        userData,
        config
      );

      dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: data.success });
    } catch (error: any) {
      dispatch({
        type: UPDATE_PROFILE_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// Update Password
export const updatePassword =
  (passwords: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch({ type: UPDATE_PASSWORD_REQUEST });

      const config = { headers: { "Content-Type": "application/json" } };

      const { data } = await axios.put(
        `https://doctor-meet-server.herokuapp.com/api/v1/password/update`,
        passwords,
        config
      );

      dispatch({ type: UPDATE_PASSWORD_SUCCESS, payload: data.success });
    } catch (error: any) {
      dispatch({
        type: UPDATE_PASSWORD_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// Forgot Password
export const forgotPassword =
  (email: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch({ type: FORGOT_PASSWORD_REQUEST });

      const config = { headers: { "Content-Type": "application/json" } };

      const { data } = await axios.post(
        `https://doctor-meet-server.herokuapp.com/api/v1/password/forgot`,
        email,
        config
      );

      dispatch({ type: FORGOT_PASSWORD_SUCCESS, payload: data.message });
    } catch (error: any) {
      dispatch({
        type: FORGOT_PASSWORD_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// Reset Password
export const resetPassword =
  (token: string, passwords: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch({ type: RESET_PASSWORD_REQUEST });

      const config = { headers: { "Content-Type": "application/json" } };

      const { data } = await axios.put(
        `https://doctor-meet-server.herokuapp.com/api/v1/password/reset/${token}`,
        passwords,
        config
      );

      dispatch({ type: RESET_PASSWORD_SUCCESS, payload: data.success });
    } catch (error: any) {
      dispatch({
        type: RESET_PASSWORD_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// get All Users
export const getAllUsers = () => async (dispatch: AppDispatch) => {
  try {
    dispatch({ type: ALL_USERS_REQUEST });
    const { data } = await axios.get(
      `https://doctor-meet-server.herokuapp.com/api/v1/admin/users`
    );

    dispatch({ type: ALL_USERS_SUCCESS, payload: data.users });
  } catch (error: any) {
    dispatch({ type: ALL_USERS_FAIL, payload: error.response.data.message });
  }
};

// get  User Details
export const getUserDetails = (id: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch({ type: USER_DETAILS_REQUEST });
    const { data } = await axios.get(
      `https://doctor-meet-server.herokuapp.com/api/v1/admin/user/${id}`
    );

    dispatch({ type: USER_DETAILS_SUCCESS, payload: data.user });
  } catch (error: any) {
    dispatch({ type: USER_DETAILS_FAIL, payload: error.response.data.message });
  }
};

// Update User
export const updateUser =
  (id: string, userData: any) => async (dispatch: AppDispatch) => {
    try {
      dispatch({ type: UPDATE_USER_REQUEST });

      const config = { headers: { "Content-Type": "application/json" } };

      const { data } = await axios.put(
        `https://doctor-meet-server.herokuapp.com/api/v1/admin/user/${id}`,
        userData,
        config
      );

      dispatch({ type: UPDATE_USER_SUCCESS, payload: data.success });
    } catch (error: any) {
      dispatch({
        type: UPDATE_USER_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// Delete User
export const deleteUser = (id: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch({ type: DELETE_USER_REQUEST });

    const { data } = await axios.delete(
      `https://doctor-meet-server.herokuapp.com/api/v1/admin/user/${id}`
    );

    dispatch({ type: DELETE_USER_SUCCESS, payload: data });
  } catch (error: any) {
    dispatch({
      type: DELETE_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch: AppDispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
