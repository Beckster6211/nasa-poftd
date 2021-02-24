import React from "react";
import "./images.css";

function Images() {
  return (
    <div>
      <img
        className="images"
        src={"./26LASTMAN1-articleLarge.jpg"}
        alt={"Last man on the moon"}
        title={"Eugene Cernan 'Last man on the Moon'"}
      ></img>
      <img
        className="images"
        src={"./GettyImages-90738471-e1595335114184.jpg"}
        alt={"Apollo 11 crew"}
        title={
          "Apollo 11 crew, Neil Armstrong, Michael Collins & Edwin 'Buzz' Aldrin"
        }
      ></img>
      <img
        className="images"
        src={"./Apollo11-1st-steps-Armstrong-1969-cp-e1468838441975.jpg"}
        alt={"First step"}
        title={"First step"}
      ></img>
      <img
        className="images"
        src={"./unnamed.jpg"}
        alt={"Nasa logo"}
        title={"Nasa logo"}
      />
      <p className="quote">
        "One small step for man. One giant leap for mankind"
      </p>
    </div>
  );
}

export default Images;
