import React, { useEffect, useState } from 'react';
import { TableCell, tableCellClasses, TableRow } from '@mui/material';
import styled from '@emotion/styled';
import './style/MyDiagnosis.css';
import { Link } from 'react-router-dom';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor:"black",
    color: "white",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: "#F2F2F2",
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
const MyDiagnosis = ({diagnosis}) => {
    const [floatPrice,setFloatPrice]=useState(0);
    useEffect(()=>{
      const fetchData=async()=>{
        
      await setFloatPrice(((diagnosis.selectedDiagnosis.price)-((diagnosis.selectedDiagnosis.price)*((parseFloat(diagnosis.selectedDiagnosis.discount).toFixed(2))/100.00))).toFixed(2))
      }
      fetchData().catch(console.error);
    },[diagnosis,floatPrice])
    
    return (
      <StyledTableRow>
        <StyledTableCell component="th" scope="row">
        {diagnosis.name}
              </StyledTableCell>
              <StyledTableCell align="right">{diagnosis.selectedDiagnosis.code}</StyledTableCell>
              <StyledTableCell align="right">{diagnosis.bookingDate}</StyledTableCell>
              <StyledTableCell align="right">$ {floatPrice} </StyledTableCell>
              <StyledTableCell align="right">{diagnosis?.paymentStatus}</StyledTableCell>
              <StyledTableCell align="right"><Link to={`/diagnostic-pay/${diagnosis._id}`}>
            <button className='btn-my-diagnosis-pay'>Pay</button>
             </Link>
              </StyledTableCell>
      </StyledTableRow>
    
    );
};

export default MyDiagnosis;