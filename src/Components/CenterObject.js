import React from "react";
import ASImage from "../res/AndroidStudioLogo.png";
import CPPImage from "../res/CppLogo.png";
import JVAImage from "../res/JavaLogo.png";
import MERNImage from "../res/MernStackLogo.png";
import PImage from "../res/PythonLogo.png";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ProfileImage from "./ProfileImage.js";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles(theme => ({
  ExperiencedIn: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: "10px",
    width: "100%"
  },
  UFTextUnderline: {
    textDecoration: "underline",
    textDecorationColor: "#de7119",
    textDecorationThickness: "solid"
  },
  UFText: {
    fontSize: 20
  },
  Title: {
    fontSize: 25,
    marginTop: "50px"
  },
  Main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
}));
const CenterObject = props => {
  const classes = useStyles();
  return (
    <Box className={classes.Main}>
      <ProfileImage />
      <Typography className={classes.UFText} contenteditable>
        Hello, my name is Mark Drewry and I am currently studying{" "}
        <span className={classes.UFTextUnderline}>computer science</span> at the
        University of Florida.
      </Typography>
      <Typography className={classes.Title}>Experience</Typography>
      <Box className={classes.ExperiencedIn}>
        <img className="imageScale" src={ASImage} alt="Android Studio" />
        <img className="imageScale" src={CPPImage} alt="C++" />
        <img className="imageScale" src={MERNImage} alt="MERN Stack" />
        <img className="imageScale" src={JVAImage} alt="Java" />
        <img className="imageScale" src={PImage} alt="Python" />
      </Box>
    </Box>
  );
};

export default CenterObject;
