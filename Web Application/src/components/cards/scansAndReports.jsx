import { useState } from 'react'
import FileModal from '../modals/fileModal';
import { Link } from 'react-router-dom';

const ScansAndReports = () => {

  const [scansReports, setScansReports] = useState([
    { name: 'GTT - Mediscan', date: '29/01/2024', fileurl: '../assets/reports.jpg' },
    { name: 'Ultrasound - Mediscan', date: '29/01/2024', fileurl: '../assets/reports.jpg' },
    { name: 'Blood Test - Mediscan', date: '29/01/2024', fileurl: '../assets/reports.jpg' },
  ]);

  const [isOpen, setIsOpen] = useState(-1);

  return (
    <>
      {isOpen != -1 &&
        (
          <FileModal isOpen={isOpen} onClose={() => { setIsOpen(-1) }} fileUrl={scansReports[isOpen].fileurl} />
        )

      }
      <div className="p-4 h-full w-full bg-gray-200">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <Link to={'/files'}>
            <h2 className="text-xl font-bold mb-4 hover:cursor-pointer">Scans and Reports</h2>
          </Link>
          <ul className="divide-y divide-gray-300">
            {scansReports.map((report, index) => (
              <li key={index} className="py-2 cursor-pointer" onClick={() => { setIsOpen(index) }}>
                <div className="font-semibold">{report.name}</div>
                <div className="text-sm text-gray-500">{report.date}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default ScansAndReports