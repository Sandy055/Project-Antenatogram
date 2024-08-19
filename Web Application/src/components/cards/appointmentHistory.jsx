import { useState } from 'react'
import AppointmentSummaryModal from '../modals/appointmentSummary';

const AppointmentHistory = () => {
    const [appointments, setAppointments] = useState([
        { doctor: 'Dr. Jacob Paul', date: '25/12/2024', summary: 'Discussed glucose tolerance results and adjusted diet plan.', location: "Chennai" },
        { doctor: 'Dr. Jacob Paul', date: '18/11/2024', summary: 'Blood pressure and hemoglobin levels were checked.', location: "Chennai" },
        { doctor: 'Dr. Jacob Paul', date: '16/10/2024', summary: 'Routine check-up and discussed overall health.', location: "Chennai" },
        { doctor: 'Dr. Sweety', date: '30/09/2024', summary: 'Reviewed fetal measurements and growth.' },
        { doctor: 'Dr. Santhosh', date: '14/08/2024', summary: 'Initial consultation and health assessment.', location: "Chennai" },
    ]);

    const updateAppointment = ({appointment}) => {
        const dappointments = appointments;
        for(let i=0; i<dappointments.length; i++){
            if( i == isOpen) dappointments[i] = appointment;
        }
        setAppointments (dappointments);
        console.log(appointments);
    }

    const [isOpen, setIsOpen] = useState(-1);

    return (
        <>
            { isOpen != -1 &&
            (
                <AppointmentSummaryModal isOpen = {isOpen} setIsOpen={setIsOpen} appointment = {appointments[isOpen]} setAppointment = {setAppointments} updateAppointment = {updateAppointment} />
            )

            }
            <div className="p-4 h-full w-full bg-gray-200">
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-xl font-bold mb-4 hover:cursor-pointer">Appointment History</h2>
                    <ul className="divide-y divide-gray-300">
                        {appointments.map((appointment, index) => (
                            <li key={index} className="py-2 hover:cursor-pointer" onClick={() => setIsOpen(index)}>
                                <div className="font-semibold">{appointment.doctor}</div>
                                <div className="text-sm text-gray-500">{appointment.date}</div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};


export default AppointmentHistory