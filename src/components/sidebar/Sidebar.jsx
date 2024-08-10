import React from "react";
import "./Sidebar.css";
import { MdRssFeed } from "react-icons/md";
import { IoIosChatbubbles } from "react-icons/io";
import { FaFireFlameCurved } from "react-icons/fa6";
import { MdGroups } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { MdEmojiEvents } from "react-icons/md";
import { SiDiscourse } from "react-icons/si";

export default function Sidebar() {
  return (
    <div className="sidebar ">
      <div className="sidebarWrapper">
        <ul className="sidebarList text-black">
          <li className="sidebarListItem">
            <MdRssFeed className="sidebarIcon bg-black" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <IoIosChatbubbles className="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <FaFireFlameCurved className="sidebarIcon" />
            <span className="sidebarListItemText">Vedios</span>
          </li>
          <li className="sidebarListItem">
            <MdGroups className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <FaBookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <FaQuestionCircle className="sidebarIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <FaBuilding className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <MdEmojiEvents className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <SiDiscourse className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>

        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img
              src="src/assets/profile image.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Sangram Singh</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="src/assets/profile image.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Sangram Singh</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="src/assets/profile image.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Sangram Singh</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="src/assets/profile image.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Sangram Singh</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="src/assets/profile image.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Sangram Singh</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="src/assets/profile image.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Sangram Singh</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="src/assets/profile image.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Sangram Singh</span>
          </li>{" "}
          <li className="sidebarFriend">
            <img
              src="src/assets/profile image.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Sangram Singh</span>
          </li>{" "}
          <li className="sidebarFriend">
            <img
              src="src/assets/profile image.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Sangram Singh</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
