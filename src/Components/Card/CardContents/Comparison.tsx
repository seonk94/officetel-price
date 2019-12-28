import React from "react";
import { Paper, Grid, Typography, Theme } from "@material-ui/core";
import { makeStyles, createStyles, withStyles } from "@material-ui/styles";

interface ComparisonProps {
  ComparisonData1: string | number;
  ComparisonData2: string | number;
}
const useStyles = makeStyles((theme: Theme) => createStyles({}));

export default function Comparison(props: ComparisonProps) {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={6}>
        {props.ComparisonData1}
      </Grid>
      <Grid item xs={6}>
        {props.ComparisonData2}
      </Grid>
    </Grid>
  );
}
