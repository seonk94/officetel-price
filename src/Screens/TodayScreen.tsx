import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { getRTMSDataSvcOffiRent } from "../api/index";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    container: {
      display: "grid",
      gridTemplateColumns: "repeat(12, 1fr)",
      gridGap: theme.spacing(3)
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary
    }
  })
);

export default function TodayScreen() {
  const classes = useStyles();

  const data = getRTMSDataSvcOffiRent({ LAWD_CD: 11100, DEAL_YMD: 201512 });

  data.then(res => {
    const a = res.request.response;
    const b = JSON.parse(a);
    console.log(b);
  });

  return (
    <div className={classes.root}>
      <Grid container justify="center" spacing={3}>
        <Grid item xs={12} md={6}>
          <Grid container spacing={3}>
            <Grid item xs={12}></Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
