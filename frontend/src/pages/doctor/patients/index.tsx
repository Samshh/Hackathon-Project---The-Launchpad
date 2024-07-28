import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";

export default function DoctorPatientsPage() {
  const { patientId } = useParams();
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();

  const onSearchFormSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();
    navigate(`/doctor/patients${searchText ? `?name=${searchText}` : ''}`);
  };

  return (
    <main className="h-full min-h-[480px] flex-grow flex flex-col justify-start items-stretch gap-4 pt-4 overflow-y-hidden">
      <div className="flex flex-row justify-between items-center gap-4 pr-1">
        <div className="flex flex-col justify-start items-start">
          <h5>Patients</h5>

          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink to="/doctor/patients">Patient List</BreadcrumbLink>
              </BreadcrumbItem>
              {patientId && (
                <>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Patient Details</BreadcrumbPage>
                  </BreadcrumbItem>
                </>
              )}
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <form onSubmit={onSearchFormSubmit}>
          <Input
            type="text"
            className="w-80"
            placeholder="Search patients..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          <input type="submit" className="hidden" />
        </form>
      </div>

      <Outlet />
    </main>
  )
}