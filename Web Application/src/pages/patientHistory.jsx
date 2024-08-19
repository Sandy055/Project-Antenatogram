import { useState } from 'react';

const PatientHistory = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [patientData, setPatientData] = useState({
    name: 'Mrs. Deepa Sharma',
    id: '9002',
    phone: '+91 9458329855',
    email: 'deepa.sharma@gmail.com',
    dob: '12/12/1988',
    aadhar: '1990 4308 9902 2239',
    nominee: 'Mr. Ramesh Sharma',
    nomineePhone: '9159983002',
    address: 'No 12, JD Avenue, Raman Street, T-Nagar, Chennai - 600099',
    height: '165cm',
    bloodGroup: 'O +ve',
    medications: 'any medication plus the dosage.',
    allergies: 'any allergies',
    illnessHistory: 'Thyroid: No\nHypertension: Yes\nDiabetes: No\nOther: Any other chronic illnesses',
    surgeryHistory: 'Any other surgeries in the past',
    lifestyleFactors: 'Social drinker, intermediate physical activity, mostly household work'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatientData({ ...patientData, [name]: value });
  };

  const inputClass = isEditing ? "border border-gray-400 p-1" : "";

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-b from-pink-50 to-pink-100">
      <div className="bg-white rounded-lg shadow-lg p-8 w-11/12 h-min">
        <div className="flex justify-between items-center border-b pb-4 mb-4">
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 bg-blue-200 rounded-full"></div>
            <div className="flex flex-col">
              {isEditing ? (
                <>
                  <input 
                    type="text" 
                    name="name" 
                    value={patientData.name} 
                    onChange={handleChange} 
                    className={`text-2xl font-bold ${inputClass}`}
                  />
                  <p className="text-gray-600">ID: <input type="text" name="id" value={patientData.id} onChange={handleChange} className={inputClass} /></p>
                  <p className="text-gray-600"><input type="text" name="phone" value={patientData.phone} onChange={handleChange} className={inputClass} /></p>
                  <p className="text-gray-600"><input type="text" name="email" value={patientData.email} onChange={handleChange} className={inputClass} /></p>
                </>
              ) : (
                <>
                  <h1 className="text-2xl font-bold">{patientData.name}</h1>
                  <p className="text-gray-600">ID: {patientData.id}</p>
                  <p className="text-gray-600">{patientData.phone}</p>
                  <p className="text-gray-600">{patientData.email}</p>
                </>
              )}
            </div>
          </div>
          <div className="flex flex-col">
            {isEditing ? (
              <>
                <p className="text-gray-600">Date of Birth: <input type="text" name="dob" value={patientData.dob} onChange={handleChange} className={inputClass} /></p>
                <p className="text-gray-600">Aadhar No: <input type="text" name="aadhar" value={patientData.aadhar} onChange={handleChange} className={inputClass} /></p>
                <p className="text-gray-600">Nominee: <input type="text" name="nominee" value={patientData.nominee} onChange={handleChange} className={inputClass} /></p>
                <p className="text-gray-600">Nominee Phone No: <input type="text" name="nomineePhone" value={patientData.nomineePhone} onChange={handleChange} className={inputClass} /></p>
                <p className="text-gray-600">Address: <input type="text" name="address" value={patientData.address} onChange={handleChange} className={inputClass} /></p>
              </>
            ) : (
              <>
                <p className="text-gray-600">Date of Birth: {patientData.dob}</p>
                <p className="text-gray-600">Aadhar No: {patientData.aadhar}</p>
                <p className="text-gray-600">Nominee: {patientData.nominee}</p>
                <p className="text-gray-600">Nominee Phone No: {patientData.nomineePhone}</p>
                <p className="text-gray-600">Address: {patientData.address}</p>
              </>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="font-bold">Height</p>
            <p className="text-gray-600 mb-4">
              {isEditing ? (
                <input type="text" name="height" value={patientData.height} onChange={handleChange} className={inputClass} />
              ) : (
                patientData.height
              )}
            </p>
            <p className="font-bold">Blood Group</p>
            <p className="text-gray-600 mb-4">
              {isEditing ? (
                <input type="text" name="bloodGroup" value={patientData.bloodGroup} onChange={handleChange} className={inputClass} />
              ) : (
                patientData.bloodGroup
              )}
            </p>
            <p className="font-bold">Medications</p>
            <p className="text-gray-600 mb-4">
              {isEditing ? (
                <textarea name="medications" value={patientData.medications} onChange={handleChange} className={inputClass} />
              ) : (
                patientData.medications
              )}
            </p>
            <p className="font-bold">Allergies</p>
            <p className="text-gray-600 mb-4">
              {isEditing ? (
                <textarea name="allergies" value={patientData.allergies} onChange={handleChange} className={inputClass} />
              ) : (
                patientData.allergies
              )}
            </p>
          </div>
          <div>
            <p className="font-bold">History of Illness</p>
            <p className="text-gray-600 mb-4">
              {isEditing ? (
                <textarea className={`w-full h-32 ${inputClass}`} name="illnessHistory" value={patientData.illnessHistory} onChange={handleChange} />
              ) : (
                patientData.illnessHistory
              )}
            </p>
            <p className="font-bold">History of Surgery</p>
            <p className="text-gray-600 mb-4">
              {isEditing ? (
                <textarea className={`w-full h-32 ${inputClass}`} name="surgeryHistory" value={patientData.surgeryHistory} onChange={handleChange} />
              ) : (
                patientData.surgeryHistory
              )}
            </p>
          </div>
          <div>
            <p className="font-bold">Lifestyle Factors</p>
            <p className="text-gray-600 mb-4">
              {isEditing ? (
                <textarea className={`w-full h-32 ${inputClass}`} name="lifestyleFactors" value={patientData.lifestyleFactors} onChange={handleChange} />
              ) : (
                patientData.lifestyleFactors
              )}
            </p>
          </div>
        </div>
        <button 
          onClick={() => setIsEditing(!isEditing)} 
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          {isEditing ? 'Save' : 'Edit'}
        </button>
      </div>
    </div>
  );
}

export default PatientHistory;
