import { Button, TextField } from "@mui/material";
import React from "react";
import Swal from "sweetalert2";

const AddOrder = () => {
  const handleAddProduct = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      Pname: { value: string };
      Pprice: { value: string };
      Pcategory: { value: string };
      PmainImg: { value: string };
      PsideImg1: { value: string };
      PsideImg2: { value: string };
      PsideImg3: { value: string };
      Pstock: { value: string };
      Pdescription: { value: string };
    };

    let name = target.Pname?.value;
    let price = parseInt(target.Pprice?.value);
    let description = target.Pdescription?.value;
    let img1 = target.PmainImg?.value;
    let img2 = target.PsideImg1?.value;
    let img3 = target.PsideImg2?.value;
    let img4 = target.PsideImg3?.value;
    let inStock = parseInt(target.Pstock?.value);
    let category = target.Pcategory?.value;

    // console.log(review);
    let newProduct = {
      name,
      price,
      description,
      img1,
      img2,
      img3,
      img4,
      inStock,
      category,
    };

    console.log(newProduct);

    //send review data to server
    fetch("https://doctor-meet-server.herokuapp.com/api/v1/product/add", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    }).then((res) => {
      if (res.status === 200) {
        Swal.fire({
          title: "Success",
          text: "Review Successfully Submitted!",
          icon: "success",
          showConfirmButton: false,
          timer: 2000,
        });
        window.location.reload();
      }
    });
  };

  return (
    <div className="container">
      <h2 className="text-center my-5" style={{ color: "#2c90b9" }}>
        {" "}
        Add Products{" "}
      </h2>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <img
            src="https://i.ibb.co/pXLkWjw/undraw-web-shopping-re-owap-removebg-preview.png"
            alt=""
            className="img-fluid"
          />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <form className="row" onSubmit={handleAddProduct}>
            <div className="col-lg-6">
              <TextField
                id="outlined-basic"
                label="Product Name"
                name="Pname"
                fullWidth
                required
                variant="outlined"
                sx={{ my: "12px" }}
              />
            </div>
            <div className="col-lg-6">
              <TextField
                id="outlined-basic"
                label="Product price"
                name="Pprice"
                required
                sx={{ my: "12px" }}
                variant="outlined"
                fullWidth
                type="number"
              />
            </div>
            <div className="col-lg-6">
              <TextField
                id="outlined-basic"
                label="Product Category"
                variant="outlined"
                name="Pcategory"
                required
                fullWidth
                sx={{ my: "12px" }}
              />
            </div>
            <div className="col-lg-6">
              <TextField
                id="outlined-basic"
                label="Product Main image"
                variant="outlined"
                required
                sx={{ my: "12px" }}
                name="PmainImg"
                fullWidth
              />
            </div>
            <div className="col-lg-6">
              <TextField
                id="outlined-basic"
                label="Product side image1"
                variant="outlined"
                sx={{ my: "12px" }}
                name="PsideImg1"
                fullWidth
                required
              />
            </div>
            <div className="col-lg-6">
              <TextField
                fullWidth
                name="PsideImg2"
                id="outlined-basic"
                label="Product side image2"
                variant="outlined"
                sx={{ my: "12px" }}
                required
              />
            </div>
            <div className="col-lg-6">
              <TextField
                id="outlined-basic"
                label="Product side image3"
                variant="outlined"
                fullWidth
                name="PsideImg3"
                sx={{ my: "12px" }}
                required
              />
            </div>
            <div className="col-lg-6">
              <TextField
                id="outlined-basic"
                label="Product in Stock"
                variant="outlined"
                type="number"
                name="Pstock"
                fullWidth
                sx={{ my: "12px" }}
                required
              />
            </div>
            <div className="col-lg-12">
              <TextField
                id="outlined-basic"
                label="description"
                rows={4}
                fullWidth
                name="Pdescription"
                variant="outlined"
                sx={{ my: "12px" }}
                multiline
                required
              />
            </div>
            <Button type="submit" variant="contained">
              {" "}
              Add Order{" "}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddOrder;
