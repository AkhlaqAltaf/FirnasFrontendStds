import axios from "axios";
const rewistertest=async()=>{

    var res = await axios.post('http://localhost:5000/register', {username:"Waleed",password:'12345'});
 


    console.log(res.data);
}

export default rewistertest;