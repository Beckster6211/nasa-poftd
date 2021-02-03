import React from "react";
import "./background.css";

function Background() {
  return (
    <div>
      <img
        className="background"
        src={
          "https://static01.nyt.com/images/2016/02/26/arts/26LASTMAN1/26LASTMAN1-articleLarge.jpg?quality=75&auto=webp&disable=upscale"
        }
      ></img>
    </div>
  );
}

export default Background;
