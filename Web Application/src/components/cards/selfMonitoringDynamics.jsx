import { useState } from "react";
import SelfMonitoringModal from "../modals/selfMonitoringModal";

const SelfMonitoringParameters = () => {
  const parameters = [
    { title: "Weight", value: 70, unit: "kg" },
    { title: "Blood Sugar", value: 90, unit: "mg/dL" },
    { title: "Temperature", value: 98.6, unit: "°F" },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedParameter, setSelectedParameter] = useState("");

    const openModal = (parameter) => {
        setSelectedParameter(parameter);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

  return (
    <>
    <div className="bg-gray-100 border border-black rounded-lg px-4 pt-4 pb-8 text-center">
      <h2 className="font-bold mb-4">Self-Monitoring Parameters</h2>
      <div className="flex justify-around">
        {parameters.map((param, index) => (
          <div key={index} onClick={() => openModal(param.title.toLowerCase())} className="border rounded-md bg-gray-200 border-black p-2 w-1/4 hover:cursor-pointer">
            <h3 className="font-bold">{param.title}</h3>
            <p>{param.value} {param.unit}</p>
          </div>
        ))}
      </div>
    </div>
    {isModalOpen && <SelfMonitoringModal onClose={closeModal} choice={selectedParameter}/>}
    </>
  );
};

export default SelfMonitoringParameters;
