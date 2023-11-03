import React from "react";
import LandingImage from "../Components/Assets/landingImg.jpg";
import "./Assets/pages.css";

export const Hero = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero-content">
          <h2>Uniting Hearts, Changing Lives</h2>
          <div className="fundraising-acts">
            <p>Friends of Bulgaria raises money for projects in Bulgaria:</p>
            <ul>
              <li>
                An annual fund-raising charity Christmas Party; concerts and
                Gala occasions
              </li>
              <li>Sponsored initiatives</li>
              <li>Individual Donations</li>
            </ul>
          </div>
          <button>Book your Next Event Now!</button>
        </div>
        <img
          className="landingImg"
          src={LandingImage}
          alt="By Bernard Hermant on Unsplash"
        />
      </div>
    </div>
  );
};
