import React from "react";
import { Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Socials from "./Socials.js";
import Experience from "./Experience.js";
import ProfileImage from "./ProfileImage.js";
import "../App.css";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles(theme => ({
  AboutMe: {
    marginTop: "100px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%"
  },
  Paper: {
    backgroundColor: "rgb(202, 247, 224)",
    height: "100px"
  },
  AboutGrid: {
    justifyContent: "space-around"
  },
  Title: {
    fontSize: 20
  },
  CardBody: {
    fontSize: 12
  },
  CardMain: {
    backgroundColor: "#dee3e2",
    height: "150px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around"
  },
  ResumeLink: {
    marginTop: "50px",
    color: "#de7119"
  },
  RemoveUnderlineLink: {
    textDecoration: "none"
  },
  Intro: {
    marginTop: "50px"
  },
  UFText: {
    textDecoration: "underline",
    textDecorationColor: "#de7119",
    textDecorationThickness: "solid"
  }
}));
const AboutMe = () => {
  const classes = useStyles();
  return (
    <div className="AboutMe">
      <div className={classes.Intro}>
        <ProfileImage></ProfileImage>
        <h3 contenteditable>
          Hello, my name is Mark Drewry and I am currently studying{" "}
          <span className={classes.UFText}>computer science</span> at the
          University of Florida.
        </h3>
      </div>
      <Box className={classes.AboutMe}>
        <Grid container className={classes.AboutGrid}>
          <Grid item xs={2}>
            <Socials />
          </Grid>
          <Grid item xs={5}>
            <Card className={classes.CardMain}>
              <CardContent>
                <Typography className={classes.Title}>
                  Experience With:
                </Typography>
                <Experience />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={2}>
            <Card className={classes.CardMain}>
              <CardContent>
                <Typography className={classes.Title}>Courses Taken</Typography>
                <Typography className={classes.CardBody}>
                  Prog. Fundamentals 1: Java
                </Typography>
                <Typography className={classes.CardBody}>
                  Prog. Fundamentals 2: C++
                </Typography>
                <Typography className={classes.CardBody}>
                  Discrete Structures
                </Typography>
                <Typography className={classes.CardBody}>
                  Computer Organization
                </Typography>
                <Typography className={classes.CardBody}>
                  Data Structures
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <a className={classes.RemoveUnderlineLink} href="Resume.pdf" download>
        <Button className={classes.ResumeLink} variant="contained">
          Download My Resume
        </Button>
      </a>
    </div>
  );
};

export default AboutMe;
