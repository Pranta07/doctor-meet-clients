import React from 'react';
import useTime from '../../hooks/useTime';

const MyCalendar = () => {
    const {time,date}=useTime();
    return (
        <div>
            {time}
            {date}
        </div>
    );
};

export default MyCalendar;