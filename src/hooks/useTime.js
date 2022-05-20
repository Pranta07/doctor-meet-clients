import { useEffect, useState } from "react";


export default function useTime(){
    const [time,setTime]=useState('');
    const [date,setDate]=useState('');
    const [hour,setHour]=useState();
    const [miniute,setMinitue]=useState();
    const [fullDate,setFullDate]=useState();
    useEffect(()=>{
        //Do you need the current time ? ⌚
    let date = new Date();
    let time = ((date.getHours().toString()).length>1? date.getHours() : "0"+date.getHours()) +":"+ ((date.getMinutes().toString()).length>1? date.getMinutes() : "0"+date.getMinutes());
    const today = date.getFullYear()+'-0'+(date.getMonth()+1)+'-'+date.getDate();
    //If 4h-2min => 04:02
    //If 20h-15min => 20:15
    const hour=date.getHours();
    const miniute=date.getMinutes();
    setHour(hour);
    setMinitue(miniute);
    setTime(time);
setFullDate(date);
    setDate(today);
    },[])
    return{
        time,date,hour,miniute,fullDate
    }
        
    
}

