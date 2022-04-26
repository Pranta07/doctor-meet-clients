import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import "./Availability.css";
//
const Availability = (props: any) => {
  const { av, setAv, setPage } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAv((event.target as HTMLInputElement).value);
    setPage(1);
  };

  return (
    <div className="my-5 border rounded-3">
      <h5
        className="p-4 m-0"
        style={{
          backgroundColor: "#e6f1ff",
          letterSpacing: "1px",
          color: "#23448c",
          fontWeight: "bold",
        }}
      >
        Appointment Availability
      </h5>
      <div className="p-4">
        <FormControl>
          <RadioGroup
            aria-labelledby="availability-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={av}
            onChange={handleChange}
          >
            <FormControlLabel
              className="label"
              value={true}
              control={<Radio size="small" />}
              label="Free doctors only"
            />
            <FormControlLabel
              className="label"
              value={false}
              control={<Radio size="small" />}
              label="Available doctors only"
            />
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
};

export default Availability;
