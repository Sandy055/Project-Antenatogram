import { Route, Routes } from 'react-router-dom';
import ForgotPassword from './pages/forgotPassword';
import Register from './pages/register';
import LandingPage from './pages/landingPage';
import Login from './pages/login';
import Layout from './pages/layout';
import Dashboard from './pages/dashboard';
import RequireAuth from './pages/requireAuth';
import PatientHistory from './pages/patientHistory';
import AllScansAndReports from './pages/allFiles';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='forgot-password' element={<ForgotPassword />} />

        <Route path='' element={<RequireAuth allowedRoles={["patient", "doctor"]} />}>
          <Route path='user' element={<Dashboard />}/>
          <Route path='/history' element={<PatientHistory />} />
          <Route path='/files' element={<AllScansAndReports />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
