import { Link } from "react-router-dom";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";

const Sidebar = () => {
  const [patientInfo, setPatientInfo] = useState({
    name: "Mrs. Deepa Sharma",
    age: 33,
    estimatedDate: "12/09/2024",
    correctedDate: "22/09/2024",
    riskLevel: "MEDIUM",
    riskDescription: [
      "GTT results show higher blood sugar content.",
      "Patient appears to be borderline anaemic.",
    ],
  });

  const {auth} = useAuth();

  return (
    <div className="h-full w-full bg-gray-200 text-black relative">
      <div className="px-4 space-y-10 flex flex-col justify-around h-full">
        {/* Patient Info Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg h-3/6 w-full max-w-md">
          <div className="text-center mb-4">
            <h3 className="text-xl font-bold">Patient Info</h3>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mb-4">
              {/* SVG placeholder */}
              {/* Place your SVG here */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 7v-7m0 0l9-5-9-5-9 5 9 5z"
                />
              </svg>
            </div>
            <h4 className="text-lg font-bold">{patientInfo.name}</h4>
          </div>
          <div className="mt-4 text-left">
            <p><strong>Age:</strong> {patientInfo.age}</p>
            <p><strong>Estimated Date:</strong> {patientInfo.estimatedDate}</p>
            <p><strong>Corrected Date:</strong> {patientInfo.correctedDate}</p>
            <div className="mt-4 bg-blue-700 px-4 py-2 rounded text-center">
              <Link to={"/history"} className="text-white">
                View History
              </Link>
            </div>
          </div>
        </div>

        {/* Risk Level Card */}
        {
          auth.role === "doctor" && 
          <div className="bg-white p-6 rounded-lg shadow-lg h-2/6 w-full max-w-md">
            <div className="text-center mb-4">
              <h3 className="text-xl font-bold">Risk Level</h3>
            </div>
            <div className="text-center">
              <div className="bg-yellow-500 rounded p-2 mt-2 inline-block">
                <p className="font-bold">{patientInfo.riskLevel}</p>
              </div>
            </div>
            <div className="text-left mt-4">
              {patientInfo.riskDescription.map((desc, index) => (
                <p key={index}>{desc}</p>
              ))}
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default Sidebar;
