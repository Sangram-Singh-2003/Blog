import React from "react";
import "./Feed.css";
import Share from "../share/Share";
import Post from "../post/Post";
import { Posts } from "../../../dummyData";

export default function Feed() {
  return (
    <div className="feedbar">
      <div className="feedWrapper">
        <Share />
        {Posts.map((post) => (
          <Post key={post.id} userId={post.id} />
        ))}
      </div>
    </div>
  );
}
