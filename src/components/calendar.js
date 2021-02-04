import React, { useState } from "react";
import PictureOfTheDay from "./picture";

function Calendar() {
  let currentDatetime = new Date();
  let formattedDate =
    currentDatetime.getFullYear() +
    "-" +
    (currentDatetime.getMonth() + 1) +
    "-" +
    currentDatetime.getDate();

  const [date, setDate] = useState(formattedDate);

  return (
    <div>
      <p className="image"> Select a date:</p>
      <input
        onChange={(event) => setDate(event.target.value)}
        type="date"
        id="input-date"
        name="date"
        min="1995-06-16"
        max=""
      ></input>
      <PictureOfTheDay date={date} />
    </div>
  );
}

export default Calendar;
