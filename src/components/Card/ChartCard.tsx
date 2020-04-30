import * as React from 'react'
import { Card, CardContent } from '@material-ui/core';

export interface Props {
  children: React.ReactNode;
}
function ChartCard({ children }: Props) {

  return (
    <Card className="chart-card" variant="outlined">
      <CardContent className="body">
        {children}
      </CardContent>
    </Card>
  )
}

export default ChartCard;
