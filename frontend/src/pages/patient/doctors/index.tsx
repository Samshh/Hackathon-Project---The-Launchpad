import { doctorsMockData } from './doctorsMockData';
import { useNavigate } from 'react-router-dom';

export default function PatientDoctorsPage() {
  const navigate = useNavigate();

  return (
    //<p className="text-3xl font-bold">Make appointment</p>
    <div className="flex flex-col flex-1 gap-8 py-3">
      <p className="pl-6 text-3xl font-bold">Doctors</p>
      <div className="flex flex-col flex-1 px-6 py-3 rounded-lg shadow-md">
        <div className="flex-grow h-1 overflow-y-auto">
          <div className="grid grid-cols-5 gap-y-4 gap-x-4">
            {doctorsMockData.map((doctor) => {
              return (
                <button
                  key={doctor.id}
                  onClick={() => {
                    navigate(`/patient/doctors/${doctor.id}`);
                  }}
                  className="flex flex-col p-3 border border-gray-300 rounded-lg hover:border-accent"
                >
                  <p className="text-lg font-semibold">
                    Dr. {doctor.firstName} {doctor.lastName}
                  </p>
                  <p className="font-semibold text-gray-500">{doctor.specialization}</p>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
