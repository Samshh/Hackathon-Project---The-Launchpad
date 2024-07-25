import { useMemo, useState } from "react";

export default function AppointmentTimeBlockGrid() {
  const [isHovering, setIsHovering] = useState(false);
  const [offsetTop, setOffsetTop] = useState(-1);
  const hoveredHour = useMemo(() => Math.floor(offsetTop / 160), [offsetTop]);
  const hoveredMinutes = useMemo(() => Math.floor(offsetTop % 160 / 160 * 60), [offsetTop]);

  return (
    <div className="flex-grow overflow-y-auto">
      <div 
        className="relative min-h-full flex flex-col justify-start items-stretch"
        onMouseEnter={() => setIsHovering(true)}
        onMouseMove={(e) => setOffsetTop(e.clientY - e.currentTarget.getBoundingClientRect().top)}
        onMouseLeave={() => {
          setIsHovering(false);
          setOffsetTop(-1);
        }}
      >
        {[...Array(24)].map((_, hourIndex) => (
          <div 
            className="relative h-40 flex flex-row justify-start items-stretch border-gray-200"
            key={`hour-${hourIndex}`}
          >
            <div className="relative w-20 flex flex-col justify-start items-end border-r border-gray-200 p-2">
              <p className="text-xs font-semibold text-gray-400">{hourIndex.toString().padStart(2, "0")}:00</p>
            </div>

            {[...Array(7)].map((_, weekIndex) => (
              <div key={weekIndex} className="flex-grow flex justify-center items-center border-b border-r border-gray-200">
              </div>
            ))}
          </div>    
        ))}

        {isHovering && (
          <div 
            className="w-full absolute left-20 flex flex-row justify-end items-center"
            style={{
              top: offsetTop,
            }}
          >
            <span className="absolute top-0 right-full text-xs text-white bg-accent rounded-full px-2 py-1 -translate-y-1/2">
              {hoveredHour.toString().padStart(2, "0")}:{hoveredMinutes.toString().padStart(2, "0")}
            </span>
            <hr className="w-full border-dashed border-accent border-t"/>
          </div>
        )}
      </div>
    </div>
  )
}