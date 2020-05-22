import * as React from 'react';
import { TableContainer, TableHead, TableCell, TableBody, Table, Card, TableRow, TablePagination, } from '@material-ui/core';
import './BasicTable.scss';

export interface Props {
  spacingClass: 'basic-table-card-1' | 'basic-table-card-2' | 'basic-table-card-3';
  headers: { text: string, value: string }[];
  datas: any[];
  usePage: boolean;
  handleClickRow: any | undefined;
  page?: number;
  rowsPerPage?: number;
  setPage?: React.Dispatch<React.SetStateAction<number>>;
  setRowsPerPage?: React.Dispatch<React.SetStateAction<number>>;
}

function BasicTable({ spacingClass, headers, datas, usePage, handleClickRow, page, rowsPerPage, setPage, setRowsPerPage }: Props) {

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage!(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage!(parseInt(event.target.value, 10));
    setPage!(0);
  };

  return (
    <Card className={spacingClass} variant="outlined">
      <TableContainer className="basic-table-container">
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
                className={`body-row ${handleClickRow ? 'clickable' : ''}`}
                key={data.id}
                onClick={handleClickRow}
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
