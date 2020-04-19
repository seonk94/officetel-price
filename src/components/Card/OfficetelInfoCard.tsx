import * as React from 'react';
import Card from '@material-ui/core/Card';
import { CardHeader, CardContent, Grid } from '@material-ui/core';
import './OfficetelInfoCard.scss';

export interface Props {
    title: string;
    transaction: OfficetelTransaction;
}

function OfficetelInfoCard({ transaction, title }: Props) {

  return (
    <Card className="officetel-info-card" variant="outlined">
      <CardHeader title={title}/>
      <CardContent className="body">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <h3>{`${transaction.dong} ${transaction.dong} ${transaction.zip_string}`}</h3>
            <h4>{`${transaction.housing_complex} ${transaction.floor} 층`}</h4>
            <h5>{`면적 : ${transaction.area}`}</h5>
            <h5>{`건축년도 : ${transaction.building_year}`}</h5>
            <h5>{`거래일 : ${transaction.year}.${transaction.month}.${transaction.day}`}</h5>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default OfficetelInfoCard;

// helpers

// function getExclamationMarks(numChars: number) {
//   return Array(numChars + 1).join('!');
// }
