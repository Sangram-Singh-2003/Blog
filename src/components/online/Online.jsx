import React from "react";
import "./Online.css";
import { Users } from "../../../dummyData.js";

export default function Online({ userId }) {
  const user = Users.find((user) => user.id === userId);

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <img className="rightbarProfileImg" src={user.profilePicture} alt="" />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUsername">{user.username}</span>
    </li>
  );
}
