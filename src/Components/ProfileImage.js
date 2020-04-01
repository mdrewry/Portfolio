import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import profileImage from "../res/profileImageCut.png";

const styles = {
  root: {
    width: 200,
    height: 200
  }
};
const useStyles = makeStyles(styles);
const ProfileImage = () => {
  const classes = useStyles();
  return (
    <div className="profileImageBackground">
      <Avatar
        className={classes.root}
        alt="Mark Drewry"
        src={profileImage}
      ></Avatar>
    </div>
  );
};

export default ProfileImage;
