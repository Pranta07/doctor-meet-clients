import React from 'react';
import { TableCell, tableCellClasses, TableRow } from '@mui/material';
import styled from '@emotion/styled';

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

const AllDiagnosisRow = ({diagnos}) => {
   
    const intPrice=diagnos.selectedDiagnosis.price;
    const intDiscount=diagnos.selectedDiagnosis.discount;
      const floatDiscount=parseFloat(intDiscount).toFixed(2);
      
      const dd=floatDiscount/100.00;
      // console.log(intPrice,dd);
  const floatPrice=intPrice-(intPrice*dd);
const deleteBookedDiagnosisAppointment=(e)=>{
    e.preventDefault();
    const isConfirm=window.confirm("Are you sure want to delete this data?");
    if(isConfirm){
        fetch(`https://floating-basin-02241.herokuapp.com/bookedDiagnosis/${diagnos._id}`,{
            method:"Delete"
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.deletedCount){
                alert("Data is deleted successfully");
                window.location.reload();
            }
        })
    }
    

}
    return (
        <StyledTableRow>
        <StyledTableCell component="th" scope="row">
        {diagnos.name}
              </StyledTableCell>
              <StyledTableCell align="right">{diagnos.selectedDiagnosis.code}</StyledTableCell>
              <StyledTableCell align="right">{diagnos.bookingDate}</StyledTableCell>
              <StyledTableCell align="right">{floatPrice} $</StyledTableCell>
              <StyledTableCell align="right">{diagnos?.paymentStatus}</StyledTableCell>
              <StyledTableCell align="right">
            <button className='btn-diagnosis-pay' onClick={deleteBookedDiagnosisAppointment}>Delete</button>
             
              </StyledTableCell>
      </StyledTableRow>
    );
};

export default AllDiagnosisRow;