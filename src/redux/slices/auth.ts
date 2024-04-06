import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";

import {
  AuthState,
  LoginCredentials,
  RegisterCredentials,
} from "../../types/auth";
import {
  TypeActions,
  TypeMSMErrorGeneric,
  TypeSlices,
} from "../../utils/strings";

import { authGeneric, googleProvider } from "../../services/firebase";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

import { JWT_SECRET_KEY } from "@/src/utils/enviroments";
import { createJwtToken } from "@/src/utils/tokenGenerator";

const INITIAL_CREDENTIALS = {
  name: "",
  email: "",
  photo: "",
};

const initialState: AuthState = {
  loading: false,
  credentials: INITIAL_CREDENTIALS,
  token: "",
  isLogin: false,
  isRegister: false,
};

export const authSlice = createSlice({
  name: TypeSlices.Auth,
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setCredentials: (
      state,
      action: PayloadAction<AuthState["credentials"]>
    ) => {
      state.credentials = action.payload;
      state.isLogin = true;
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setLogout: (state) => {
      state.credentials = INITIAL_CREDENTIALS;
      state.isLogin = false;
      state.isRegister = false;
      state.token = "";
    },
    setIsRegister: (state, action: PayloadAction<boolean>) => {
      state.isRegister = action.payload;
    },
  },
});

export const {
  setLoading,
  setCredentials,
  setLogout,
  setIsRegister,
  setToken,
} = authSlice.actions;

export const signIn = createAsyncThunk(
  TypeActions.AuthSignIn,
  async (credentials: LoginCredentials, { dispatch }) => {
    try {
      dispatch(setLoading(true));
      const { email, password } = credentials;
      const userCredential = await signInWithEmailAndPassword(
        authGeneric,
        email,
        password
      );

      const authCredentials = {
        email: userCredential.user.email as string,
        name: userCredential.user.displayName as string,
        photo: userCredential.user.photoURL as string,
      };

      const token = createJwtToken(authCredentials, JWT_SECRET_KEY as string);
      dispatch(setToken(token));
      dispatch(setCredentials(authCredentials));
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

export const signUp = createAsyncThunk(
  TypeActions.AuthRegister,
  async (credentials: RegisterCredentials, { dispatch }) => {
    try {
      dispatch(setLoading(true));
      const { email, password } = credentials;
      const userCredential = await createUserWithEmailAndPassword(
        authGeneric,
        email,
        password
      );

      const authCredentials = {
        email: userCredential.user.email as string,
        name: userCredential.user.displayName as string,
        photo: userCredential.user.photoURL as string,
      };
      const token = createJwtToken(authCredentials, JWT_SECRET_KEY as string);
      dispatch(setToken(token));
      dispatch(setCredentials(authCredentials));
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

export const signWithGoogle = createAsyncThunk(
  TypeActions.AuthSignInGoogle,
  async (_, { dispatch }) => {
    try {
      dispatch(setLoading(true));
      const userCredential = await signInWithPopup(authGeneric, googleProvider);
      const authCredentials = {
        email: userCredential.user.email as string,
        name: userCredential.user.displayName as string,
        photo: userCredential.user.photoURL as string,
      };
      const token = createJwtToken(authCredentials, JWT_SECRET_KEY as string);
      dispatch(setToken(token));
      dispatch(setCredentials(authCredentials));
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

export const signOut = createAsyncThunk(
  TypeActions.AuthSignOut,
  async (_, { dispatch }) => {
    try {
      dispatch(setLoading(true));
      dispatch(setLogout());
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

export default authSlice.reducer;
