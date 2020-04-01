import React, { useState, useEffect } from "react";
import { Box, Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Socials from "./Components/Socials.js";
import ProfileImage from "./Components/ProfileImage.js";
import "./App.css";
import TopMenu from "./Components/TopMenu.js";
const useStyles = makeStyles(theme => ({
  AboutMe: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#FFFFFF",
    position: "absolute"
  },
  Paper: {
    backgroundColor: "rgb(202, 247, 224)",
    height: "100px"
  },
  AboutGrid: {
    justifyContent: "space-around"
  }
}));
function App() {
  const [dispPage, setDisp] = useState(1);
  const classes = useStyles();

  const Page = () => {
    if (dispPage == 1)
      return (
        <div className="AboutMe">
          <Box className={classes.AboutMe}>
            <ProfileImage></ProfileImage>
            <Grid container className={classes.AboutGrid}>
              <Grid item xs={2}>
                <h4>Contact Me</h4>
                <h5>mdrewry0@gmail.com</h5>
              </Grid>
              <Grid item xs={3}>
                <h4>
                  Hello, my name is Mark Drewry and I am currently studying
                  computer science at the University of Florida.
                </h4>
              </Grid>
              <Grid item xs={2}>
                <a href="Resume.pdf" download>Download</a>
              </Grid>
            </Grid>
          </Box>
        </div>
      );
    else
      return (
        <div className="Projects">
          <h1>Projects</h1>
        </div>
      );
  };

  return (
    <div className="App">
      <TopMenu className="TopMenu" setDisp={setDisp} />
      <Page></Page>
    </div>
  );
}

export default App;
