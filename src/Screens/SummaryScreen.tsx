import * as React from 'react';
import { Grid } from '@material-ui/core';
import ComparisonCard from '../components/Card/ComparisonCard';
import OfficetelInfoCard from '../components/Card/OfficetelInfoCard';

export interface Props {
    longRentCount : number,
    monthlyRentCount: number,
    expensiveMonthlyRendTransaction: OfficetelTransaction
}

function SummaryScreen({ longRentCount, monthlyRentCount, expensiveMonthlyRendTransaction}: Props) {

  return (
    <Grid container>
      <Grid item xs={4}>
        <ComparisonCard 
          title='전세 월세 비교' 
          data1={longRentCount} 
          data2={monthlyRentCount} 
          key1='전세' 
          key2='월세' />
      </Grid>
      <Grid item xs={4}>
        <OfficetelInfoCard
          title='비싼 월세 거래 데이터'
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
