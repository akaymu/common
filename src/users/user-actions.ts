import { UserTypes } from './user-types';
import { AuthActionTypes } from './action-types';

const userActions: { [key in keyof typeof UserTypes]: string[] } = {
  freetrial: [
    AuthActionTypes.ChangePassword
  ],
  admin: [
    AuthActionTypes.AdminNewUser,
    AuthActionTypes.AdminIndexUser,
    AuthActionTypes.AdminShowUser,
    AuthActionTypes.AdminIndexSuperUser,
    AuthActionTypes.AdminIndexSubUser,
    AuthActionTypes.AdminUpdateUser,
    AuthActionTypes.AdminDeleteUser,
    AuthActionTypes.DeleteUser,
    AuthActionTypes.ChangePassword
  ],
  publisher: [
    AuthActionTypes.DeleteUser,
    AuthActionTypes.NewSubUser,
    AuthActionTypes.IndexSubUser,
    AuthActionTypes.DeleteSubUser,
    AuthActionTypes.ShowSubUser,
    AuthActionTypes.UpdateSubUser,
    AuthActionTypes.ChangePassword
  ],
  employee: [
    AuthActionTypes.DeleteUser,
    AuthActionTypes.ChangePassword
  ],
  author: [
    AuthActionTypes.DeleteUser,
    AuthActionTypes.ChangePassword
  ],
  enterprise: [
    AuthActionTypes.DeleteUser,
    AuthActionTypes.NewSubUser,
    AuthActionTypes.IndexSubUser,
    AuthActionTypes.DeleteSubUser,
    AuthActionTypes.ShowSubUser,
    AuthActionTypes.UpdateSubUser,
    AuthActionTypes.ChangePassword,
    AuthActionTypes.IndexSubSuperUser
  ],
  teacher: [
    AuthActionTypes.DeleteUser,
    AuthActionTypes.NewSubUser,
    AuthActionTypes.IndexSubUser,
    AuthActionTypes.DeleteSubUser,
    AuthActionTypes.ShowSubUser,
    AuthActionTypes.UpdateSubUser,
    AuthActionTypes.ChangePassword
  ],
  student: [
    AuthActionTypes.ChangePassword
  ],
  user: [
    AuthActionTypes.DeleteUser,
    AuthActionTypes.ChangePassword
  ],
};

export { UserTypes, AuthActionTypes, userActions as actions };