import {useEffect, useState} from 'react';
import {  useNavigate } from 'react-router-dom';
function UserForm (){

    var navigate = useNavigate();

    const [username, setUsername] = useState("username");
    const [password,setPassword] = useState("Password");
    const [auth,setAuth] = useState(null);


    function UserName (event){

        setUsername(event.target.value)
    }

    function PasswordChange(event){

        setPassword(event.target.value);

    }


    // use effect 



 



    function SubmitData(event){
       event.preventDefault();

           navigate('/',{state:{username:username,password:password}}  );


    
      
    }
    return (
        <>
        <form method ="GET">

            <input name = "username" type='text' onChange={UserName} />
            <input name='password' type='password' onChange={PasswordChange} />

            <button onClick={SubmitData}>
                Submit
            </button>

            {
                username
            }
            {password}
        </form>
        </>
    )

}

export default UserForm;