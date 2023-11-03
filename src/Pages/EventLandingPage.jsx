import React from "react";
import { Hero } from "../Components/Hero";
import { FastSellingEvents } from "../Components/FastSelling/FastSellingEvents.jsx";
import { CompleteEventList } from "../Components/CompleteList/CompleteEventList.jsx";

export const EventLandingPage = () => {
  return (
    <>
      <Hero />
      <FastSellingEvents />
      <CompleteEventList />
    </>
  );
};
