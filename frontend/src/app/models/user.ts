export interface UserForRegister {
    userName: string;
    email?: string;
    password: string;

  }

  export interface UserForLogin {
    userName: string;
    email: string;
    password: string;
    token: string;
  }


  export interface User {
    userName: string;
    email: string;

  }
