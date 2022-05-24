import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Paper, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow } from '@mui/material';
import { Table } from 'react-bootstrap';
import AllDiagnosisRow from './AllDiagnosisRow';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "black",
      color: "white",
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));


const AllDiagnosis = () => {
    const [diagnosis,setDiagnosis]=useState([]);
    useEffect(()=>{
        fetch("https://floating-basin-02241.herokuapp.com/bookedDiagnosis")
        .then(res=>res.json())
        .then(data=>setDiagnosis(data))
    },[])
    return (
        <TableContainer component={Paper} className="mt-5">
         <Table className='w-100' aria-label="customized table">
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
            diagnosis.map(diagnosis=><AllDiagnosisRow diagnosis={diagnosis} key={diagnosis._id}></AllDiagnosisRow>)
          }
       
        </TableBody>
         </Table>
      </TableContainer>
    );
};

export default AllDiagnosis;