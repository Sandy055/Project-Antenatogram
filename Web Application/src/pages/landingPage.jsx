import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const LandingPage = () => {
  const {setAuth} = useAuth();
  
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      <header className="w-full bg-blue-600 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold">AntenatApp</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#features" className="hover:underline">Features</a></li>
              <li><a href="#benefits" className="hover:underline">Benefits</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="w-full bg-white shadow-md py-4">
        <div className="container mx-auto flex justify-center space-x-8">
          <Link to="/user" onClick={() => {setAuth({expectedRole : "patient"})}} className="border border-black p-4 flex flex-col items-center justify-center w-40 h-40 hover:bg-pink-300">
            <iframe className='ml-5' src="src\assets\patient.svg" width={100} height={100}></iframe>
            <span>Patient</span>
          </Link>
          <Link to="/user" onClick={() => {setAuth({expectedRole : "doctor"})}} className="border border-black p-4 flex flex-col items-center justify-center w-40 h-40 hover:bg-blue-300">
            <iframe className='ml-5' src="src\assets\doctor.svg" width={100} height={100}></iframe>
            <span>Doctor</span>
          </Link>
        </div>
      </div>
      <main className="container mx-auto flex-grow px-4 py-8">
        <section className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Manage Pregnancy Data with Ease</h2>
          <p className="text-lg text-gray-700">
            A comprehensive system to manage patient information, medical records, and doctor appointments seamlessly.
          </p>
        </section>
        <section id="features" className="mb-12">
          <h3 className="text-2xl font-bold mb-4 text-center">Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-lg text-center">
              <h4 className="text-xl font-bold mb-2">Patient Information</h4>
              <p>Manage patient details including personal information, address, and contact details.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg text-center">
              <h4 className="text-xl font-bold mb-2">Medical History</h4>
              <p>Track medical history, medications, allergies, and more to provide comprehensive care.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg text-center">
              <h4 className="text-xl font-bold mb-2">Appointments</h4>
              <p>Schedule and manage patient appointments with doctors, including visit summaries.</p>
            </div>
          </div>
        </section>
        <section id="benefits" className="mb-12">
          <h3 className="text-2xl font-bold mb-4 text-center">Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-lg text-center">
              <h4 className="text-xl font-bold mb-2">Improved Patient Care</h4>
              <p>Access complete patient data to provide personalized and effective care.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg text-center">
              <h4 className="text-xl font-bold mb-2">Efficient Management</h4>
              <p>Simplify the management of patient information and medical records.</p>
            </div>
          </div>
        </section>
        <section id="contact" className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
          <p>If you have any questions or need assistance, please contact us at <a href="mailto:support@pregnancymanagement.com" className="text-blue-600 hover:underline">support@pregnancymanagement.com</a>.</p>
        </section>
      </main>
      <footer className="w-full bg-blue-600 text-white py-4 text-center">
        <p>&copy; 2024 AntenatApp. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
