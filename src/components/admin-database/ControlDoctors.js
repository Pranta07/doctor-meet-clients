import React,{useState,useEffect} from 'react';
import styled from '@emotion/styled';
import { Paper, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow } from '@mui/material';
import { Table } from 'react-bootstrap';
import ControlDoctor from './ControlDoctor';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "black",
      color: "white",
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));


const ControlDoctors = () => {
    const [doctors,setDoctors]=useState([]);
    useEffect(()=>{
        fetch('https://floating-basin-02241.herokuapp.com/doctors')
        .then(res=>res.json())
        .then(data=>setDoctors(data))
    },[doctors])
    
    return (
        <TableContainer component={Paper} className="mt-5">
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
         <TableRow>
           <StyledTableCell>Id</StyledTableCell>
           <StyledTableCell align="right">Name</StyledTableCell>
           <StyledTableCell align="right">Email</StyledTableCell>
           <StyledTableCell align="right">Category</StyledTableCell>
           <StyledTableCell align="right"></StyledTableCell>
           <StyledTableCell align="center"></StyledTableCell>
         </TableRow>
       </TableHead>
       <TableBody>
       
         {
        doctors.map(doctor=><ControlDoctor doctor={doctor} key={doctor._id}></ControlDoctor>)
         }
      
       </TableBody>
        </Table>
     </TableContainer>
    );
};

export default ControlDoctors;