import React, { useState } from "react";
import "./index.css";
function Random() {
  let str = "srtrrt";

  let b = 0;
  let random1;
  let valid = 0;
  function Res() {
    valid++;
    let images = document.querySelectorAll(".game");
    let i = 100;
    let id = setInterval(function () {
      i += 100;
      if (b == 20) {
        document.querySelector(".win-name").textContent = `${images[random1]
          .getAttribute("class")
          .slice(4)}`;
        return;
      }
      if (i == 10000) {
        clearInterval(id);
      } else {
        random1 = Math.floor(Math.random() * 6) + 1;
        images[random1].style.zIndex = `${i}`;
        b++;
      }
    }, i);

    // setWinnerState(resState) = images[random2].textContent;
  }
  return (
    <div className="cont-spinner-images">
      <div className=" spinner">
        <button onClick={Res} className="spin">
          <i className="fa-solid fa-dice"></i>Spin
          <i className="fa-solid fa-dice"></i>
        </button>
        <div className="images">
          <img
            id="1"
            src="https://cdn.vox-cdn.com/thumbor/WyoHivg0GwfRBtpfi9CLzF1EBtc=/0x0:1024x1024/1400x1050/filters:focal(512x512:513x513)/cdn.vox-cdn.com/uploads/chorus_asset/file/19623396/Tetris_Logo.png"
            alt=""
            className="game Tetris"
          />
          <img
            id="2"
            src="https://www.iphones.ru/wp-content/uploads/2010/03/IMG_03231.jpg"
            alt=""
            className="game Farmfrenzy"
          />
          <img
            id="3"
            src="https://playminigames.net/content/gameimagecontent/Pac-Man_16347d50f0d5449db41c54ddac0f9b0e.png"
            alt=""
            className="game Pacman"
          />
          <img
            id="4"
            src="https://cdn.cloudflare.steamstatic.com/steam/apps/105600/header.jpg?t=1666290860"
            alt=""
            className="game Terraria"
          />
          <img
            id="5"
            src="https://www.esrb.org/wp-content/uploads/2022/11/Minecraft-FEATURED-1024x576-_-R.jpg"
            alt=""
            className="game Minecraft"
          />
          <img
            id="6"
            src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/489830/capsule_616x353.jpg?t=1717972262"
            alt=""
            className="game Skyrim"
          />
          <h1 className="win">WINNER: </h1>
          <h1 className="win-name"></h1>
        </div>
      </div>
    </div>
  );
}

export default Random;
