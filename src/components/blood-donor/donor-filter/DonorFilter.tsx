import React, { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Donors from "../donors/Donors";
import { styled } from "@mui/material/styles";

const RootStyle = styled("div")(({ theme }: any) => ({
  height: "100%",
  backgroundColor: theme.palette.background.default,
}));
export interface Idonor {
  _id: string;
  img: string;
  name: string;
  email: string;
  phone: string;
  group: string;
  district: string;
  gender: string;
}

const DonorFilter = () => {
  const [displayDonors, setDisplayDonors] = useState<Idonor[]>([]);
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  const [group, setGroup] = useState("All");
  const [district, setDistrict] = useState("All");

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const handleGroup = (event: SelectChangeEvent) => {
    setPage(1);
    setGroup(event.target.value as string);
  };

  const handleDistrict = (event: SelectChangeEvent) => {
    setPage(1);
    setDistrict(event.target.value as string);
  };

  useEffect(() => {
    setLoading(true);
    const url = `https://doctor-meet-server.herokuapp.com/api/v1/donor?group=${group}&&district=${district}&&page=${page}&&rows=${6}`;
    // console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setDisplayDonors(data.result);
        setTotal(data.total);
      })
      .finally(() => setLoading(false));
  }, [page, group, district]);

  return (
    <>
      <section id="find-donors-section" className="container my-4">
        <h1 className="text-center">
          Find <span className="text-danger">Donors</span>
        </h1>
        <hr
          className="
                        w-50
                        mx-auto
                        text-danger
                        border border-2 border-danger
                        rounded
                        my-5
                    "
        />

        <div className="row justify-content-center gy-4">
          <div className="col-10 col-md-4">
            <FormControl fullWidth required>
              <InputLabel id="group" className="text-danger fw-bold">
                Blood Group
              </InputLabel>
              <Select
                labelId="group"
                value={group}
                label="Blood Group"
                onChange={handleGroup}
              >
                <MenuItem value="All" className="text-danger">
                  All Group
                </MenuItem>
                <MenuItem value="A%2B" className="text-danger">
                  A+
                </MenuItem>
                <MenuItem value="A-" className="text-danger">
                  A-
                </MenuItem>
                <MenuItem value="B%2B" className="text-danger">
                  B+
                </MenuItem>
                <MenuItem value="B-" className="text-danger">
                  B-
                </MenuItem>
                <MenuItem value="O%2B" className="text-danger">
                  O+
                </MenuItem>
                <MenuItem value="O-" className="text-danger">
                  O-
                </MenuItem>
                <MenuItem value="AB%2B" className="text-danger">
                  AB+
                </MenuItem>
                <MenuItem value="AB-" className="text-danger">
                  AB-
                </MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="col-10 col-md-4">
            <FormControl fullWidth required>
              <InputLabel id="district" className="text-danger fw-bold">
                District
              </InputLabel>
              <Select
                labelId="district"
                value={district}
                label="District"
                onChange={handleDistrict}
              >
                <MenuItem value="All">All District</MenuItem>
                <MenuItem value="Dhaka">Dhaka</MenuItem>
                <MenuItem value="Chittagong">Chittagong</MenuItem>
                <MenuItem value="Cumilla">Cumilla</MenuItem>
                <MenuItem value="Rajshahi">Rajshahi</MenuItem>
                <MenuItem value="Khulna">Khulna</MenuItem>
                <MenuItem value="Jashore">Jashore</MenuItem>
                <MenuItem value="Sylhet">Sylhet</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        {!loading ? (
          <Donors
            donors={displayDonors}
            page={page}
            handleChange={handleChange}
            total={total}
          ></Donors>
        ) : (
          <div className="d-flex justify-content-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
      </section>
    </>
  );
};
export default DonorFilter;
