import axios from "axios";
import TYPES from "./types";

export const getUsers = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");

    dispatch({
      type: TYPES.GET_USERS_REQUEST,
    });

    const response = await axios.get(
      `${process.env.REACT_APP_API_SERVER_URL}/users`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.data.success === true) {
      dispatch({
        type: TYPES.GET_USERS_SUCCESS,
        users: response.data.data,
      });
    }
  } catch (error) {
    return dispatch({
      type: TYPES.GET_USERS_FAILURE,
    });
  }
};

export const getUserById = (userId) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");

    dispatch({
      type: TYPES.GET_USER_BY_ID_REQUEST,
    });

    const response = await axios.get(
      `${process.env.REACT_APP_API_SERVER_URL}/users/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.data.success === true) {
      dispatch({
        type: TYPES.GET_USER_BY_ID_SUCCESS,
        user: response.data.data,
      });
    }
  } catch (error) {
    return dispatch({
      type: TYPES.GET_USER_BY_ID_FAILURE,
    });
  }
};
export const createUser = (data) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");

    dispatch({
      type: TYPES.CREATE_USER_REQUEST,
    });

    const response = await axios.post(
      `${process.env.REACT_APP_API_SERVER_URL}/users/create-user`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.data.success === true) {
      dispatch({
        type: TYPES.CREATE_USER_SUCCESS,
        newUser: response.data.data,
      });
    }
  } catch (error) {
    return dispatch({
      type: TYPES.CREATE_USER_FAILURE,
    });
  }
};
