import { useState } from "react";
import { createPortal } from "react-dom";

/* eslint-disable react/prop-types */
const AppointmentSummaryModal = ({ isOpen, setIsOpen, appointment, setAppointment, updateAppointment }) => {
  const doctor = appointment.doctor;
  const date = appointment.date;
  const location = appointment.location;
  const summary = appointment.summary;

  const [dupeAppointment, setDupeAppointment]= useState({appointment});

  const handleChange = (e) => {
    setAppointment((prevAppointments) =>
      prevAppointments.map((appt) =>
        appt === appointment ? { ...appt, summary: e.target.value } : appt
      )
    );
  };
  if(isOpen == -1 ) return null;
  return (
    createPortal(
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-90">
        <div className="bg-white border border-gray-800 rounded-lg shadow-lg p-6" style={{ width: "700px", height: "400px" }}>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800">Appointment Summary</h2>
            <button onClick={() => {
                updateAppointment(dupeAppointment);
                setIsOpen(-1)
              }} className="text-gray-800 hover:text-gray-600">
              &times;
            </button>
          </div>
          <div className="mb-4">
            <p className="text-gray-800"><strong>Date:</strong> {date}</p>
            <p className="text-gray-800"><strong>Location:</strong> {location}</p>
            <p className="text-gray-800"><strong>Doctor:</strong> {doctor}</p>
          </div>
          <div className="mb-4 flex-grow">
            <label className="block text-gray-800 font-medium mb-2" htmlFor="summary">Summary:</label>
            <textarea
              id="summary"
              className="w-full h-full p-2 border border-gray-800 rounded-lg"
              value={summary}
              onChange={handleChange}
              style={{ resize: "none" }}
            />
          </div>
          <div className="flex justify-end">
            <button
              onClick={() => {
                setDupeAppointment(appointment)
                setIsOpen(-1)
              }}
              className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
            >
              Save & Close
            </button>
          </div>
        </div>
      </div>
      ,
      document.getElementById("portal")
    )

  )
};

export default AppointmentSummaryModal;
