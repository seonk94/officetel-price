import * as React from 'react';
import { Card, CardContent, Grid, List, ListItem, ListItemText } from '@material-ui/core';
import './RankOfficetelCard.scss'

export interface Props {
  title: string;
  transactions: OfficetelTransaction[];
  handleShowModal: (value: boolean) => void;
}
function RankOfficetelCard({ title, transactions, handleShowModal }: Props) {

  const openModal = () => handleShowModal(true);

  return (
    <Card className="rank-officetel-card" variant="outlined">
      <CardContent className="body">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <h3>{title}</h3>
          </Grid>
          <Grid item xs={12}>
            <List className="rank-list">
              {transactions.map(transaction => (
                <ListItem button className="rank-list-item" onClick={openModal}>
                  <ListItemText
                    primary={`${transaction.dong} ${transaction.dong} ${transaction.zip_number}`}
                    secondary={
                      <React.Fragment>
                        <div className="secondary-div">
                          <span className="secondary-left">{`${transaction.housing_complex} ${transaction.floor} 층`}</span>
                          <span className="secondary-right">{`${transaction.monthly_rent}원`}</span>
                        </div>
                      </React.Fragment>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </CardContent>
      {/* <CardActions className="footer">
        <IconButton onClick={openModal}>
          <MoreHorizIcon />
        </IconButton>
      </CardActions> */}
    </Card>
  )
}

export default RankOfficetelCard
