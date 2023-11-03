import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Components/Assets/Cart.css";

export const Cart = () => {
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
  const [count, setCount] = useState({});
  const [eventList, setEventList] = useState([]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const idList = localStorage.getItem("eventId") || "[]";
    let arrayList = [];
    let parsedId = JSON.parse(idList || "[]");
    if (parsedId.length > 0) {
      parsedId.forEach((pid) => {
        let idObj = eventDetails.find((e) => {
          return e.id === pid;
        });
        if (Object.keys(idObj || {}).length > 0) {
          arrayList.push(idObj);
        }
      });
    }
    setEventList(arrayList);
  }, [eventDetails]);
  console.log("list", eventList);

  const handleCount = (id, c) => {
    const countObj = {};
    countObj[id] = c;
    setCount({ ...count, ...countObj });
  };

  useEffect(() => {
    if (
      Object.keys(count || {}).length > 0 &&
      Object.keys(eventList || {}).length > 0
    ) {
      Object.keys(count).forEach((id) => {
        let t =
          count[id] *
          eventList.find((e) => {
            return e.id === +id;
          })?.acf.price;
        setTotal((tot) => tot + t);
      });
    }
  }, [count, eventList]);
  return (
    <div>
      <h1>All Events</h1>
      <div className="box">
        {eventList.map((items) => {
          return (
            <>
              <div className="event-list">
                <h1>{items.title.rendered}</h1>
                <div className="qty">
                  <p>Qty</p>
                  <input
                    type="text"
                    placeholder="0"
                    value={count?.items?.id}
                    onChange={(e) => {
                      handleCount(items.id, e.target.value);
                    }}
                  />
                </div>
                <p>
                  Amnt:{" "}
                  {count[items.id] ? +count[items.id] * +items.acf.price : 0}
                </p>
              </div>
            </>
          );
        })}
        <p>Total: {total} BGN</p>
      </div>
    </div>
  );
};
