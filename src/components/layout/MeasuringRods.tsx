export const MeasuringRods = ({
  title,
  occupiedSpace,
  unitOccupied,
  totalSpace,
  unitTotal,
  percentage,
}: {
  title: string;
  occupiedSpace: number;
  unitOccupied: string;
  totalSpace: number;
  unitTotal: string;
  percentage: number;
}) => {
  return (
    <div className="flex flex-col w-full mb-2.5">
      <div className="flex w-full items-center justify-between mb-1">
        <h4 className="text-[0.8rem] text-custom-dark">{title}</h4>
        <h5 className="text-[0.6rem] text-custom-dark font-light">
          {`${occupiedSpace} ${unitOccupied} / ${totalSpace} ${unitTotal}`}
        </h5>
      </div>
      <div className="w-full h-1.5 rounded-3xl bg-custom-purple-light">
        <div
          className="h-full rounded-3xl bg-custom-purple"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};
