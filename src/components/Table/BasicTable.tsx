import * as React from 'react';
import { TableContainer, TableHead, TableRow, TableCell, TableBody, Table, Card } from '@material-ui/core';
import './BasicTable.scss';

export interface Props {
  spacingClass: 'basic-table-card-1' | 'basic-table-card-2' | 'basic-table-card-3';
  headers: { text: string, value: string }[];
  datas: any[];
}

function BasicTable({ spacingClass, headers, datas }: Props) {

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
    </Card>
  )
}

export default BasicTable;
