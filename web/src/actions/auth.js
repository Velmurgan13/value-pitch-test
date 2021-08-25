import axios from "axios";
import TYPES from "./types";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: TYPES.LOGIN_REQUEST,
    });

    const response = await axios.post(
      `${process.env.REACT_APP_API_SERVER_URL}/login`,
      {
        email,
        password,
      }
    );

    if (response.data.success === true) {
      dispatch({
        type: TYPES.LOGIN_SUCCESS,
        token: response.data.data.token,
      });
    }
  } catch (error) {
    return dispatch({
      type: TYPES.LOGIN_FAILURE,
    });
  }
};
