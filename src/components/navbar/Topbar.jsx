import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdPerson } from "react-icons/io";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import "./Topbar.css";
const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarleft">
        <span className="logo">Posts</span>
      </div>
      <div className="topbarcenter">
        <div className="searchbar">
          <CiSearch className="searchIcon" />
          <input
            type="text"
            placeholder="Search for friend, post or video"
            className="searchinput"
          />
        </div>
      </div>
      <div className="topbarright">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <IoMdPerson />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <IoChatbubbleEllipsesOutline />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <IoMdNotificationsOutline />
            <span className="topbarIconBadge">3</span>
          </div>
        </div>
        <img src="src/assets/profile image.jpg" alt="" className="topbarImg" />
      </div>
    </div>
  );
};

export default Topbar;
