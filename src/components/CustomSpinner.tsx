export const CustomSpinner = ({ className }: { className?: string }) => {
  return (
    <div
      className={`rounded-full w-14 h-14 bg-gradient-to-tr from-indigo-500 to-pink-500 animate-spin ${className}`}
    >
      <div className="h-9 w-9 rounded-full bg-gray-200"></div>
    </div>
  );
};
