import { ChatBubbleOutline, VerifiedUser } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import "./Post.css";

function Post({ displayName, username, verified, text, avatar, image }) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src={avatar} />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>{displayName}</h3>
            <span className="post__headerSpecial">
              <VerifiedUser className="post__badge" />@{username}
            </span>
          </div>
          <div className="post__headerDescription">
            <p>{text}</p>
          </div>
        </div>
        <img src={image} />
      </div>
    </div>
  );
}

export default Post;
