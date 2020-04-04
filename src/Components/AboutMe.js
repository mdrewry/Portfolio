import React from "react";
import { Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Socials from "./Socials.js";
import CenterObject from "./CenterObject.js";
import "../App.css";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles(theme => ({
  AboutMe: {
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
    justifyContent: "space-around",
    alignItems: "center"
  },
  Title: {
    fontSize: 20
  },
  CardBody: {
    fontSize: 12
  },
  CardMainMinor: {
    backgroundColor: "#dee3e2",
    height: "175px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center"
  },
  CardMainMajor: {
    backgroundColor: "#dee3e2",
    display: "flex",
    flexDirection: "column"
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
  }
}));
const AboutMe = () => {
  const classes = useStyles();
  return (
    <div className="AboutMe">
      <Box className={classes.AboutMe}>
        <Grid container className={classes.AboutGrid}>
          <Grid item xs={2}>
            <Socials />
          </Grid>
          <Grid item xs={5}>
            <Card className={classes.CardMainMajor}>
              <CardContent>
                <CenterObject />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={2}>
            <Card className={classes.CardMainMinor}>
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
