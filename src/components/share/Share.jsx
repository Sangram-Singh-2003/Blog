import React from "react";
import "./Share.css";
import { FcClapperboard } from "react-icons/fc";
import { FcLandscape } from "react-icons/fc";
import { FaLocationDot } from "react-icons/fa6";
import { RiEmotionLaughFill } from "react-icons/ri";
export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareProfileImg"
            src="src/assets/profile image.jpg"
            alt=""
          />
          <input placeholder="What's in your mind?" className="shareInput" />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <FcLandscape htmlColor="tomato" className="shareIcon" />
              {/* <img className="shareIcon" src="/assets/person/1.jpeg" alt="" /> */}
              <span className="shareOptionText">Photo</span>
            </div>
            <div className="shareOption">
              <FcClapperboard htmlColor="blue" className="shareIcon" />
              {/* <img className="shareIcon" src="/assets/person/1.jpeg" alt="" /> */}
              <span className="shareOptionText">Video</span>
            </div>
            <div className="shareOption">
              <FaLocationDot htmlColor="green" className="shareIcon" />
              {/* <img className="shareIcon" src="/assets/person/1.jpeg" alt="" /> */}
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <RiEmotionLaughFill htmlColor="golden" className="shareIcon" />
              {/* <img className="shareIcon" src="/assets/person/1.jpeg" alt="" /> */}
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
}
