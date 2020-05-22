import * as React from 'react';
import Card from '@material-ui/core/Card';
import { CardContent, Grid, CardActions, IconButton } from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import './OfficetelInfoCard.scss';
import OfficeInfoPaper from '../Paper/OfficeInfoPaper';

export interface Props {
  title: string;
  transaction: OfficetelTransaction;
  handleShowModal: (value: boolean) => void;
}

function OfficetelInfoCard({ transaction, title, handleShowModal }: Props) {
  // const getAcre = (area : number) => {
  //   return area / 3.3
  // }

  const openModal = () => handleShowModal(true);

  return (
    <Card className="officetel-info-card" variant="outlined">
      <CardContent className="body">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <h3>{title}</h3>
          </Grid>
          <OfficeInfoPaper transaction={transaction} />
        </Grid>
      </CardContent>
      <CardActions className="footer">
        <IconButton onClick={openModal}>
          <MoreHorizIcon />
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
