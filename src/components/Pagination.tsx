import { useDispatch, useSelector } from "react-redux";
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaAngleLeft,
  FaAngleRight,
} from "react-icons/fa";

import { DOTS, usePagination } from "../hooks/usePaginations";
import { RootState } from "../redux/store";
import { setPagination } from "../redux/slices/settings";

export const Pagination = () => {
  const dispatch = useDispatch();
  const {
    pagination: { pageNumber, pageSize, totalPage },
  } = useSelector((state: RootState) => state.settingsSlice);

  const paginationRange = usePagination({
    pageNumber,
    pageSize,
    totalPage: totalPage || 0,
  });
  return (
    <div className="flex flex-col sm:flex-row w-full sm:justify-end items-start sm:items-center mt-2 mb-2 gap-5">
      {!(
        pageNumber === 0 ||
        (paginationRange && paginationRange.length <= 1)
      ) && (
        <div className="flex gap-1">
          <div
            onClick={() => dispatch(setPagination({ pageNumber: 1 }))}
            className="flex w-8 h-8 flex-col justify-center items-center gap-2.5 border p-2.5 rounded-lg border-solid custom-gray-60 bg-white cursor-pointer"
          >
            <FaAngleDoubleLeft size={17} />
          </div>
          <div
            onClick={() => {
              if (pageNumber && pageNumber > 1)
                dispatch(setPagination({ pageNumber: pageNumber - 1 }));
            }}
            className="flex w-8 h-8 flex-col justify-center items-center gap-2.5 border p-2.5 rounded-lg border-solid custom-gray-60 bg-white cursor-pointer"
          >
            <FaAngleLeft size={18} color="#333333" />
          </div>

          {paginationRange?.map((item) => {
            if (item === DOTS) {
              return (
                <div
                  key={`cut-key-${Math.random()}`}
                  className="flex w-8 h-8 flex-col justify-center items-center gap-2.5 border p-2.5 rounded-lg border-solid custom-gray-60 bg-white cursor-pointer"
                >
                  <span className="text-black font-normal">&#8230;</span>
                </div>
              );
            }
            return (
              <div
                key={`key-${item}`}
                onClick={() => {
                  dispatch(setPagination({ pageNumber: item }));
                }}
                className={`flex w-8 h-8 flex-col justify-center items-center gap-2.5 border p-2.5 rounded-lg border-solid custom-gray-60 ${
                  item === pageNumber ? "bg-custom-purple" : "bg-white"
                } cursor-pointer`}
              >
                <span
                  className={`${
                    item === pageNumber ? "text-white" : "text-black"
                  } font-normal`}
                >
                  {item}
                </span>
              </div>
            );
          })}

          <div
            onClick={() => {
              if (totalPage && pageNumber && pageNumber < totalPage)
                dispatch(setPagination({ pageNumber: pageNumber + 1 }));
            }}
            className="flex w-8 h-8 flex-col justify-center items-center gap-2.5 border p-2.5 rounded-lg border-solid custom-gray-60 bg-white cursor-pointer"
          >
            <FaAngleRight size={18} color="#333333" />
          </div>
          <div
            onClick={() => {
              dispatch(setPagination({ pageNumber: totalPage }));
            }}
            className="flex w-8 h-8 flex-col justify-center items-center gap-2.5 border p-2.5 rounded-lg border-solid custom-gray-60 bg-white cursor-pointer"
          >
            <FaAngleDoubleRight size={17} />
          </div>
        </div>
      )}
    </div>
  );
};
