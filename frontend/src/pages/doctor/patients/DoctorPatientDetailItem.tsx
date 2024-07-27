interface DoctorPatientDetailItemProps {
  label: string;
  value: string;
}

export default function DoctorPatientDetailItem({ label, value } : DoctorPatientDetailItemProps) {
  return (
    <div className="h-fit flex flex-col justify-start items-start">
      <p className="text-sm text-gray-500">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  );
}