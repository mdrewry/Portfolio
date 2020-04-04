import React from "react";
import gitImage from "../res/gitHub.png";
import mailImage from "../res/MailIcon.png";
import phoneImage from "../res/PhoneIcon.png";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
const useStyles = makeStyles(theme => ({
  Title: {
    fontSize: 25
  },
  CardBody: {
    fontSize: 12
  },
  CardMainMinor: {
    backgroundColor: "#FFFFFF",
    height: "175px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center"
  },
  socailImage: {
    height: "25px"
  },
  SocialTag: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  }
}));

const Socials = () => {
  const classes = useStyles();
  const handleClick = e => {
    window.location = "https://github.com/mdrewry";
  };
  return (
    <Card className={classes.CardMainMinor}>
      <CardContent>
        <Typography className={classes.Title}>Contact Me</Typography>
        <Box className={classes.SocialTag}>
          <img className={classes.socailImage} alt="" src={mailImage} />
          <Typography className={classes.CardBody}>
            mdrewry0@gmail.com
          </Typography>
        </Box>
        <Box className={classes.SocialTag}>
          <img className={classes.socailImage} alt="" src={phoneImage} />
          <Typography className={classes.CardBody}>(954)681-1293</Typography>
        </Box>
        <Box className={classes.SocialTag}>
          <img
            className={classes.socailImage}
            alt=""
            src={gitImage}
            onClick={e => handleClick()}
          />
          <Typography className={classes.CardBody}>
            github.com/mdrewry
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Socials;
