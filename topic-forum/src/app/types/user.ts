export interface User {
  email: string;
  username: string;
  password: string;
  rePassword: string;
  _id: string;
}

export interface UserForAuth {
  username: string;
  email: string;
  phoneNumber: string;
  password: string;
  id: string;
}

export interface ProfileDetails {
  username: string;
  email: string;
  // phoneNumber: string;
}
