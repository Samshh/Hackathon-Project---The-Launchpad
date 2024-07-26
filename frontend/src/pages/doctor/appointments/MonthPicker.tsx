import useAppointmentsStore from "./store";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function MonthPicker() {
  const getActiveMonthYearText = useAppointmentsStore(state => state.getActiveMonthYearText);
  
  return (
    <div className="flex flex-row justify-start items-center gap-4">
      <p className="text-xl font-semibold">{getActiveMonthYearText()}</p>

      <div className="flex flex-row justify-start items-center gap-2">
        <ChevronLeft size={16} />
        <ChevronRight size={16} />
      </div>
    </div>
  )
}