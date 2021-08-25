import React from "react";

function UserCard(props) {
  const { data } = props;
  return (
    <div className="w-2/12 flex flex-col user-card items-center px-2 mb-3">
      <div className="w-full flex flex-row bg-gray-200 py-3 px-3 rounded-md items-center justify-center justify-items-center">
        <div className="flex flex-row border-2 bg-white border-gray-300 w-[60px] h-[60px] rounded-full overflow-hidden items-center mr-3 justify-center">
          <img
            src={data.avatar ? data.avatar : "/images/avatar.png"}
            className="w-full"
            alt="User"
          />
        </div>
        <div className="flex flex-col w-9/12">
          <a
            href="/user-management/edit-user"
            className="text-primary font-bold"
          >
            {data.firstName} {data.lastName}
          </a>
          <p className="text-xs mt-1 text-gray-600">{data.email}</p>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
