import React, { useEffect, useState } from "react";
import axios from "axios";
import "./completeList.css";
import { Items } from "../Items/Items.jsx";
import eventData from "../../utils/eventDetails.js";

export const CompleteEventList = () => {
  const [eventDetails, setEventDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("http://localhost:8000/wp-json/wp/v2/event")
      // .then((response) => response.data)
      .then(({ data }) => {
        console.log({ data });
        setEventDetails(data);
        setIsLoading(false);
      });
  }, []);
  return (
    <div className="fullList">
      <h2>All Events</h2>
      <hr />
      <div className="completeEvents">
        {eventDetails.map((e, i) => {
          console.log({ e });
          return (
            <Items
              key={i}
              id={e.id}
              name={e.title.rendered}
              image={e.acf.image?.url}
              date={e.acf.date}
              time={e.acf.time}
              price={e.acf.price}
              location={e.acf.location}
            />
          );
        })}
      </div>
    </div>
  );
};
