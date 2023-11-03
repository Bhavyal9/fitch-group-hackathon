import React, { useState, useEffect } from "react";
import axios from "axios";

const Edata = () => {
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
  console.log(eventDetails);
  return <></>;
};

export default Edata;
