import useAuth from "../../hooks/useAuth";
import { Link } from 'react-router-dom';
import axios from "../../api/axios";
const Navbar = () => {
    const { auth, setAuth} = useAuth();
    const authstatus = auth.loggedIn;

    const handleLogInOut = async () => {
        if(authstatus){
            setAuth("");
            try{
                const resp = await axios.post('/logout', {}, {withCredentials : true});
                console.log(resp);
            }
            catch(error){
                console.log(error);
            }
        }
    }

    return (
        <div className={"absolute h-16 bg-violet-200 bg-opacity-40 w-screen flex justify-between"}>
            <p className={"text-gray-800 text-xl w-max font-semibold m-4 ml-8 hover:text-black cursor-pointer "}>
                <Link to={ authstatus ? '/user' : '/' }>
                    AntenatApp
                </Link>
            </p>
            <p className={"text-gray-800 text-xl w-max font-semibold m-4 mr-8 hover:text-black cursor-pointer "}>
                <Link to={'/login'} onClick={handleLogInOut}>
                    Log{authstatus ? "out" : "in"}
                </Link>
            </p>

        </div>
    )
}

export default Navbar   