import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, TableSortLabel } from '@mui/material';
import CustomButton from '../btn/CustomButton';
import { tableColumn } from '../../data/table';
import { Link } from 'react-router-dom';

const CustomTable = (props) => {

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
                {tableColumn.map((column, index) => (
                    <TableCell onClick={(e) => {
                            e.stopPropagation();
                            props.handleSort(tableColumn[index].key)
                        }}>
                        {column.value}
                        <TableSortLabel />
                    </TableCell>
                ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.sortedData.map((row, index) => (
              <TableRow key={row.id}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.address}</TableCell>
                <TableCell>{row.organization}</TableCell>
                <TableCell>{row.designation}</TableCell>
                <TableCell>{row.contact}</TableCell>
                <TableCell><button onClick={() => props.handleEditMember(row, index)}>Edit</button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CustomTable;
