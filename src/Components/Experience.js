import React from "react";
import ASImage from "../res/AndroidStudioLogo.png";
import CPPImage from "../res/CppLogo.png";
import JVAImage from "../res/JavaLogo.png";
import MERNImage from "../res/MernStackLogo.png";
import PImage from "../res/PythonLogo.png";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  ExperiencedIn: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: "10px"
  }
}));
const Experience = props => {
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.ExperiencedIn}>
        <img className="imageScale" src={ASImage} alt="Android Studio" />
        <img className="imageScale" src={CPPImage} alt="C++" />
        <img className="imageScale" src={MERNImage} alt="MERN Stack" />
        <img className="imageScale" src={JVAImage} alt="Java" />
        <img className="imageScale" src={PImage} alt="Python" />
      </Box>
    </div>
  );
};

export default Experience;
