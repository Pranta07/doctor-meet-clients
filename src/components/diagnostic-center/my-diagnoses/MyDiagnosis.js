import React from 'react';
import { TableCell, tableCellClasses, TableRow } from '@mui/material';
import styled from '@emotion/styled';
import './MyDiagnosis.css';
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
    console.log(diagnosis)
    const intPrice=diagnosis.selectedDiagnosis.price;
    const intDiscount=diagnosis.selectedDiagnosis.discount;
      const floatDiscount=parseFloat(intDiscount).toFixed(2);
      
      const dd=floatDiscount/100.00;
      // console.log(intPrice,dd);
  const floatPrice=intPrice-(intPrice*dd);
    return (
      <StyledTableRow>
        <StyledTableCell component="th" scope="row">
        {diagnosis.name}
              </StyledTableCell>
              <StyledTableCell align="right">{diagnosis.selectedDiagnosis.code}</StyledTableCell>
              <StyledTableCell align="right">{diagnosis.bookingDate}</StyledTableCell>
              <StyledTableCell align="right">{floatPrice} $</StyledTableCell>
              <StyledTableCell align="right">{diagnosis?.paymentStatus}</StyledTableCell>
              <StyledTableCell align="right"><Link to={`/diagnostic-pay/${diagnosis._id}`}>
            <button className='btn-diagnosis-pay'>Pay</button>
             </Link>
              </StyledTableCell>
      </StyledTableRow>
    
    );
};

export default MyDiagnosis;