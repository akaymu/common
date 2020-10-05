import { UserTypes } from './user-types';
import { AuthActionTypes } from './action-types';

const userActions: { [key in keyof typeof UserTypes]: string[] } = {
  freetrial: [
    AuthActionTypes.DELETE_SELF,
    AuthActionTypes.UPDATE_SELF,
    AuthActionTypes.SHOW_SELF
  ],
  admin: [
    AuthActionTypes.DELETE_SELF,
    AuthActionTypes.UPDATE_SELF,
    AuthActionTypes.SHOW_SELF,
    AuthActionTypes.DELETE_USER,
    AuthActionTypes.SHOW_USER,
    AuthActionTypes.UPDATE_USER,
    AuthActionTypes.CREATE_USER,
    AuthActionTypes.INDEX_USER
  ],
  publisher: [
    AuthActionTypes.DELETE_SELF,
    AuthActionTypes.UPDATE_SELF,
    AuthActionTypes.SHOW_SELF,
    AuthActionTypes.NEW_SUBUSER,
    AuthActionTypes.INDEX_SUBUSER,
    AuthActionTypes.DELETE_USER,
    AuthActionTypes.SHOW_USER,
    AuthActionTypes.UPDATE_USER
  ],
  employee: [
    AuthActionTypes.DELETE_SELF,
    AuthActionTypes.UPDATE_SELF,
    AuthActionTypes.SHOW_SELF
  ],
  author: [
    AuthActionTypes.DELETE_SELF,
    AuthActionTypes.UPDATE_SELF,
    AuthActionTypes.SHOW_SELF
  ],
  enterprise: [
    AuthActionTypes.DELETE_SELF,
    AuthActionTypes.UPDATE_SELF,
    AuthActionTypes.SHOW_SELF,
    AuthActionTypes.NEW_SUBUSER,
    AuthActionTypes.INDEX_SUBUSER,
    AuthActionTypes.DELETE_USER,
    AuthActionTypes.SHOW_USER,
    AuthActionTypes.UPDATE_USER
  ],
  teacher: [
    AuthActionTypes.DELETE_SELF,
    AuthActionTypes.UPDATE_SELF,
    AuthActionTypes.SHOW_SELF,
    AuthActionTypes.NEW_SUBUSER,
    AuthActionTypes.INDEX_SUBUSER,
    AuthActionTypes.DELETE_USER,
    AuthActionTypes.SHOW_USER,
    AuthActionTypes.UPDATE_USER
  ],
  student: [
    AuthActionTypes.DELETE_SELF,
    AuthActionTypes.UPDATE_SELF,
    AuthActionTypes.SHOW_SELF
  ],
  user: [
    AuthActionTypes.DELETE_SELF,
    AuthActionTypes.UPDATE_SELF,
    AuthActionTypes.SHOW_SELF
  ],
};

export { UserTypes, AuthActionTypes, userActions as actions };