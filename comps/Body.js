import React from "react";
// comps
import Game from "./Game";
import Video from "./video";
import Contacts from "./Contacts";
// data
import GameData from "../GameData";
import VideosData from "../VideosData";

export default function Body() {
  // data
  const gamesData = GameData.map((item) => <Game {...item} />);
  const videosData = VideosData.map((item) => <Video {...item} />);

  return (
    <div className="containor text">
      {/* first section {infos} */}

      <div className="infos">
        <h1 className="centerd bold text">Body Xr</h1>
        <p className="centerd">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          suscipit <br />
          earum culpa praesentium! Culpa sit quas dolores! Totam, fugiat
          quibusdam! <br />
          Ducimus a nostrum ipsum illum! Totam sunt exercitationem et vitae.
        </p>
      </div>

      {/* second section {games} */}

      <h1 className="centerd bold" id="games">
        Top Games
      </h1>
      <div className="games containors">{gamesData}</div>

      {/* therd section {videos} */}

      <h1 className="centerd bold" id="videos">
        Top videos
      </h1>
      <div className="containors"> {videosData} </div>

      {/* forth section {contacts} */}

      <h1 className="centerd bold" id="contacts">
        Contacts
      </h1>
      <div className="containors">
        <img
          className="my-img"
          src="https://cdn.discordapp.com/attachments/945699086282129418/1085679274494795929/image.png"
        />
        <Contacts />
      </div>
    </div>
  );
}
