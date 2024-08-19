import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/bars/navbar";
import useAuth from "../hooks/useAuth";

const Layout = () => {
    const location = useLocation();
    const { auth } = useAuth();

    let gradientClasses = "font-Inter h-screen ";
    
    // Check user role and set gradient accordingly
    if (auth.role === 'doctor' || auth.expectedRole === "doctor") {
        gradientClasses += "bg-gradient-to-b from-blue-600 via-blue-800 to-blue-900";
    } else {
        gradientClasses += "bg-gradient-to-b from-gradstart to-gradend";
    }

    const avoidNavbar = location.pathname !== '/'; //&& location.pathname !== '/login' && location.pathname !== '/register'

    return (
        <main className={gradientClasses}>
            {avoidNavbar && (<Navbar/>)}
            <Outlet/>
        </main>
    );
}

export default Layout;
