export interface SingleUserData {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  picture: string;
}

export interface UserFormCreate {
  firstName: string;
  lastName: string;
  email: string;
}

export interface UserFormUpdate {
  id?: string;
  title?: string;
  firstName?: string;
  lastName?: string;
  gender?: string;
  email?: string;
  dateOfBirth?: string;
  registerDate?: string;
  phone?: string;
  picture?: string;
  location?: object | null;
}

export interface UserDataState {
  loading: boolean;
  idForUpdate: string | number | null;
  isUpdate: boolean;
  initialValuesForCreate: UserFormCreate;
  initialValuesForUpdate: UserFormUpdate;
  arrUserData: SingleUserData[];
}
