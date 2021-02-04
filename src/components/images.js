import React from "react";
import "./images.css";

function Images() {
  return (
    <div>
      <img
        className="ManOnMoon"
        src={
          "https://static01.nyt.com/images/2016/02/26/arts/26LASTMAN1/26LASTMAN1-articleLarge.jpg?quality=75&auto=webp&disable=upscale"
        }
        alt={"Neil Armstrong on the moon"}
      ></img>
      <img
        className={"BuzzNeilMichael"}
        src={
          "https://content.fortune.com/wp-content/uploads/2020/07/GettyImages-90738471-e1595335114184.jpg"
        }
        alt={"Apollo 11 crew"}
      ></img>
      <img
        className={"FirstStep"}
        src={
          "https://earthsky.org/upl/2015/07/Apollo11-1st-steps-Armstrong-1969-cp-e1468838441975.jpg"
        }
        alt={"First step"}
      ></img>
      <img
        className="Nasa"
        src={
          "https://yt3.ggpht.com/ytc/AAUvwnhTEa6kEyqgSvL3wMaMbUDZtyHvhXehJppDCeOGUCI=s900-c-k-c0x00ffffff-no-rj"
        }
        alt={"Nasa logo"}
      />
      <p className="quote">"One small step for man..."</p>
    </div>
  );
}

export default Images;
