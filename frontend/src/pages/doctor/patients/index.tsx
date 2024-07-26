import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Outlet, useParams } from "react-router-dom";

export default function DoctorPatientsPage() {
  const { patientId } = useParams();

  return (
    <main className="h-full min-h-[480px] flex-grow flex flex-col justify-start items-stretch gap-4 pt-4 overflow-y-hidden">
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

      <Outlet />
    </main>
  )
}