import React, { useEffect, useState } from "react";
import axios from "axios";
import "./fastSelling.css";
import eventData from "../../utils/eventDetails.js";
import { Items } from "../Items/Items.jsx";

export const FastSellingEvents = () => {
  const [eventDetails, setEventDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("http://localhost:8000/wp-json/wp/v2/event")
      .then((response) => response.data)
      .then((data) => {
        setEventDetails(data);
        setIsLoading(false);
      });
  }, []);
  console.log("event", eventDetails);
  const fEvents = eventDetails.slice(0, 4);
  return (
    <div className="fastSelling">
      <h2>Fast Selling Events</h2>
      <hr />
      <div className="fastsellling-events">
        {fEvents.map((e, i) => {
          return (
            <Items
              key={i}
              id={e.id}
              name={e.title.rendered}
              image={e.acf.image.url}
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
