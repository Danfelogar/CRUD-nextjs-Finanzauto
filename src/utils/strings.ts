export enum TypeSlices {
  Root = "root",
  Auth = "auth",
  Settings = "settings",
}

export enum TypeActions {
  //auth
  AuthSignIn = "auth/signIn",
  AuthRegister = "auth/register",
  AuthSignOut = "auth/signOut",
  AuthSignInGoogle = "auth/signInGoogle",
  //userData
  UserDataGet = "userData/get",
  UserDataGetById = "userData/getById",
  UserDataCreate = "userData/create",
  UserDataUpdate = "userData/update",
  UserDataDelete = "userData/delete",
}

export enum TypeMSMErrorGeneric {
  GenericError = "Ocurrió un error inesperado",
}

export enum TypeEnvironment {
  Production = "Production",
  Development = "Development",
}

export enum RoutesString {
  Home = "/",
  UserData = "/userData",
  Login = "/login",
  //Register = "/register",
  NotFound = "/not-found",
}
