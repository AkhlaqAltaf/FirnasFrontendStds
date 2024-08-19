import { useState } from "react";
import { Link } from "react-router-dom";

function Maping(){


    const [data,setData]=useState([
        {username:"Akhlaq",password:"123090-"},
        {username:"Waleed",password:"123"},
        {username:"Inam",password:"12345"}])




return (

    <>
    {data.map((data)=>(

        <h1>
     <Link to={"/"} state={data} >
            {data.username}</Link>
        </h1>
    ))}
    </>
);
}


export default Maping;