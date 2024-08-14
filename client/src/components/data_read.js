import {useState} from 'react';

function UserForm (){

    const [username, setUsername] = useState("username");
    const [password,setPassword] = useState("Password");


    function UserName (event){

        setUsername(event.target.value)
    }

    function PasswordChange(event){

        setPassword(event.target.value);

    }

    function SubmitData(event){
       event.preventDefault();
        console.log(username);
        console.log(password);
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