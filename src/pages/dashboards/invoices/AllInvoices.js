import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import AllInvoice from './AllInvoice';
import './AllInvoices.css';

const AllInvoices = () => {
    const [invoices,setInvoices]=useState([]);
    useEffect(()=>{
        
        fetch("https://floating-basin-02241.herokuapp.com/allInvoices")
        .then(res=>res.json())
        .then(data=>{
            setInvoices(data);
           
            
        })
    
    },[])
    return (
        <div>
           
            
            <Table className="appointment-table w-100" >
                <thead>
                    <tr style={{backgroundColor:"#c8d6e5"}} className="appointment-table-header-container">
                        
                        <th className="appointment-table-header">Invoice Id</th>
                        <th className="appointment-table-header">Category</th>
                        <th className="appointment-table-header">Billing Date</th>
                        <th className="appointment-table-header">Amount</th>
                        <th className="appointment-table-header"></th>
                        
                    </tr>
                </thead>
                <tbody className="appointment-table-body">
                    {invoices?.map((invoice) => (
                        <AllInvoice
                        key={invoice._id}
                        invoice={invoice}
                        ></AllInvoice>
                    ))}
                </tbody>
            </Table>
           
        </div>
    );
};

export default AllInvoices;