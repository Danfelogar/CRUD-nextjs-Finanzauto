import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Resolver, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "../redux/store";
import { RoutesString } from "../utils/strings";
import {
  getUserDataById,
  postDataUser,
  putDataUser,
} from "../redux/slices/userData";
import { validateUserDataUpdate } from "../utils/validationsYup/validateUserDataUpdate";
import { UserFormCreate, UserFormUpdate } from "../types/userDataState";
import { validateUserDataCreate } from "../utils/validationsYup/validateUserDataCreate";
import { convertPrefixesToSpanish } from "../utils/parsingTitle";

export interface UserTable {
  id: string;
  fullName: string;
  picture: JSX.Element;
  selected: boolean;
}

export const useUserData = () => {
  const [pageIsCharged, setPageIsCharged] = useState(false);
  const [tableUserDataCol, setTableUserDataCol] = useState<UserTable[]>([]);
  const [isShowModalWarningDelete, setIsShowModalWarningDelete] =
    useState(false);
  const router = useRouter();

  const dispatch = useDispatch<AppDispatch>();
  const { isLogin } = useSelector((state: RootState) => state.auth);
  const {
    pagination: { pageNumber, pageSize },
    showDrawer,
  } = useSelector((state: RootState) => state.settingsSlice);
  const {
    arrUserData,
    isUpdate,
    idForUpdate,
    initialValuesForUpdate,
    loading,
  } = useSelector((state: RootState) => state.userDataSlice);

  useEffect(() => {
    if (!isLogin) {
      router.push(RoutesString.Login);
    } else {
      setPageIsCharged(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogin]);

  const transformDataArrUserData = () => {
    if (arrUserData.length > 0) {
      setTableUserDataCol(
        arrUserData.map((user) => ({
          selected: false,
          id: user.id,
          fullName: convertPrefixesToSpanish(
            `${user.title} ${user.firstName} ${user.lastName}`
          ),
          picture: (
            <img
              className="rounded-full w-6"
              src={user.picture}
              alt={user.lastName}
            />
          ),
        }))
      );
    }
  };

  useEffect(() => {
    transformDataArrUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [arrUserData]);

  useEffect(() => {
    if (idForUpdate && isUpdate) {
      dispatch(getUserDataById(idForUpdate));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idForUpdate, isUpdate]);

  const changeModalWarningDelete = () => {
    setIsShowModalWarningDelete((prev) => !prev);
  };

  const formMethodsCreate = useForm<UserFormCreate>({
    resolver: yupResolver(validateUserDataCreate),
  });

  const formMethodsUpdate = useForm<UserFormUpdate>({
    resolver: yupResolver(validateUserDataUpdate) as Resolver<
      UserFormUpdate,
      any
    >,
  });

  useEffect(() => {
    if (idForUpdate && isUpdate && initialValuesForUpdate.id) {
      formMethodsCreate.reset();
      formMethodsUpdate.reset({ ...initialValuesForUpdate });
    }

    return () => {
      formMethodsCreate.reset();
      formMethodsUpdate.reset();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idForUpdate, isUpdate, initialValuesForUpdate]);

  const createOrUpdateUser = (data: UserFormCreate | UserFormUpdate) => {
    if (!isUpdate) {
      dispatch(postDataUser(data as UserFormCreate));
    } else {
      dispatch(putDataUser(data as UserFormUpdate));
    }
  };

  return {
    //state
    pageIsCharged,
    tableUserDataCol,
    showDrawer,
    isShowModalWarningDelete,
    isUpdate,
    loading,
    pageNumber,
    pageSize,
    //methods
    formMethodsCreate,
    formMethodsUpdate,
    dispatch,
    //functions
    changeModalWarningDelete,
    createOrUpdateUser,
  };
};
