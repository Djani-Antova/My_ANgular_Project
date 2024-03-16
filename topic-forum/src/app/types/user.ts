export interface User {
    email: string;
    username: string;
    password: string;
    rePassword: string;
    _id: string;
}

export interface UserForAuth {
    firstName: string;
    email: string;
    phoneNumber: string;
    password: string;
    id: string;
  }
