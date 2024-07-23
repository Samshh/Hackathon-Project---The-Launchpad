export default function PatientHeader() {
    return (
        <div className="flex w-full gap-8">
            <div className="rounded-full size-12 bg-accent"></div>
            <input
            placeholder="Search for doctors..." 
            className="flex-1 h-12 px-6 rounded-lg"></input>
            <div className="grid bg-white border rounded-full size-12 border-accent place-items-center">
                <p className="text-lg font-semibold">H</p>
            </div>
        </div>
    )
}