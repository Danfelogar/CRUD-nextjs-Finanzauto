export interface AuthState {
  loading: boolean;
  credentials: {
    name?: string;
    email: string;
    photo?: string;
  };
  token?: string;
  isLogin: boolean;
  isRegister: boolean;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  email: string;
  password: string;
  emailConfirm: string;
  passwordConfirm: string;
}
