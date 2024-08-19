import { Link } from "react-router-dom";
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
            </ul>
        </nav>
        </>
    )
}
export default Navbar;
