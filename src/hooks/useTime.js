import { useEffect, useState } from "react";


export default function useTime() {
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');
    const [hour, setHour] = useState();
    const [minute, setMinute] = useState();
    const [fullDate, setFullDate] = useState();
    const [month, setMonth] = useState();
    const [year, setYear] = useState();
    const [day, setDay] = useState();
    const [premiumFacilities, setPremiumFacilties] = useState([]);
    const [expirationDateSilver, setExpirationDateSilver] = useState("");
    const [expirationDateGold, setExpirationDateGold] = useState("");
    const [expirationDateDiamond, setExpirationDateDiamond] = useState("");
    useEffect(() => {
        //Do you need the current time ? ⌚
        let date = new Date();
        let time = ((date.getHours().toString()).length > 1 ? date.getHours() : "0" + date.getHours()) + ":" + ((date.getMinutes().toString()).length > 1 ? date.getMinutes() : "0" + date.getMinutes());
        const today = date.getFullYear() + '-0' + (date.getMonth() + 1) + '-' + date.getDate();
        //If 4h-2min => 04:02
        //If 20h-15min => 20:15

        // const dateForPremiumMembershipPurchase=8/23/2018

        fetch("https://floating-basin-02241.herokuapp.com/premiumFacilities")
            .then(res => res.json())
            .then(data => {
                setPremiumFacilties(data)
            })
        if (setPremiumFacilties) {
            premiumFacilities.forEach((facility) => {
                if (facility.category === "Silver") {

                    // setExpirationMonth(parseInt(facility.duration) + month > 12 ? (parseInt(facility.duration) + month) - 12 : parseInt(facility.duration) + month);
                    // setExpirationYear(parseInt(facility.duration) + month > 12 ? year + 1 : year);
                    setExpirationDateSilver((parseInt(facility.duration) + month > 12 ? year + 1 : year) + "-" + (parseInt(facility.duration) + month > 12 ? (parseInt(facility.duration) + month) - 12 : parseInt(facility.duration) + month) + "-" + day);

                }
                else if (facility.category === "Gold") {

                    // setExpirationMonth(parseInt(facility.duration) + month > 12 ? (parseInt(facility.duration) + month) - 12 : parseInt(facility.duration) + month);
                    // setExpirationYear(parseInt(facility.duration) + month > 12 ? year + 1 : year);
                    setExpirationDateGold((parseInt(facility.duration) + month > 12 ? year + 1 : year) + "-" + (parseInt(facility.duration) + month > 12 ? (parseInt(facility.duration) + month) - 12 : parseInt(facility.duration) + month) + "-" + day);

                }
                else if (facility.category === "Diamond") {

                    // setExpirationMonth(parseInt(facility.duration) + month > 12 ? (parseInt(facility.duration) + month) - 12 : parseInt(facility.duration) + month);
                    // setExpirationYear(parseInt(facility.duration) + month > 12 ? year + 1 : year);
                    setExpirationDateDiamond((parseInt(facility.duration) + month > 12 ? year + 1 : year) + "-" + (parseInt(facility.duration) + month > 12 ? (parseInt(facility.duration) + month) - 12 : parseInt(facility.duration) + month) + "-" + day);

                } 

            })
        }


        const hour = date.getHours();
        const minute = date.getMinutes();
        setHour(hour);
        setMinute(minute);
        setTime(time);
        setFullDate(date);
        setDate(today);
        setMonth(date.getMonth() + 1);
        setYear(date.getFullYear());
        setDay(date.getDate())
    }, [day,month,premiumFacilities,year])
    return {
        time, date, hour, minute, fullDate, month, year, day,expirationDateSilver,expirationDateGold,expirationDateDiamond
    }


}

