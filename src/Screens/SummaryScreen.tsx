import * as React from 'react';
import { Grid } from '@material-ui/core';
import ComparisonCard from '../components/Card/ComparisonCard';
import OfficetelInfoCard from '../components/Card/OfficetelInfoCard';
import SingleDataCard from '../components/Card/SingleDataCard';

export interface Props {
    longRentCount : number,
    monthlyRentCount: number,
    expensiveMonthlyRendTransaction: OfficetelTransaction
}

function SummaryScreen({ longRentCount, monthlyRentCount, expensiveMonthlyRendTransaction}: Props) {

  return (
    <Grid container spacing={3} justify="center">
      <Grid item>
        <SingleDataCard title='월세 거래 수' value='4,952'></SingleDataCard>
      </Grid>
      <Grid item>
        <SingleDataCard title='전세 거래 수' value='2,132'></SingleDataCard>
      </Grid>
      <Grid item>
        <SingleDataCard title='평균 월세' value='45.00'></SingleDataCard>
      </Grid>
      <Grid item>
        <SingleDataCard title='평균 전세 보증금' value='10,000'></SingleDataCard>
      </Grid>
      <Grid item>
        <SingleDataCard title='월세 평균 면적' value='23.19m²'></SingleDataCard>
      </Grid>
      <Grid item>
        <SingleDataCard title='평균 전세 면적' value='73.92m²'></SingleDataCard>
      </Grid>
      <Grid item>
        <ComparisonCard 
          title='전세 월세 비교' 
          data1={longRentCount} 
          data2={monthlyRentCount} 
          key1='전세' 
          key2='월세' />
      </Grid>
      <Grid item>
        <OfficetelInfoCard
          title='비싼 월세 데이터'
          transaction={expensiveMonthlyRendTransaction}
        />
      </Grid>
      <Grid item>
        <OfficetelInfoCard
          title='거래량 TOP 데이터'
          transaction={expensiveMonthlyRendTransaction}
        />
      </Grid>
      <Grid item>
        <OfficetelInfoCard
          title='비싼 전세 데이터'
          transaction={expensiveMonthlyRendTransaction}
        />
      </Grid>
    </Grid>
  );
}

export default SummaryScreen;

// helpers

// function getExclamationMarks(numChars: number) {
//   return Array(numChars + 1).join('!');
// }
