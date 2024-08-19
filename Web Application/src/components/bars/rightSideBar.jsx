import AppointmentHistory from "../cards/appointmentHistory";
import ScansAndReports from "../cards/scansAndReports";

const RightSidebar = () => {
  return (
    <div id="right-side-bar" className="p-4 h-full w-full bg-gray-200 space-y-10 flex flex-col justify-around">
      <ScansAndReports/>
      <AppointmentHistory/>
    </div>
  );
};

export default RightSidebar;
