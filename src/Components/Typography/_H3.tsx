import React from "react";
import { makeStyles, createStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    opH3: {}
  })
);

interface _H3Interface {
  text?: string;
}

export default function _H3(props: _H3Interface) {
  const classes = useStyles();

  return <h3 className={classes.opH3}>{props.text}</h3>;
}
