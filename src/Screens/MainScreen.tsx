import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import RoundCard from "../Components/Card/RoundCard";

interface MainScreenState {
  LAWD_CD: number;
  DEAL_YMD: number;
}
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

export default class MainScreen extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      LAWD_CD: 0,
      DEAL_YMD: 0
    };
  }
  // handleChange = (e: any) => {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   });
  // };
  // saveDB = () => {
  //   areaCodeList.forEach(code => {
  //     getRTMSDataSvcOffiRent({ LAWD_CD: code, DEAL_YMD: this.state.DEAL_YMD });
  //   });
  // };

  render() {
    return (
      <div>
        <Grid container justify="center" spacing={3}>
          <Grid item xs={12} md={12}>
            <Grid container spacing={3}>
              {/* <Grid item xs={12}>
                <TextField onChange={this.handleChange} name="DEAL_YMD" />
                <Button variant="contained" color="primary" onClick={this.saveDB}>
                  DB저장
                </Button>
              </Grid> */}
              <Grid item xs={12} sm={6} md={3}>
                <RoundCard title={"월세 전세 거래량 비교"} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}
