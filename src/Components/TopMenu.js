import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  buttons: {
    color: "#de7119"
  }
}));
const TopMenu = props => {
  const classes = useStyles();
  return (
    <div className="menuButtons">
      <Button
        className={classes.buttons}
        variant="contained"
        onClick={() => props.setDisp(1)}
      >
        About Me
      </Button>
      <Button
        className={classes.buttons}
        variant="contained"
        onClick={() => props.setDisp(2)}
      >
        Projects
      </Button>
    </div>
  );
};

export default TopMenu;
