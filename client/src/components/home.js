import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Home(){


    var location = useLocation();
    var data = location.state?location.state:{username:"",password:""};

    console.log(location?.state)

    useEffect(()=>{

        // console.log(location);
    })

    return (
        <>

        Data will be here :
        
        
        <h1> {data.username}

            </h1>

            <h3>

           {data.password}
           
            </h3>

        </>
    )
}

export default Home;