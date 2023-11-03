import React from "react";
import "./items.css";
import { Link } from "react-router-dom";

export const Items = (props) => {
  return (
    <div className="item">
      <Link to={`/event/${props.id}`}>
        <img className="event-img" src={props.image} alt="event-imges" />{" "}
      </Link>
      <p>{props.name}</p>
      <p>{props.location}</p>
      <div className="datetime">
        <p>{props.date}</p>
        <p>{props.time}</p>
      </div>
      <p className="price">{props.price} BGN</p>
    </div>
  );
};
