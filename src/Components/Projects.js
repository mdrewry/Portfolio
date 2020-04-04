import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import "../App.css";
import gitImage from "../res/gitHub.png";
import devImage from "../res/DevpostIcon.png";
import IntervalImage from "../res/SimpleIntervalIcon.png";
import ReactIcon from "../res/ReactIcon.png";
import PlayStoreI from "../res/PlayStoreIcon.png";
import CrowdFImage from "../res/CrowdFlowIcon.jpg";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles(theme => ({
  GridMain: {
    justifyContent: "space-around"
  },
  CardMain: {},
  ProjectI: {
    height: "50px"
  },
  CardT: {
    fontSize: 25
  },
  LinkI: {
    height: "25px"
  },
  LinkS: {
    float: "right",
    marginRight: "2px"
  }
}));
const Projects = () => {
  const classes = useStyles();
  const websiteS = e => {
    window.location = "https://github.com/mdrewry/Portfolio";
  };
  const CrowdFS = e => {
    window.location = "https://devpost.com/software/crowdflow";
  };
  const SimpleISP = e => {
    window.location =
      "https://play.google.com/store/apps/details?id=com.markdrewry.intervaltimer&hl=en_US";
  };
  const SimpleISG = e => {
    window.location = "https://github.com/mdrewry/IntervalTimer";
  };
  return (
    <div className="Projects">
      <Grid container className={classes.GridMain}>
        <Grid item xs={3}>
          <Card className={classes.CardMain}>
            <CardContent>
              <Typography className={classes.CardT}>Simple Interval</Typography>
              <img className={classes.ProjectI} alt="" src={IntervalImage} />
              <Typography classname={classes.CardText}>
                An interval timer developed on Android Stuido. This project got
                me familiar with the android app lifecycle and the tools used in
                Android Studio app development.
              </Typography>
            </CardContent>
            <div className={classes.LinkS}>
              <img
                className={classes.LinkI}
                alt=""
                src={PlayStoreI}
                onClick={e => SimpleISP()}
              />
              <img
                className={classes.LinkI}
                alt=""
                src={gitImage}
                onClick={e => SimpleISG()}
              />
            </div>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className={classes.CardMain}>
            <CardContent>
              <Typography className={classes.CardT}>Crowd Flow</Typography>
              <img className={classes.ProjectI} alt="" src={CrowdFImage} />
              <Typography classname={classes.CardText}>
                Crowd Flow was a project made at Swamphacks VI, in 2019. It is a
                webapp developed using React, and Google Cloud services. The app
                was intended to be a tool used for event planning that would
                give organizers information on movement patterns, which would
                allow them to create a better experience. This is my first web
                project and was an amazing experience.
              </Typography>
            </CardContent>
            <div className={classes.LinkS}>
              <img
                className={classes.LinkI}
                alt=""
                src={devImage}
                onClick={e => CrowdFS()}
              />
            </div>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className={classes.CardMain}>
            <CardContent>
              <Typography className={classes.CardT}>This Website</Typography>
              <img className={classes.ProjectI} alt="" src={ReactIcon} />
              <Typography classname={classes.CardText}>
                This website is powered by React. I used this site as an
                opportunity to improve my React and css skills.
              </Typography>
            </CardContent>
            <div className={classes.LinkS}>
              <img
                className={classes.LinkI}
                alt=""
                src={gitImage}
                onClick={e => websiteS()}
              />
            </div>
          </Card>
        </Grid>
      </Grid>
      <div></div>
    </div>
  );
};

export default Projects;
