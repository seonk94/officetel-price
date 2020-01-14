import * as React from 'react';
import Card from '@material-ui/core/Card';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { CardHeader, CardContent, Grid } from '@material-ui/core';

const card = css`

`
const header = css`
  border-bottom: 1px solid #adb5bd;
`
const body = css`
  text-align: center;
`
export interface Props {
    data1 : string | number;
    key1: string;
    data2 : string | number;
    key2: string;
}

function ComparisonCard({ data1, key1, data2, key2 }: Props) {

  return (
    <Card css={card} variant="outlined">
      <CardHeader title={'비교 카드'} css={header}/>
      <CardContent css={body}>
        <Grid container spacing={2}>
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
