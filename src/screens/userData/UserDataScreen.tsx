"use client";
import { CiCirclePlus } from "react-icons/ci";

import {
  Breadcrumb,
  CustomBtn,
  CustomTable,
  SearchBar,
  headerUserData,
  optionsBreadcrumb,
} from "@/src";
import { UserTable, useUserData } from "@/src/hooks/useUserData";
import { Pagination } from "@/src/components/Pagination";
import { WarningNotification } from "@/src/components/WarningNotification";
import { Drawer } from "@/src/components/Drawer";
import {
  getDataUsers,
  resetInitialValueUserDataForCreate,
  resetInitialValueUserDataForUpdate,
  setIdForUpdate,
  setIsUpdateUserData,
} from "@/src/redux/slices/userData";
import { changeShowDrawer } from "@/src/redux/slices/settings";
import { FormProvider } from "react-hook-form";
import { CreateUserForm } from "@/src/components/forms/CreateUserForm";
import { UpdateUserForm } from "@/src/components/forms/UpdateUserForm";
import { useEffect } from "react";

export const UserDataScreen = () => {
  const {
    //state
    pageIsCharged,
    tableUserDataCol,
    showDrawer,
    isUpdate,
    pageNumber,
    pageSize,
    //methods
    formMethodsCreate,
    formMethodsUpdate,
    dispatch,
    //functions
  } = useUserData();

  useEffect(() => {
    dispatch(getDataUsers({ pageNumber, pageSize }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber, pageSize]);

  return (
    <main className="flex flex-col px-6 py-3 w-full h-full overflow-hidden">
      {pageIsCharged && (
        <>
          <div className="flex w-full justify-between mb-8">
            <div className="flex items-center">
              <Breadcrumb arrNavigation={optionsBreadcrumb} />
            </div>
            <div className="flex gap-3">
              <CustomBtn
                onClick={() => {
                  dispatch(setIsUpdateUserData(false));
                  dispatch(setIdForUpdate(null));
                  dispatch(resetInitialValueUserDataForCreate());
                  dispatch(changeShowDrawer());
                }}
                leftIcon={<CiCirclePlus color="#FFFF" />}
                className="flex items-center gap-2 bg-custom-purple px-3.5 py-2 rounded-lg "
              >
                <p className="text-white text-sm font-light">Crear usuario</p>
              </CustomBtn>
            </div>
          </div>
          <SearchBar />
          <CustomTable<UserTable>
            data={tableUserDataCol}
            headerArr={headerUserData}
          />
          <div className="w-full h-2" />
          <Pagination />
          <Drawer
            title={isUpdate ? "Editar Usuario" : "Crear Usuario"}
            isShowDrawer={showDrawer}
            changeDrawer={() => {
              dispatch(changeShowDrawer());
              dispatch(setIsUpdateUserData(false));
              dispatch(setIdForUpdate(null));
              dispatch(resetInitialValueUserDataForUpdate());
              dispatch(resetInitialValueUserDataForCreate());
            }}
            saveTitle={isUpdate ? "Editar Usuario" : "Nueva Usuario"}
            saveAction={() => {}}
            validValues={true}
            iconSave={!isUpdate && <CiCirclePlus color="#FFFF" />}
          >
            <div className="w-full flex flex-col py-9 px-4 md:px-16 gap-2.5">
              {isUpdate ? (
                <FormProvider {...formMethodsUpdate}>
                  <UpdateUserForm />
                </FormProvider>
              ) : (
                <FormProvider {...formMethodsCreate}>
                  <CreateUserForm />
                </FormProvider>
              )}
            </div>
          </Drawer>
        </>
      )}
    </main>
  );
};
