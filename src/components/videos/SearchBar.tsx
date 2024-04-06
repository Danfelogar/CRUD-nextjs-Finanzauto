import { GrSearch } from "react-icons/gr";

export const SearchBar = () => {
  return (
    <div className="p-2 py-1 h-[2.2rem] w-2/5 gap-2 flex border-solid border border-custom-gray-60 rounded-lg items-center">
      <GrSearch color="#b2b2b2" />
      <div className="w-[1px] h-full bg-custom-gray-70" />
      <input
        className="w-full text-sm bg-transparent text-custom-dark placeholder-custom-gray-70 focus:outline-none focus:ring-0"
        type="text"
        placeholder="Buscar Video"
      />
    </div>
  );
};
