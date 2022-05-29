import React from 'react';
import useTime from '../../hooks/useTime';
import { styled } from "@mui/material/styles";

const RootStyle = styled("div")(({ theme }) => ({
  height: "100%",
  backgroundColor: theme.palette.background.default,
}));
const MyCalendar = () => {
    const {time,date}=useTime();
    return (
<RootStyle>
        <div>
            {time}
            {date}
        </div>
     </RootStyle>
    );
};

export default MyCalendar;