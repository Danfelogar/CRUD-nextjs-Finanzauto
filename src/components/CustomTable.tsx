"use client";
import { useState } from "react";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";

import { HeaderTableGeneric } from "..";
import { WarningNotification } from "./WarningNotification";
import { AppDispatch } from "../redux/store";
import {
  deleteSingleDataUser,
  setIdForUpdate,
  setIsUpdateUserData,
} from "../redux/slices/userData";
import { changeShowDrawer } from "../redux/slices/settings";
import { TbListDetails } from "react-icons/tb";

interface CustomTableProps<T extends { id: number | string }> {
  data: T[];
  headerArr: HeaderTableGeneric[];
}

export const CustomTable = <T extends { id: number | string }>({
  data,
  headerArr,
}: CustomTableProps<T>) => {
  const [selectedRows, setSelectedRows] = useState<(number | string)[]>([]);
  const [itemSelectedForDelete, setItemSelectedForDelete] = useState<
    number | string | null
  >(null);
  const [allSelected, setAllSelected] = useState(false);
  const [isShowModalWarningDelete, setIsShowModalWarningDelete] =
    useState(false);

  const dispatch = useDispatch<AppDispatch>();

  const changeModalWarningDelete = () => {
    setIsShowModalWarningDelete((prev) => !prev);
  };
  const toggleAll = () => {
    const newAllSelected = !allSelected;
    setAllSelected(newAllSelected);

    setSelectedRows(newAllSelected ? data.map((row) => row?.id!) : []);
  };

  const toggleRow = (id: number | string) => {
    setSelectedRows((prev) => {
      if (prev.includes(id)) {
        return prev.filter((rowId) => rowId !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  return (
    <table className="mt-8 min-w-full divide-y divide-custom-gray-60">
      <thead>
        <tr>
          <th className="px-3 py-2.5 text-left text-[0.78rem] font-medium text-custom-dark tracking-wider">
            <input type="checkbox" checked={allSelected} onChange={toggleAll} />
          </th>
          {headerArr.map((header) => (
            <th
              key={header.id}
              className={`px-3 py-2.5 text-center text-[0.98rem] font-medium text-custom-dark tracking-wider ${header.className}`}
            >
              {header.title}
            </th>
          ))}
          <th className="px-3 py-2.5 text-left text-[0.78rem] font-medium text-custom-dark tracking-wider">
            Acciones
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-custom-gray-60">
        {data.map((row, index) => (
          <tr
            key={row?.id || index}
            className={`hover:bg-custom-gray-60  ${
              selectedRows.includes(row?.id) ? "bg-custom-gray-60" : ""
            }`}
          >
            <td className="px-3 py-2.5 text-left whitespace-nowrap">
              <input
                type="checkbox"
                checked={selectedRows.includes(row?.id)}
                onChange={() => toggleRow(row?.id)}
              />
            </td>
            {Object.keys(row)
              .slice(1)
              .map((key) => (
                <td
                  key={key}
                  className="px-3 py-2.5 text-custom-dark text-left text-[0.9rem] font-[400] whitespace-nowrap"
                >
                  {(row as any)[key]}
                </td>
              ))}
            <td className="px-3 py-2.5 text-left whitespace-nowrap">
              <div className="flex w-full justify-evenly">
                <button
                  onClick={() => {
                    dispatch(setIdForUpdate(row?.id));
                    dispatch(setIsUpdateUserData(true));
                    dispatch(changeShowDrawer());
                  }}
                  className="text-custom-purple text-[0.78rem] font-medium"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => {
                    setItemSelectedForDelete(row?.id);
                    changeModalWarningDelete();
                  }}
                  className="text-red-500 text-[0.78rem] font-medium"
                >
                  <FaRegTrashAlt />
                </button>
                <button
                  onClick={() => {
                    console.log("get user by id for found details");
                  }}
                >
                  <TbListDetails />
                </button>
              </div>
            </td>
          </tr>
        ))}
        <WarningNotification
          title={`¿Está seguro de eliminar el usuario con id: ${itemSelectedForDelete}?`}
          body="Esta acción no se puede deshacer. Tendrá que volver a crear el usuario si desea restaurarla en el futuro."
          btnName="Confirmar"
          changeModal={() => {
            setItemSelectedForDelete(null);
            changeModalWarningDelete();
          }}
          isShow={isShowModalWarningDelete}
          btnAction={() => {
            if (itemSelectedForDelete) {
              dispatch(deleteSingleDataUser(itemSelectedForDelete));
            }
            changeModalWarningDelete();
          }}
        />
      </tbody>
    </table>
  );
};
