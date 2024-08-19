// import { useEffect } from "react"
// import useAuth from "../hooks/useAuth";
import Navbar from "../components/bars/navbar";
import Statics from "../components/cards/statics";
import SelfMonitoringParameters from "../components/cards/selfMonitoringDynamics";
import FoetalMeasurements from "../components/cards/foetalMeasurementsDynamics";
import Sidebar from "../components/bars/leftSidebar";
import RightSidebar from "../components/bars/rightSideBar";


const Dashboard = () => {
    // const { auth } = useAuth();
    // useEffect(() => {
    //     console.log(JSON.stringify(auth).length);
    // }, [])   

    return (
        <div id="dashboard">
            <Navbar />
            <div className="flex h-screen bg-gradient-to-b w-screen pt-16">
                <div id="left" className="w-1/5">
                    <Sidebar />
                </div>
                <div id="middle" className=" flex flex-col h-4/5 justify-around w-3/5 pt-8 pb-2 px-4">
                    <Statics />
                    <SelfMonitoringParameters />
                    <FoetalMeasurements />

                </div>
                <div id="right" className="w-1/5">
                    <RightSidebar/>
                </div>
                
            </div>
        </div>
    )
}

export default Dashboard

