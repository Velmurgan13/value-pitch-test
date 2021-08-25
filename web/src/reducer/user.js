import TYPES from "../actions/types";

const initialState = {};
export function getUsers(state = initialState, action) {
  let response = {};

  switch (action.type) {
    case TYPES.GET_USERS_SUCCESS:
      response = {
        ...state,
        users: action.users,
      };
      break;

    default:
      response = state;
  }

  return response;
}

export function createUser(state = initialState, action) {
  let response = {};

  switch (action.type) {
    case TYPES.CREATE_USER_SUCCESS:
      response = {
        ...state,
        newUser: action.newUser,
      };
      break;

    default:
      response = state;
  }

  return response;
}

export function getUserById(state = initialState, action) {
  let response = {};

  switch (action.type) {
    case TYPES.GET_USER_BY_ID_SUCCESS:
      response = {
        ...state,
        user: action.user,
      };
      break;

    default:
      response = state;
  }

  return response;
}
