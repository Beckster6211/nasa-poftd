import React, { useEffect, useState } from "react";
import "./picture.css";

function PictureOfTheDay({ date }) {
  const [picture, setPicture] = useState({});

  useEffect(() => {
    if (picture) {
      async function getPicture() {
        const res = await fetch(
          `https://api.nasa.gov/planetary/apod?date=${date}&api_key=fMYT0x1eP7MGu4Lwun4UbBRuw5g8ZswcVh40qibZ`,
          {
            headers: { accept: "application/json" },
          }
        );
        const data = await res.json();
        console.log(data);
        setPicture(data);
      }
      getPicture();
    }
  }, [date]);

  return (
    <div>
      <h1 className="pictureDescription"> {picture?.title} </h1>
      <img className="image" src={picture?.url}></img>
      <p className="pictureDescription"> {picture?.explanation} </p>
    </div>
  );
}

export default PictureOfTheDay;
