import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Paper, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow } from '@mui/material';
import { Table } from 'react-bootstrap';
import useFirebase from '../../../firebase/useFirebase/useFirebase';
import MyDiagnosis from './MyDiagnosis';
import { useAppSelector } from '../../../redux/store';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "black",
    color: "white",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const MyDiagnosises = () => {
  const [myDiagnosis, setMyDiagnosis] = useState([]);
  const { user } = useAppSelector((state) => state.user);

  useEffect(() => {
    fetch(`https://floating-basin-02241.herokuapp.com/bookedDiagnosis/single?email=${user?.email}`)
      .then(res => res.json())
      .then(data => setMyDiagnosis(data))
  }, [user])
  useEffect(() => {

  }, [user])
  return (
    <TableContainer component={Paper} className="mt-5">
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Diagnosis Code</StyledTableCell>
            <StyledTableCell align="right">Diagnosis Date</StyledTableCell>
            <StyledTableCell align="right">Total Cost</StyledTableCell>
            <StyledTableCell align="right">Payment Status</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>

          {
            myDiagnosis.map(diagnosis => <MyDiagnosis diagnosis={diagnosis}></MyDiagnosis>)
          }

        </TableBody>
      </Table>
    </TableContainer>

  );
};

export default MyDiagnosises;