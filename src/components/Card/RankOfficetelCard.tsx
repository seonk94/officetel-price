import * as React from 'react';
import { Card, CardContent, Grid, List, ListItem, ListItemText } from '@material-ui/core';
import './RankOfficetelCard.scss'
import OfficeInfoTooltip from '../Tooltip/OfficeInfoTooltip';

export interface Props {
  title: string;
  transactions: OfficetelTransaction[];
  handleShowModal: (value: boolean) => void;
  showOption: boolean;
  optionText: string;
  optionItem: (transaction: OfficetelTransaction) => string | number;
}
function RankOfficetelCard({ title, transactions, handleShowModal, showOption, optionText, optionItem }: Props) {

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
                <OfficeInfoTooltip
                  transaction={transaction}
                  showComponent={
                    <ListItem button className="rank-list-item" onClick={openModal}>
                      <ListItemText
                        primary={`${transaction.dong} ${transaction.zip_number}`}
                        secondary={
                          <React.Fragment>
                            <div className="secondary-div">
                              <span className="secondary-left">{`${transaction.housing_complex} ${transaction.floor} 층`}</span>
                              {
                                showOption
                                  ? <span className="secondary-right">{`${optionText} ${optionItem(transaction)}`}</span>
                                  : undefined
                              }
                            </div>
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                  }
                />
              ))}
            </List>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default RankOfficetelCard
