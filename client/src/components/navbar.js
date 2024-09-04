import { Link } from "react-router-dom";
import test from "../apis/test";
import rewistertest from "../apis/register";
function Navbar(){

    return (
        <>
        
        <nav>

            <ul>

                <li>
                    <Link to='/'>
                    Home
                    </Link>
                    
                    
                </li>
                <li>
                <Link to='form'> Form</Link>                </li>
                <li><Link to='map'> Data Maping</Link>                </li>


                <li>contactus</li>
                <li><button onClick={rewistertest}> TEST API</button>                </li>

            </ul>
        </nav>
        </>
    )
}
export default Navbar;
