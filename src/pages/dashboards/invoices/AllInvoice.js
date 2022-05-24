import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import './AllInvoices.css';
function MyVerticallyCenteredModal(props) {
 
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Id : {props.invoice._id}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3>User Info</h3>
          <hr />
          <p>
            Name : {props.invoice?.category?.name}
          </p>
          <p>
            Email : {props.invoice?.category?.email}
          </p>
          <p>
            Contact Info : {props.invoice?.category?.mobileNumber}
          </p>
          <p>
            Category Id : {props.invoice?.category?._id}
          </p>
          <h3>Payment Info</h3>
          <hr />
          <p>
            Payment Method : {props.invoice?.paymentMethod?.type}
          </p>
          <p>
            Payment Id : {props.invoice?.paymentMethod?.id}
          </p>
          <p>
            Purchased Date : {props.invoice?.purchasedDate}
          </p>
          <p>
            Amount : {props.invoice?.amount}
          </p>
          
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
const AllInvoice = ({invoice}) => {
    const [modalShow, setModalShow] = React.useState(false);
   
    return (
        
        <tr style={{backgroundColor:"#EFF6FF"}}>
        <td className="appointment-table-row-data">{invoice._id}</td>
        <td className="appointment-table-row-data">{invoice?.invoiceName}</td>
        <td className="appointment-table-row-data">{invoice?.purchasedDate}</td>
        <td className="appointment-table-row-data">$ {invoice.amount}</td>
        <td className="appointment-table-row-data">
        <>

<i className="fas fa-info" onClick={() => setModalShow(true)}></i>

<MyVerticallyCenteredModal
  show={modalShow}
  invoice={invoice}
  onHide={() => setModalShow(false)}
/>
</>
        </td>
        
        </tr>
      
        
           
            
            
        
    );
};

export default AllInvoice;