"use client";
import { FaArrowLeft } from "react-icons/fa6";
import { useRouter } from "next/navigation";

import {
  CustomTable,
  TableVideoDetailsGeneric,
  headerVideoDetails,
  tableDataGenericVideoData,
} from "@/src";

export const VideoBySlug = ({ slug }: { slug: string }) => {
  const router = useRouter();
  return (
    <main className="flex flex-col px-1 py-1.5 w-full h-full overflow-hidden">
      <div className="flex w-full items-center gap-2">
        <div
          onClick={() => router.back()}
          className="hover:cursor-pointer flex justify-center items-center rounded-md bg-custom-purple p-1"
        >
          <FaArrowLeft size={30} color="#FFFF" />
        </div>
        <p className="text-2xl text-custom-dark">
          Home / <span className="font-bold">{slug}</span>
        </p>
      </div>
      <div className="flex px-6">
        <CustomTable<TableVideoDetailsGeneric>
          data={tableDataGenericVideoData}
          headerArr={headerVideoDetails}
        />
      </div>
    </main>
  );
};
