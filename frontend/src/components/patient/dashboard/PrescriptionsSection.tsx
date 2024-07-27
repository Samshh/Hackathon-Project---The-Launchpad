import { ChevronRight } from 'lucide-react';

export default function PrescriptionsSection() {
  return (
    <section className="flex flex-col col-span-3 gap-4 p-5 overflow-y-hidden bg-white shadow-md rounded-xl">
      <p className="text-xl font-bold">Prescriptions</p>
      <div className="flex-grow h-1 overflow-y-auto">
        <div className="grid grid-cols-2 gap-x-4 gap-y-4">
          {Array.from({ length: 20 }).map((_, i) => {
            return (
              <div
                key={i}
                className="rounded-lg text-start bg-[#FDF6C0]/90 border border-[#FDF6C0] flex p-3 items-start gap-3 group hover:bg-accent"
              >
                <p className="line-clamp-2 text-ellipsis group-hover:text-white">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, perferendis delectus. Blanditiis
                  temporibus perspiciatis sequi ipsum possimus in eaque porro.
                </p>
                <ChevronRight className="self-end w-28 group-hover:stroke-white" preserveAspectRatio="xMaxYMax" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
