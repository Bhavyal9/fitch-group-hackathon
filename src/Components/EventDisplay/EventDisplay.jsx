import React from "react";
import "./EventDisplay.css";

export const EventDisplay = (props) => {
  const addToCart = (event) => {
    const idList = localStorage.getItem("eventId") || "[]";
    console.log(idList);
    let parsedId = JSON.parse(idList || "[]");
    console.log(parsedId);
    if (!parsedId.includes(event.id)) {
      parsedId = [...parsedId, event.id];
      localStorage.setItem("eventId", JSON.stringify(parsedId));
    }
  };

  const { event } = props;
  return (
    <>
      {" "}
      <div className="eventDisplay">
        <img
          className="event-image"
          src={
            event.acf.image ? event.acf.image.url : "https://placehold.it/100"
          }
          alt="event-img"
        ></img>
        <div className="details">
          <p className="title bold">{event.title.rendered}</p>
          <p className="location">Location: {event.acf.location}</p>
          <p className="date">Date: {event.acf.date}</p>
          <p className="time">Time: {event.acf.time}</p>
          <p className="price">Price:{event.acf.price} BGN</p>
          <button
            class="event-button"
            onClick={() => {
              addToCart(event);
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
      <h2 className="discription">Description</h2>
      <p className="desc">{event.acf.details}</p>
    </>
  );
};
