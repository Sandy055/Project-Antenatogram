import { useState } from 'react';
import FileModal from '../components/modals/fileModal';

const AllScansAndReports = () => {
  const [scansReports, setScansReports] = useState([
    { name: 'GTT - Mediscan', date: '29/01/2024', fileurl: '../assets/reports.jpg' },
    { name: 'Ultrasound - Mediscan', date: '21/01/2024', fileurl: '../assets/reports.jpg' },
    { name: 'Blood Test - Mediscan', date: '24/01/2024', fileurl: '../assets/reports.jpg' },
    { name: 'Blood Test - Mediscan', date: '25/01/2024', fileurl: '../assets/reports.jpg' },
    { name: 'Blood Test - Mediscan', date: '26/01/2024', fileurl: '../assets/reports.jpg' },
    { name: 'Blood Test - Mediscan', date: '22/01/2024', fileurl: '../assets/reports.jpg' },
    { name: 'Blood Test - Mediscan', date: '27/01/2024', fileurl: '../assets/reports.jpg' },
    { name: 'Blood Test - Mediscan', date: '31/01/2024', fileurl: '../assets/reports.jpg' },
    { name: 'Blood Test - Mediscan', date: '03/02/2024', fileurl: '../assets/reports.jpg' },
  ]);

  const [isOpen, setIsOpen] = useState(-1);
  const [sortOrder, setSortOrder] = useState('newest');

  const sortReports = (order) => {
    const sortedReports = [...scansReports].sort((a, b) => {
      const dateA = new Date(a.date.split('/').reverse().join('-'));
      const dateB = new Date(b.date.split('/').reverse().join('-'));
      return order === 'newest' ? dateB - dateA :  (order === 'oldest' ? dateA - dateB : scansReports);
    });
    setScansReports(sortedReports);
  };

  const handleSortChange = (e) => {
    const order = e.target.value;
    setSortOrder(order);
    sortReports(order);
  };

  return (
    <>
      {isOpen !== -1 && (
        <FileModal isOpen={isOpen} onClose={() => setIsOpen(-1)} fileUrl={scansReports[isOpen].fileurl} />
      )}
      <div className="pt-20 px-4 h-full w-full">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">All Scans and Reports</h2>
            <select
              className="border border-gray-300 rounded p-2"
              value={sortOrder}
              onChange={handleSortChange}
            >

              <option value="null">Sort by </option>
              <option value="newest">Newest first</option>
              <option value="oldest">Oldest first</option>
            </select>
          </div>
          <ul className="divide-y divide-gray-300">
            {scansReports.map((report, index) => (
              <li key={index} className="py-2 cursor-pointer" onClick={() => setIsOpen(index)}>
                <div className="font-semibold">{report.name}</div>
                <div className="text-sm text-gray-500">{report.date}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default AllScansAndReports;
