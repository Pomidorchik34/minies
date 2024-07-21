import React from "react";
import "./index.css";
function images() {
  let image = document.querySelectorAll(".image-game");
  image.forEach((value) => {
    value.addEventListener("click", (event) => {
      alert("true");
      event.style.zIndex = "10";
      event.style.width = "900px";
      event.style.height = "600px";
    });
  });
  return (
    <div className="gallery">
      <h1 className="count">Games Gallery</h1>
      <div className="images">
        <a
          href="https://cdn.vox-cdn.com/thumbor/WyoHivg0GwfRBtpfi9CLzF1EBtc=/0x0:1024x1024/1400x1050/filters:focal(512x512:513x513)/cdn.vox-cdn.com/uploads/chorus_asset/file/19623396/Tetris_Logo.png"
          data-lightbox="mygallery"
        >
          <img
            id="1"
            src="https://cdn.vox-cdn.com/thumbor/WyoHivg0GwfRBtpfi9CLzF1EBtc=/0x0:1024x1024/1400x1050/filters:focal(512x512:513x513)/cdn.vox-cdn.com/uploads/chorus_asset/file/19623396/Tetris_Logo.png"
            alt=""
            className="image-game Tetris"
          />
        </a>

        <a
          href="https://www.iphones.ru/wp-content/uploads/2010/03/IMG_03231.jpg"
          data-lightbox="mygallery"
        >
          <img
            id="2"
            src="https://www.iphones.ru/wp-content/uploads/2010/03/IMG_03231.jpg"
            alt=""
            className="image-game Farmfrenzy"
          />
        </a>

        <a
          href="https://playminigames.net/content/gameimagecontent/Pac-Man_16347d50f0d5449db41c54ddac0f9b0e.png"
          data-lightbox="mygallery"
        >
          <img
            id="3"
            src="https://playminigames.net/content/gameimagecontent/Pac-Man_16347d50f0d5449db41c54ddac0f9b0e.png"
            alt=""
            className="image-game Pacman"
          />
        </a>

        <a
          href="https://cdn.cloudflare.steamstatic.com/steam/apps/105600/header.jpg?t=1666290860"
          data-lightbox="mygallery"
        >
          <img
            id="4"
            src="https://cdn.cloudflare.steamstatic.com/steam/apps/105600/header.jpg?t=1666290860"
            alt=""
            className="image-game Terraria"
          />
        </a>

        <a
          href="https://www.esrb.org/wp-content/uploads/2022/11/Minecraft-FEATURED-1024x576-_-R.jpg"
          data-lightbox="mygallery"
        >
          <img
            id="5"
            src="https://www.esrb.org/wp-content/uploads/2022/11/Minecraft-FEATURED-1024x576-_-R.jpg"
            alt=""
            className="image-game Minecraft"
          />
        </a>

        <a
          href="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/489830/capsule_616x353.jpg?t=1717972262"
          data-lightbox="mygallery"
        >
          <img
            id="6"
            src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/489830/capsule_616x353.jpg?t=1717972262"
            alt=""
            className="image-game Skyrim"
          />
        </a>

        <a
          href="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1593500/capsule_616x353.jpg?t=1721154083"
          data-lightbox="mygallery"
        >
          <img
            id="7"
            src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1593500/capsule_616x353.jpg?t=1721154083"
            alt=""
            className="image-game GodOfWar"
          />
        </a>

        <a
          href="https://image.api.playstation.com/vulcan/ap/rnd/202210/3121/XemhVDBuAEVrQXUkJF57ZsdX.jpg"
          data-lightbox="mygallery"
        >
          <img
            id="8"
            src="https://image.api.playstation.com/vulcan/ap/rnd/202210/3121/XemhVDBuAEVrQXUkJF57ZsdX.jpg"
            alt=""
            className="image-game Nfs"
          />
        </a>

        <a
          href="https://www.carscoops.com/wp-content/uploads/2024/03/Pininfarina-Battista-Forza-Horizon-5.jpg"
          data-lightbox="mygallery"
        >
          <img
            id="9"
            src="https://www.carscoops.com/wp-content/uploads/2024/03/Pininfarina-Battista-Forza-Horizon-5.jpg"
            alt=""
            className="image-game ForzaHorizon"
          />
        </a>
      </div>
    </div>
  );
}

export default images;
