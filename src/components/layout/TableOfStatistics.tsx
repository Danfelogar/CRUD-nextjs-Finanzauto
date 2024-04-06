import { getFormattedDate } from "@/src/utils";
import { MeasuringRods } from ".";
import { CustomBtn } from "..";

export const TableOfStatistics = () => {
  return (
    <div className="flex flex-col bg-custom-gray-50 rounded-2xl w-full px-3 py-4">
      <h2 className="font-bold text-sm text-custom-dark">Mi Plan - plus</h2>
      <h3 className="text-[0.67rem] mb-5 text-custom-dark italic">{`El uso se renueva el: ${getFormattedDate()}`}</h3>

      <MeasuringRods
        title="Almacenamiento"
        occupiedSpace={23.5}
        percentage={80}
        totalSpace={1}
        unitOccupied="GB"
        unitTotal="TB"
      />

      <MeasuringRods
        title="Banda Mensual"
        occupiedSpace={3.4}
        percentage={57}
        totalSpace={5}
        unitOccupied="TB"
        unitTotal="TB"
      />

      <CustomBtn
        onClick={() => {
          console.log("Administrar Plan");
        }}
        className="mt-3 mb-1 bg-custom-purple w-[7.2rem] rounded-2xl p-1"
      >
        <p className="text-white text-[0.68rem]">Administrar Plan</p>
      </CustomBtn>
    </div>
  );
};
