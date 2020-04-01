import React from "react";
import gitImage from "../res/gitHub.png";

const Socials = props => {
  const handleClick = e => {
    window.location="https://github.com/mdrewry";
  };
  return (
    <div className="socials">
      <h3 className="socialLinksTitle">Find me on: </h3>
      <div className="socialLinks">
        <img className="git" src={gitImage} onClick={handleClick} />
      </div>
    </div>
  );
};

export default Socials;
