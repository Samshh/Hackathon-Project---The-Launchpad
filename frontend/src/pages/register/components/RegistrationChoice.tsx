export default function RegistrationChoice() {
  return(
    <div className="flex flex-col justify-between px-[3.5rem] h-full">
      <div className="flex justify-between items-center h-[3rem]">
        <p className="text-lg font-semibold">Registration</p>
        <p className="text-lg font-light">Step 1 of 3</p>
      </div>
      <div className="flex flex-col">
        <p className="text-lg ">Creating an account</p>
        <h2 className="font-semibold">What type of account do you want to create?</h2>
        <div className="flex flex-col py-[3rem] gap-[1rem]">
          <div className="w-full h-[12.5rem] border-2 border-gray-100 rounded-[1rem] shadow-sm">
            <button className="flex flex-col justify-center px-[4rem] py-[2rem] h-full">
              <p className="text-2xl font-semibold">Doctor</p>
              <p className="text-xl text-start text-gray-600">Handle schedule and provide diagnosis to patients</p>
            </button>
          </div>
          <div className="w-full h-[12.5rem] border-2 border-gray-100 rounded-[1rem] shadow-sm">
            <button className="flex flex-col justify-center px-[4rem] py-[2rem] h-full">
              <p className="text-2xl font-semibold">Patient</p>
              <p className="text-xl text-start text-gray-600">Find clinics of doctors and schedule appointments</p>
            </button>
          </div>
        </div>
        <div className="flex justify-end pt-[2rem]">
          <button className="w-[9rem] h-[3.375rem] border-[0.063rem] rounded-[0.375rem] border-gray-900 mr-[0.625rem]">
            <p className="text-lg font-medium text-gray-600">Back</p>
          </button>
          <button className="w-[9rem] h-[3.375rem] rounded-[0.375rem] bg-accent">
            <p className="text-lg font-medium text-white">Next</p>
          </button>
        </div>
      </div>
    </div>
  );
}