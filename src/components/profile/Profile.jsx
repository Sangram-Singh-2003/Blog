import React from "react";
import "./Profile.css";
import Topbar from "../navbar/Topbar";

import Feed from "../feed/Feed";
import Rightbar from "../rightbar/Rightbar";

import Sidebar from "../sidebar/Sidebar";
export default function Profile() {
  return (
    <div>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="https://tse3.mm.bing.net/th?id=OIP.kapgobhepdAe2I4pvKSr_AHaD5&pid=Api&P=0&h=180"
                alt=""
              />
              <img
                className="profileUserImg"
                src="src/assets/WhatsApp Image 2024-07-07 at 15.35.31_468fa229 for website.jpg"
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Sangram Singh</h4>
              <span className="profileInfoDesc">Hello my friends</span>
            </div>
          </div>

          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </div>
  );
}
