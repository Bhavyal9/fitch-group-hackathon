import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { EventDisplay } from "../Components/EventDisplay/EventDisplay";
import eventData from "../utils/eventDetails";
import axios from "axios";

export const Event = () => {
  const [eventDetails, setEventDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios.get(`http://localhost:8000/wp-json/wp/v2/event/`).then(({ data }) => {
      console.log({ data });
      setEventDetails(data);
      setIsLoading(false);
    });
  }, []);
  console.log("ed", eventDetails);
  const { eventId } = useParams();
  const event = eventDetails.find((e) => {
    console.log({ e, id: e.id, eventId: +eventId });
    return e.id === +eventId;
  });
  return (
    <div>
      {event ? (
        <EventDisplay event={event} />
      ) : (
        <pre>{JSON.stringify({ event, eventDetails, eventId }, null, 2)}</pre>
      )}
      {/* <EventDisplay event={event} /> */}
    </div>
  );
};
