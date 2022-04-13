import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import Doctor from "./Doctor";

type Props = {};
const Doctors: React.FC<Props> = () => {
  const [doctorsData, setDoctorsData] = useState([]);
  const uri =
    "https://raw.githubusercontent.com/mhasancy/doctorsData/main/doctorsData.json";
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
  return (
    <div className="container text-center">
      <h1 className="fw-bold">Our Doctors</h1>
      <hr className="hr-w mx-auto" />
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {doctorsData.map((doctorData, index) => (
          <Doctor key={index} doctorData={doctorData} />
        ))}
      </div>
    </div>
  );
};

export default Doctors;
