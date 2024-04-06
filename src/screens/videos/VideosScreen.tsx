import { GoFileDirectory } from "react-icons/go";
import { AiOutlinePlayCircle } from "react-icons/ai";

import {
  Breadcrumb,
  CustomBtn,
  CustomTable,
  SearchBar,
  TableVideosGeneric,
  headerVideosFiles,
  optionsBreadcrumb,
  tableDataGenericVideos,
} from "@/src";

export const VideosScreen = () => {
  return (
    <main className="flex flex-col px-6 py-3 w-full h-full overflow-hidden">
      <div className="flex w-full justify-between mb-8">
        <div className="flex items-center">
          <Breadcrumb arrNavigation={optionsBreadcrumb} />
        </div>
        <div className="flex gap-3">
          <CustomBtn
            onClick={() => {
              console.log("Nueva carpeta");
            }}
            leftIcon={<GoFileDirectory />}
            className="flex items-center gap-2 bg-custom-gray-60 px-3.5 py-2 rounded-lg "
          >
            <p className="text-custom-dark text-sm font-light">Nueva carpeta</p>
          </CustomBtn>

          <CustomBtn
            onClick={() => {
              console.log("Nueva carpeta");
            }}
            leftIcon={<AiOutlinePlayCircle color="#FFFF" />}
            className="flex items-center gap-2 bg-custom-purple px-3.5 py-2 rounded-lg "
          >
            <p className="text-white text-sm font-light">Nueva carpeta</p>
          </CustomBtn>
        </div>
      </div>
      <SearchBar />
      <CustomTable<TableVideosGeneric>
        data={tableDataGenericVideos}
        headerArr={headerVideosFiles}
      />
    </main>
  );
};
