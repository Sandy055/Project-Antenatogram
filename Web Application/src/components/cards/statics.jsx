const Statics = () => {
  const metrics = [
    { title: "Hemoglobin", value: 13.5, unit: "g/dL" },
    { title: "Blood Pressure", value: "120/80", unit: "mmHg" },
    { title: "Glucose Tolerance", value: 140, unit: "mg/dL" },
    { title: "Blood Pressure", value: "120/80", unit: "mmHg" },
  ];

  return (
    <div className="flex justify-around p-2">
      {metrics.map((metric, index) => (
        <div key={index} className="border border-black bg-gray-200 shadow-inner rounded-md p-2 w-1/6 text-center">
          <h2 className="font-bold">{metric.title}</h2>
          <p>{metric.value} {metric.unit}</p>
        </div>
      ))}
    </div>
  );
};

export default Statics;
