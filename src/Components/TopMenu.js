import React from "react";

const TopMenu = props => {
  return (
    <div className="menuButtons">
      <h3 className="AMButton" onClick={() => props.setDisp(1)}>About Me</h3>
      <h3 className="ProjectsButton" onClick={() => props.setDisp(2)}>Projects</h3>
    </div>
  );
};

export default TopMenu;
