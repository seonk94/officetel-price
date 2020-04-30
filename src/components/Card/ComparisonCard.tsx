import * as React from 'react';
import Card from '@material-ui/core/Card';
import { CardHeader, CardContent, Grid } from '@material-ui/core';
import './ComparisonCard.scss';

export interface Props {
  title: string;
  data1: string | number;
  key1: string;
  data2: string | number;
  key2: string;
}

function ComparisonCard({ title, data1, key1, data2, key2 }: Props) {

  return (
    <Card className="comparison-card" variant="outlined">
      <CardContent className="body">
        <Grid container spacing={2}>
          <Grid item xs={12} className="title">
            <h3>{title}</h3>
          </Grid>
          <Grid item xs={6}>
            <h1>
              {data1}
            </h1>
            <h5>
              {key1}
            </h5>
          </Grid>
          <Grid item xs={6}>
            <h1>
              {data2}
            </h1>
            <h5>
              {key2}
            </h5>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default ComparisonCard;

// helpers

// function getExclamationMarks(numChars: number) {
//   return Array(numChars + 1).join('!');
// }
