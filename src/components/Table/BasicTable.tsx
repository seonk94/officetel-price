import * as React from 'react';
import { TableContainer, TableHead, TableRow, TableCell, TableBody, Table, Card, TableFooter, TablePagination } from '@material-ui/core';
import './BasicTable.scss';
import TablePaginationActions from './TablePaginationActions';

export interface Props {
  spacingClass: 'basic-table-card-1' | 'basic-table-card-2' | 'basic-table-card-3';
  headers: { text: string, value: string }[];
  datas: any[];
  usePage: boolean;
  page?: number;
  rowsPerPage?: number;
  setPage?: any;
  setRowsPerPage?: any;
}

function BasicTable({ spacingClass, headers, datas, usePage, page, rowsPerPage, setPage, setRowsPerPage }: Props) {

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Card className={spacingClass} variant="outlined">
      <TableContainer className="table-container">
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {headers.map((header, index) => (
                <TableCell
                  className="header-cell"
                  key={header.value}
                >
                  {header.text}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {datas.map((data) => (
              <TableRow
                key={data.id}
              >
                {headers.map((header, index) => (
                  <TableCell key={index}>
                    {data[header.value]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {usePage && <TablePagination
        rowsPerPageOptions={[10, 20, 30]}
        component="div"
        colSpan={3}
        count={datas.length}
        rowsPerPage={rowsPerPage!}
        page={page!}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      // ActionsComponent={TablePaginationActions}
      />}
    </Card>
  )
}

export default BasicTable;
