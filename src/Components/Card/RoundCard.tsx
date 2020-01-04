import React from "react";
import { Paper, Grid, Theme } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/styles";
import _H5 from "../Typography/_H5";
import _H3 from "../Typography/_H3";
import Comparison from "./CardContents/Comparison";

interface RoundCardState {}
interface RoundCardProps {
  title?: string;
  type?: string;
  insideData?: any;
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardContainer: {
      padding: "12px"
    },
    cardTitle: {
      borderBottom: "1px solid #adb5bd"
    }
  })
);

const comparisonContent = () => {
  return <Comparison ComparisonData1="1234" ComparisonData2="4321" />;
};

const tableContent = () => {
  return <div>table content</div>;
};

export default function RoundCard(props: RoundCardProps) {
  const classes = useStyles();

  const type = props.type;

  const renderContent = () => {
    switch (type) {
      case "comparison":
        return comparisonContent();
      case "table":
        return tableContent();
      default:
        return comparisonContent();
    }
  };

  return (
    <Paper elevation={0}>
      <Grid container className={classes.cardContainer}>
        <Grid item xs={12} className={classes.cardTitle}>
          <_H3 text={props.title} />
        </Grid>
        <Grid item xs={12}>
          {renderContent()}
        </Grid>
      </Grid>
    </Paper>
  );
}
