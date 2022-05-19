import React, { useEffect, useState } from "react";
import portalImg from "../../assets/undraw_medicine.svg";
import bdFlag from "../../assets/bangladesh-flag.jpg";
import { Spinner } from "react-bootstrap";
import "./CovidTop.css";
import CovidChart from "./CovidChart";

/* interface HIF {
    "x-rapidapi-host": string;
    "x-rapidapi-key": string;
}
const headerObj: HIF = {
    "x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
    "x-rapidapi-key": "a6c4d3b95cmsh9785bfec94cc0dbp1c63dejsn1bc770ceab86",
}; */

const CovidTop = () => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("https://covid-19-statistics.p.rapidapi.com/reports?iso=BGD", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
        "x-rapidapi-key": "a6c4d3b95cmsh9785bfec94cc0dbp1c63dejsn1bc770ceab86",
      },
    })
      .then((res) => res.json())
      .then((data) => setData(data?.data[0]))
      .finally(() => setLoading(false));
  }, []);

  // console.log(data);

  return (
    <>
      <div className="covid-header my-5">
        <h1 className="text-center fw-bold">Covid Portal</h1>
        <hr className="mx-auto hr-hight w-25" />
        <p className="text-center text-secondary">
          <small>Be Aware, Stay Healthy!</small>
        </p>
        <div className="container pb-3">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div>
                <img src={portalImg} alt="" className="w-100" />
              </div>
              <div>
                <h1>Be Aware, Stay Healthy!</h1>
                <p className="text-secondary">
                  <small>Welcome to COVID-19 information portal.</small>
                </p>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="row gx-3 gy-3">
                <div className="col-6">
                  <div
                    className="p-3 rounded item"
                    style={{
                      backgroundColor: "lightpink",
                    }}
                  >
                    <div style={{ color: "maroon" }}>
                      <h3>Confirmed</h3>
                      {loading ? (
                        <div className="text-center">
                          <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                          </Spinner>
                        </div>
                      ) : (
                        <p id="confirmed">{data.confirmed}</p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div
                    className="p-3 rounded item"
                    style={{ backgroundColor: "lightblue" }}
                  >
                    <div style={{ color: "blue" }}>
                      <h3>Active</h3>
                      {loading ? (
                        <div className="text-center">
                          <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                          </Spinner>
                        </div>
                      ) : (
                        <p>{data?.active_diff}</p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div
                    className="p-3 rounded item"
                    style={{
                      backgroundColor: "lightgreen",
                    }}
                  >
                    <div style={{ color: "green" }}>
                      <h3>Recovered</h3>
                      {loading ? (
                        <div className="text-center">
                          <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                          </Spinner>
                        </div>
                      ) : (
                        <p>{data.confirmed - data.deaths - data.active_diff}</p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div
                    className="p-3 rounded item"
                    style={{
                      backgroundColor: "lightgray",
                    }}
                  >
                    <h3>Deceased</h3>
                    {loading ? (
                      <div className="text-center">
                        <Spinner animation="border" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </Spinner>
                      </div>
                    ) : (
                      <p>{data.deaths}</p>
                    )}
                  </div>
                </div>
              </div>
              <h5 className="pt-3 text-center">
                <img src={bdFlag} alt="" width="50" height="50" />
                <span className="text-success"> {data?.region?.name}</span> |
                Updated:
                <span>{data?.last_update}</span>
              </h5>
            </div>
          </div>
        </div>
      </div>
      <CovidChart result={data}></CovidChart>
    </>
  );
};

export default CovidTop;
