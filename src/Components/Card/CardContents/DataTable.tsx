import React from "react";
import { Paper, Grid, Theme, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/styles";

interface DataTableProps {
  data: any[];
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    table: {}
  })
);

export default function DataTable(props: DataTableProps) {
  const classes = useStyles();

  return (
    <Grid container>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">지역</TableCell>
              <TableCell align="center">거래량</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.data.map(row => (
              <TableRow key={row.area_code}>
                <TableCell component="th" scope="row">
                  {row.gu}
                </TableCell>
                <TableCell align="right">{row.total_count}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}
