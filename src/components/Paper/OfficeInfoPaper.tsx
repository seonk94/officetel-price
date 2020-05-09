import * as React from 'react';
import { Paper, Grid } from '@material-ui/core';

export interface Props {
  transaction: OfficetelTransaction;
}

function OfficeInfoPaper({ transaction }: Props) {

  return (
    <Paper elevation={0}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h4>{`${transaction.dong} ${transaction.dong} ${transaction.zip_number}`}</h4>
          <h4>{`${transaction.housing_complex} ${transaction.floor} 층`}</h4>
        </Grid>
        <Grid item xs={6}>
          <h5>{`시/군/구 : ${transaction.gu}`}</h5>
          <h5>{`건축년도 : ${transaction.building_year}`}</h5>
          <h5>{`거래일 : ${transaction.year}.${transaction.month}.${transaction.day}`}</h5>
        </Grid>
        <Grid item xs={6}>
          <h5>{`면적 : ${transaction.area}`}</h5>
          <h5>{`보증금 : ${transaction.deposit}`}</h5>
          <h5>{`월세 : ${transaction.monthly_rent}`}</h5>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default OfficeInfoPaper;
