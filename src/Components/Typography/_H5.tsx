import React from "react";
import { makeStyles, createStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    opH5: {}
  })
);

interface _H5Interface {
  text?: string;
}

export default function _H5(props: _H5Interface) {
  const classes = useStyles();

  return <h5 className={classes.opH5}>{props.text}</h5>;
}
