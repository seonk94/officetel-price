import * as React from 'react';
import { TableContainer, TableHead, TableRow, TableCell, TableBody, Table, Card } from '@material-ui/core';
import './BasicTable.scss';

export interface Props {
    headers: { text: string , value: string }[];
    datas: any[];
}

function BasicTable({ headers, datas }: Props) {

    return (
        <Card className="basic-table-card" variant="outlined">
            <TableContainer className="table-container">
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {headers.map((header) => (
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
                                {headers.map((header) => (
                                    <TableCell>
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