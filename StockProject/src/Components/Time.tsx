import React, { useState, useEffect } from "react";

export const Time = () =>{
    const [data, setdata] = useState({
        time:""
    });

    useEffect(() => {
        fetch("/data").then((res)=>res.json().then((data)=>{
            setdata({
                time: data.Date
            });
        }))
    })
    return (
    <div>
        <p>{data.time}</p>
    </div>
)
}



