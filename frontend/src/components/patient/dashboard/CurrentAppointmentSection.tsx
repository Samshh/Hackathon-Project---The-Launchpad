
export default function CurrentAppointmentSection() {
  return (
    <section
      className={`bg-white col-span-3 shadow-md rounded-xl p-5 flex flex-col gap-4`}
    >
      <p className="text-xl font-bold">Current Appointment</p>
      <div className="flex flex-col flex-grow overflow-y-auto">
        {/* <div>
          <p className="text-xl font-medium">Dr. Hernan Rey Jugar, M.D</p>
          <p className="text-gray-500">Doctor</p>
        </div>
        <div>
          <p className="text-xl font-medium">17:45</p>
          <p className="text-gray-500">Your estimated time of arrival</p>
        </div>
        <div>
          <p className="text-xl font-medium"> </p>
          <p className="text-gray-500">ETA</p>
        </div> */}
        {/* <div className="self-start">
          <p className="text-xl font-medium">Dr. Hernan Rey Jugar, M.D</p>
          <p className="text-gray-500">Doctor</p>
        </div> */}
      </div>

    </section>
  );
}
