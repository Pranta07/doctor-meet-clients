import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import {
  AiFillStar,
  AiOutlineCalendar,
  AiOutlineSafetyCertificate,
} from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
type Props = {};
const Doctors: React.FC<Props> = () => {
  // const [doctorsData, setDoctorsData] = useState([]);
  // const uri =
  //   'https://raw.githubusercontent.com/mhasancy/doctorsData/main/doctorsData.json';
  // const fetchData = async () => {
  //   try {
  //     const response: AxiosResponse = await axios.get(uri);
  //     setDoctorsData(response.data);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  // console.log(doctorsData);

  // useEffect(() =>
  //   fetchData();
  // }, []);
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
  return (
    <div className="container">
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
                    Destinations <br /> <br />
                    Hotels <br /> <br />
                    News <br /> <br />
                    StartUp <br /> <br />
                    Strategy
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
          <div className="row row-cols-1">
            <div className="col">
              <div className="card">
                <div
                  className="row row-cols-1 row-cols-md-3  rounded g-0"
                  style={bordrCol}
                >
                  <div className="col-12 col-md-3">
                    <img
                      src="https://metropolitanhost.com/themes/themeforest/react/docfind/assets/img/doctors-grid/348x350-0.jpg"
                      className="img-fluid h-100 w-100 rounded-start"
                      alt=""
                    />
                  </div>

                  <div
                    className="col-6 col-md-5"
                    style={{
                      color: "#ecf8f9",
                      borderRight: "1px solid ",
                    }}
                  >
                    <div className="card-body">
                      <h5 style={fontColDoc} className="card-title">
                        Matthew Reyes <br />
                      </h5>
                      <h6 style={fontColDoc} className="card-title">
                        Obstetrics & Gynaecology
                      </h6>
                      <p className="card-text" style={fontCol}>
                        University of California San Francisco Parnassus Campus
                      </p>
                      <p className="card-text">
                        <button style={btnStyle}>VIEW MORE</button>
                        <button
                          className="ms-2"
                          style={{
                            backgroundColor: "#fff",
                            border: "solid 1px",
                            color: "#00acb1",
                            padding: "10px",
                            borderRadius: "5px",
                            fontWeight: "bold",
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="16"
                            fill="currentColor"
                            className="bi bi-heart"
                            viewBox="0 0 16 16"
                          >
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"></path>
                          </svg>
                        </button>
                      </p>
                    </div>
                  </div>
                  <div className="col-6 col-md-4">
                    <div className="card-body">
                      {/* <h5 className="card-title">Card title</h5> */}
                      <i
                        className="bi-alarm"
                        style={{ fontSize: "2rem", color: "cornflowerblue" }}
                      ></i>{" "}
                      <h6 className="card-text" style={fontCol}>
                        <span
                          className="me-2"
                          style={{
                            color: "#00acb1",
                          }}
                        >
                          <IoLocationOutline />
                        </span>
                        Hong Kong <br />
                        <br />
                        <span
                          className="me-2"
                          style={{
                            color: "#00acb1",
                          }}
                        >
                          <AiOutlineSafetyCertificate />
                        </span>
                        5 Yrs Experience <br />
                        <br />
                        <span
                          className="me-2"
                          style={{
                            color: "#00acb1",
                          }}
                        >
                          <AiOutlineCalendar />
                        </span>
                        Tue, Wed, Thu, Fri,
                      </h6>
                      <br />
                      <p className="card-text">
                        <span style={{ color: "orange" }}>
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                        </span>
                        (3)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
