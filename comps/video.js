import React from "react";

export default function Video(props) {
  return (
    <div className="video">
      <img src={props.imgUrl} className="youtube-img" />
      <h1 className="video-title game-title margin"> {props.title} </h1>

      <button className="btn">
        <a href={props.videoUrl} target="_blank">
          Watch Video
        </a>
      </button>
    </div>
  );
}
