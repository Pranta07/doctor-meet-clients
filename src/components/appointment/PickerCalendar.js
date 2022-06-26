import React, { useState } from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
const PickerCalendar = () => {
    const [startDate, setStartDate] = useState(new Date());
    console.log(startDate)
  return (
    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
  );
};

export default PickerCalendar;