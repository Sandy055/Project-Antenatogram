import { useState } from "react";
import Modalwindow from "../modals/foetalmodalwindow";

const FoetalMeasurements = () => {
  const measurements = [
    { title: "Head Circumference", value: 32, unit: "cm" },
    { title: "Abdominal Circumference", value: 30, unit: "cm" },
    { title: "Femur Length", value: 5, unit: "cm" },
    { title: "Biparietal Diameter", value: 9, unit: "cm" },
  ];


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [choice, setChoice] = useState("");

  const openModal = (choice) => {
    setChoice(choice);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  

  return (
    <>
      <div className="bg-white border border-black rounded-lg px-2 pt-4 pb-8 text-center">
        <h2 onClick={() => {openModal("all")}} className="font-bold mb-4 hover:cursor-pointer">Foetal Measurements</h2>
        <div className="flex justify-around">
          {measurements.map((measurement, index) => (
            <div key={index} onClick={() => {openModal(measurement.title.toLowerCase())}} className='border rounded-md bg-gray-200 border-black p-2 w-1/5 hover:cursor-pointer '>
              <h3 className="font-bold">{measurement.title}</h3>
              <p>{measurement.value} {measurement.unit}</p>
            </div>
          ))}
        </div>
      </div>
      {isModalOpen && <Modalwindow onClose={closeModal} choice={choice}/>}
    </>
  );
};

export default FoetalMeasurements;
