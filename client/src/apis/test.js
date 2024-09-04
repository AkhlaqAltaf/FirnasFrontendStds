import axios from "axios";

const test =async()=>{
   
   var res = await axios.post('http://localhost:5000', {username:"Inam",password:'12345'});
 


    console.log(res.data);
}

export default test;


