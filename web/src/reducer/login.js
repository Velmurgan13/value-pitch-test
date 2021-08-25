import TYPES from "../actions/types";

const initialState = {};
export function login(state = initialState, action) {
  let response = {};

  switch (action.type) {
    case TYPES.LOGIN_SUCCESS:
      response = {
        ...state,
        token: action.token,
      };
      break;

    default:
      response = state;
  }

  return response;
}
