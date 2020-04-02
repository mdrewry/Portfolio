import React from "react";
import gitImage from "../res/gitHub.png";

const Socials = props => {
  const handleClick = e => {
    window.location = "https://github.com/mdrewry";
  };
  return (
    <div className="socialLinks">
      <img className="imageScale" src={gitImage} onClick={handleClick} />
    </div>
  );
};

export default Socials;
