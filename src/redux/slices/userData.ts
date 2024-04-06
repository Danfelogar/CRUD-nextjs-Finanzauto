import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";

import {
  SingleUserData,
  UserDataState,
  UserFormCreate,
  UserFormUpdate,
} from "@/src/types/userDataState";
import { serviceBasePrivate } from "@/src/services/userData";
import { TypeActions, TypeMSMErrorGeneric } from "@/src/utils/strings";
import { changeShowDrawer, setPagination } from "./settings";

export const initialValues_UserData_For_Create = {
  firstName: "",
  lastName: "",
  email: "",
};

export const initialValues_UserData_For_Update = {
  id: "",
  title: "",
  firstName: "",
  lastName: "",
  gender: "",
  email: "",
  dateOfBirth: "",
  registerDate: "",
  phone: "",
  picture: "",
  location: null,
};

const initialState: UserDataState = {
  loading: false,
  isUpdate: false,
  idForUpdate: null,
  initialValuesForCreate: initialValues_UserData_For_Create,
  initialValuesForUpdate: initialValues_UserData_For_Update,
  arrUserData: [],
};

export const userDataSlice = createSlice({
  name: "options",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setArrUserData: (state, action) => {
      state.arrUserData = action.payload;
    },
    setIsUpdateUserData: (state, action) => {
      state.isUpdate = action.payload;
    },
    setInitialValueUserDataForCreate: (state, action) => {
      state.initialValuesForCreate = action.payload.initialValues;
    },
    resetInitialValueUserDataForCreate: (state) => {
      state.initialValuesForCreate = initialValues_UserData_For_Create;
    },
    setInitialValueUserDataForUpdate: (state, action) => {
      state.initialValuesForUpdate = action.payload;
    },
    resetInitialValueUserDataForUpdate: (state) => {
      state.initialValuesForUpdate = initialValues_UserData_For_Update;
    },
    setIdForUpdate: (state, action) => {
      state.idForUpdate = action.payload;
    },
  },
});

export const {
  setLoading,
  setArrUserData,
  resetInitialValueUserDataForCreate,
  setInitialValueUserDataForCreate,
  resetInitialValueUserDataForUpdate,
  setInitialValueUserDataForUpdate,
  setIsUpdateUserData,
  setIdForUpdate,
} = userDataSlice.actions;

//extensions

export const getUserDataById = createAsyncThunk(
  TypeActions.UserDataGetById,
  async (id: number | string, { dispatch }) => {
    try {
      dispatch(setLoading(true));
      const response: ResGeneric<UserFormUpdate> = await serviceBasePrivate.get(
        `/user/${id}`
      );

      if (response.data) {
        dispatch(setInitialValueUserDataForUpdate(response.data));
      }
    } catch (error) {
      const err = error as { message: string };
      if (err.message) {
        toast.error(err.message);
      } else {
        toast.error(TypeMSMErrorGeneric.GenericError);
      }
    } finally {
      dispatch(setLoading(false));
    }
  }
);

interface PropsGets {
  pageNumber?: string | number;
  pageSize?: string | number;
}

export const getDataUsers = createAsyncThunk(
  TypeActions.UserDataGet,
  async ({ pageNumber, pageSize }: PropsGets, { dispatch }) => {
    try {
      const response: ResGeneric<{
        data: SingleUserData[];
        total: number;
        page: number;
        limit: number;
      }> = await serviceBasePrivate.get("/user", {
        params: {
          ...(pageNumber && { page: pageNumber }),
          ...(pageSize && { limit: pageSize }),
        },
      });
      const {
        data: { data, limit, page, total },
      } = response;

      if (data) {
        dispatch(setArrUserData(data));
        dispatch(
          setPagination({
            totalPage: Math.floor(total / limit),
            ...(pageNumber && { pageNumber: Number(pageNumber) ?? 1 }),
            ...(!pageSize ? { pageSize: 10 } : { pageSize: limit }),
            ...(!pageNumber && { pageNumber: 1 }),
          })
        );
      }
    } catch (error) {
      const err = error as { message: string };
      if (err.message) {
        toast.error(err.message);
      } else {
        toast.error(TypeMSMErrorGeneric.GenericError);
      }
    } finally {
      dispatch(setLoading(false));
    }
  }
);

export const postDataUser = createAsyncThunk(
  TypeActions.UserDataCreate,
  async (props: UserFormCreate, { dispatch }) => {
    const { email, firstName, lastName } = props;
    try {
      dispatch(setLoading(true));
      const response: ResGeneric<UserFormUpdate> =
        await serviceBasePrivate.post(`/user/create`, {
          email,
          firstName,
          lastName,
        });

      if (response.data.id) {
        toast.success(
          `se ha creado el usuario con id:${response.data.id} exitosamente`
        );
        dispatch(changeShowDrawer());
        dispatch(setIsUpdateUserData(false));
        dispatch(resetInitialValueUserDataForCreate());
        dispatch(resetInitialValueUserDataForUpdate());
        dispatch(getDataUsers({ pageSize: 10 }));
      }
    } catch (error) {
      const err = error as { message: string };
      if (err.message) {
        toast.error(err.message);
      } else {
        toast.error(TypeMSMErrorGeneric.GenericError);
      }
    } finally {
      dispatch(setLoading(false));
    }
  }
);

export const putDataUser = createAsyncThunk(
  "options/putDataUser",
  async (props: UserFormUpdate, { dispatch }) => {
    const {
      dateOfBirth,
      email,
      firstName,
      gender,
      lastName,
      picture,
      phone,
      registerDate,
      title,
      location,
    } = props;
    try {
      dispatch(setLoading(true));
      const response: ResGeneric<UserFormUpdate> = await serviceBasePrivate.put(
        `/user/${props.id}`,
        {
          dateOfBirth,
          email,
          firstName,
          gender,
          lastName,
          picture,
          phone,
          registerDate,
          title,
          location,
        }
      );

      if (response.data.id) {
        toast.success(
          `se ha actualizado el usuario con id:${response.data.id} exitosamente`
        );
        dispatch(changeShowDrawer());
        dispatch(setIsUpdateUserData(false));
        dispatch(resetInitialValueUserDataForCreate());
        dispatch(resetInitialValueUserDataForUpdate());
        dispatch(getDataUsers({ pageSize: 10 }));
      }
    } catch (error) {
      const err = error as { message: string };
      if (err.message) {
        toast.error(err.message);
      } else {
        toast.error(TypeMSMErrorGeneric.GenericError);
      }
    } finally {
      dispatch(setLoading(false));
    }
  }
);

export const deleteSingleDataUser = createAsyncThunk(
  TypeActions.UserDataDelete,
  async (id: string | number, { dispatch }) => {
    try {
      dispatch(setLoading(true));
      const response: ResGeneric<{ id: string }> =
        await serviceBasePrivate.delete(`/user/${id}`);
      const idRes = response?.data?.id;
      if (idRes) {
        toast.success(
          `se ha eliminado el usuario con id:${idRes} exitosamente`
        );
        dispatch(getDataUsers({}));
      }
    } catch (error) {
      const err = error as { message: string };
      if (err.message) {
        toast.error(err.message);
      } else {
        toast.error(TypeMSMErrorGeneric.GenericError);
      }
    } finally {
      dispatch(setLoading(false));
    }
  }
);

export default userDataSlice.reducer;
