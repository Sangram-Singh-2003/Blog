import React, { useState } from "react";
import "./Post.css";
import { Posts } from "../../../dummyData";

export default function Post({ userId }) {
  const post = Posts.find((post) => post.id === userId);
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`post ${isExpanded ? "expanded" : ""}`}>
      <div className="postWrapper">
        <div className="postTop" onClick={toggleExpand}>
          <div className="postTopLeft">
            <img className="postProfileImg" src={post.photo} alt="" />
            <span className="postUsername">{post.name}</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <span className="postTopRightIcon">
              <i className="postTopRightIcon far fa-bookmark"></i>
            </span>
          </div>
        </div>
        <div className="postCenter">
          <span className="postText"></span>
          <img
            className={`postImg ${isExpanded ? "expanded" : ""}`}
            src={post.imgs}
            // src="https://images.pexels.com/photos/326501/pexels-photo-326501.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className={`likeIcon ${isLiked ? "animate" : ""}`}
              src="src/assets/react.svg"
              onClick={likeHandler}
              alt=""
            />

            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.desc} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
