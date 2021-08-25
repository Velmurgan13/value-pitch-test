import { combineReducers } from "redux";
import { login } from "./login";
import { getUsers, createUser, getUserById } from "./user";

// eslint-disable-next-line
export default () =>
  combineReducers({
    login,
    getUsers,
    createUser,
    getUserById,
  });
