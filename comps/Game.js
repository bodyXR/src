import React from "react";

export default function Game(props) {
  return (
    <div className="game">
      <img src={props.imgUrl} className="game-img" />
      <h1 className="game-title margin"> {props.title} </h1>
      <p className="game-discription margin"> {props.discription} </p>
      <button className="btn">
        <a href={props.gameUrl} target="_blank">
          Game Bage
        </a>
      </button>
    </div>
  );
}
