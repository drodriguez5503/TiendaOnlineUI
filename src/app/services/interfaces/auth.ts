export interface UserInterface {
  username: string;
  password: string;
  address: string;
  roleName: "ADMIN"|"CLIENT"|"SELLER";
  firstName: string;
  lastName: string;
}

export type LoginInterface = Pick<UserInterface,"username" | "password">
export type UserInfo = Omit<UserInterface,"password"> & {createdAt : Date}
export type PasswordChange = Pick<UserInterface,"password" | "username"> & {newPassword: string};
