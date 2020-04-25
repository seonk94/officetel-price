import * as React from 'react';
import Card from '@material-ui/core/Card';
import { CardHeader, CardContent, Grid, CardActions, IconButton } from '@material-ui/core';
import MapIcon from '@material-ui/icons/Map';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import './OfficetelInfoCard.scss';
import { spacing } from '@material-ui/system';

export interface Props {
    title: string;
    transaction: OfficetelTransaction;
}

function OfficetelInfoCard({ transaction, title }: Props) {
  const getAcre = (area : number) => {
    return area / 3.3
  }

  return (
    <Card className="officetel-info-card" variant="outlined">
      <CardContent className="body">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <h3>{title}</h3>
          </Grid>
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
      </CardContent>
      <CardActions className="footer">
        <IconButton>
          <MoreHorizIcon/>
        </IconButton>
        <IconButton>
          <MapIcon/>
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default OfficetelInfoCard;

// helpers

// function getExclamationMarks(numChars: number) {
//   return Array(numChars + 1).join('!');
// }
