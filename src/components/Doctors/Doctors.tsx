import axios, { AxiosResponse } from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import Doctor, { doctorData } from "./Doctor";
const borderColFilter = {
  backgroundColor: "#ebf2f3",
  color: "#005963",
  fontWeight: "bold",
  fontSize: "20px",
  border: "0",
};
const bordrCol = {
  border: "solid 1px ",
  color: "#ecf8f9",
  borderRadius: "5px",
};
const fontCol = {
  color: "#686a6f",
  fontSize: "16px",
};
const fontColDoc = {
  color: "#005963",
};
const btnStyle = {
  backgroundColor: "#00acb1",
  border: "0",
  color: "#fff",
  padding: "10px",
  borderRadius: "5px",
  fontWeight: "bold",
};
type Props = {
  doctorData: doctorData;
};
const Doctors: React.FC<Props> = () => {
  const [doctorsData, setDoctorsData] = useState([]);
  const uri =
    "https://raw.githubusercontent.com/mhasancy/doctorsData/main/doctorsDataNew.json";
  const fetchData = async () => {
    try {
      const response: AxiosResponse = await axios.get(uri);
      setDoctorsData(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  console.log(doctorsData);

  useEffect(() => {
    fetchData();
  }, []);

  // const myOrderedItems = ordersData?.filter(
  //   (myOrderedItem) => myOrderedItem.email === user.email
  // );
  // const onSubmitFilter = (data) => {
  //  if (data === "Cancer Specialist"){
  //    const CancerSpecialist =doctorsData?.filter(
  //       (doctorData) => doctorData.specialist === user.email
  //    setDoctorsData()
  //  }
  // };

  return (
    <div className="container">
      <h1 style={fontColDoc} className="text-center mb-5">
        Doctor List
      </h1>
      <div className="row">
        <div className="col-md-4">
          <div className="row row-cols-1">
            <div className="col">
              <div className="card text-dark bg-light mb-3">
                <div className="card-header" style={borderColFilter}>
                  Specialty
                </div>
                <div className="card-body" style={bordrCol}>
                  <h6 style={fontCol} className="card-title fw-semibold">
                    Cancer Specialist <br /> <br />
                    Nephrologist <br /> <br />
                    Psychiartist <br /> <br />
                  </h6>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card text-dark bg-light mb-3">
                <div className="card-header" style={borderColFilter}>
                  Apppointment availability
                </div>
                <div className="card-body" style={bordrCol}>
                  <h6 style={fontCol} className="card-title fw-normal">
                    <input className="me-2" type="checkbox" name="" id="" />
                    Free doctors only <br /> <br />
                    <input className="me-2" type="checkbox" name="" id="" />
                    Unavailable doctors only
                  </h6>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card text-dark bg-light mb-3">
                <div className="card-header" style={borderColFilter}>
                  Gender
                </div>
                <div className="card-body" style={bordrCol}>
                  <h6 style={fontCol} className="card-title fw-normal">
                    <input className="me-2" type="radio" name="" id="" />
                    No Preference <br />
                    <br />
                    <input className="me-2" type="radio" name="" id="" />
                    Female <br />
                    <br />
                    <input className="me-2" type="radio" name="" id="" />
                    Male
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-8">
          {doctorsData.map((doctorData, index) => (
            <Doctor key={index} doctorData={doctorData} />
          ))}
        </div>
      </div>
    </div>
    // <div className="container text-center">
    //   <h1 className="fw-bold">Our Doctors</h1>
    //   <hr className="hr-w mx-auto" />
    //   <div className="row row-cols-1 row-cols-md-3 g-4">
    //     {doctorsData.map((doctorData, index) => (
    //       <Doctor key={index} doctorData={doctorData} />
    //     ))}
    //   </div>
    // </div>
  );
};

export default Doctors;
