import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import "./Departments.css";

const Departments = (props: any) => {
    const { dept, setDept, setPage } = props;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDept((event.target as HTMLInputElement).value);
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
                Departments
            </h5>
            <div className="dep p-4">
                <FormControl>
                    <RadioGroup
                        aria-labelledby="departmnets-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={dept}
                        onChange={handleChange}
                    >
                        <FormControlLabel
                            className="label"
                            value="All"
                            control={<Radio size="small" />}
                            label="All Departments"
                        />
                        <FormControlLabel
                            className="label"
                            value="Dermatologist"
                            control={<Radio size="small" />}
                            label="Dermatologist"
                        />
                        <FormControlLabel
                            className="label"
                            value="Orthopedics"
                            control={<Radio size="small" />}
                            label="Orthopedics"
                        />
                        <FormControlLabel
                            className="label"
                            value="Medicine"
                            control={<Radio size="small" />}
                            label="Medicine"
                        />
                        <FormControlLabel
                            className="label"
                            value="Surgery"
                            control={<Radio size="small" />}
                            label="Surgery"
                        />
                        <FormControlLabel
                            className="label"
                            value="Gayeny"
                            control={<Radio size="small" />}
                            label="Gynecologist"
                        />
                        <FormControlLabel
                            className="label"
                            value="Eye"
                            control={<Radio size="small" />}
                            label="Eye Specialist"
                        />
                    </RadioGroup>
                </FormControl>
            </div>
        </div>
    );
};

export default Departments;
