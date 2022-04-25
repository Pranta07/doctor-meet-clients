import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import "./Gender.css";

const Gender = (props: any) => {
    const { gender, setGender, setPage } = props;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setGender((event.target as HTMLInputElement).value);
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
                Gender
            </h5>
            <div className="p-4">
                <FormControl>
                    <RadioGroup
                        aria-labelledby="gender-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={gender}
                        onChange={handleChange}
                    >
                        <FormControlLabel
                            className="label"
                            value="All"
                            control={<Radio size="small" />}
                            label="No Preference"
                        />
                        <FormControlLabel
                            className="label"
                            value="Male"
                            control={<Radio size="small" />}
                            label="Male doctors only"
                        />
                        <FormControlLabel
                            className="label"
                            value="Female"
                            control={<Radio size="small" />}
                            label="Female doctors only"
                        />
                    </RadioGroup>
                </FormControl>
            </div>
        </div>
    );
};

export default Gender;
