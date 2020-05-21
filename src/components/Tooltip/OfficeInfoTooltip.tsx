import * as React from 'react';
import { Tooltip, List, ListItem, ListItemText, withStyles, Theme } from '@material-ui/core';

const CustomTooltip = withStyles((theme: Theme) => ({
  arrow: {
    color: theme.palette.common.black,
  },
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 12,
    fontWeight: 600,
  },
}))(Tooltip);


export interface Props {
  transaction: OfficetelTransaction;
  showComponent: React.ReactElement;
}

function OfficeInfoTooltip({ transaction, showComponent }: Props) {
  return (
    <CustomTooltip title={
      <React.Fragment>
        <List dense={true}>
          <ListItem>
            <ListItemText
              primary={`${transaction.dong} ${transaction.zip_number}`}
              secondary={`${transaction.housing_complex} ${transaction.floor} 층`} />
          </ListItem>
          <ListItem>
            <ListItemText primary={`준공년도 : ${transaction.building_year}`} />
          </ListItem>
          <ListItem>
            <ListItemText primary={`시군구 : ${transaction.gu}`} />
          </ListItem>
          <ListItem>
            <ListItemText primary={`면적 : ${transaction.area}`} />
          </ListItem>
        </List>
      </React.Fragment>
    }>
      {showComponent}
    </CustomTooltip>
  )
}

export default OfficeInfoTooltip;
