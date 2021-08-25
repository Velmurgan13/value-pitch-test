import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserCard from "./UserCard";
import { getUsers } from "../../../actions/users";
import Header from "../../Header";
import Footer from "../../Footer";

function UserList() {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.getUsers);

  const existingToken = localStorage.getItem("token");
  if (!existingToken) {
    window.location = "/";
  }

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const userCards =
    users && users.map((user) => <UserCard data={user} key={user._id} />);

  return (
    <>
      <Header />
      <div className="flex flex-col items-center py-8 min-h-[800px]">
        <div className="flex flex-row">
          <h1 className="font-bold text-3xl">User list</h1>
          <a
            href="/user-management/create-user"
            className="ml-5 px-3 py-2 text-sm font-bold bg-primary text-white rounded-md"
          >
            Create new user
          </a>
        </div>
        <div className="flex flex-row w-10/12 flex-wrap px-4 py-4 items-center justify-center justify-items-center">
          {userCards ? userCards : "Loading users.."}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default UserList;
