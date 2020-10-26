import { UserTypes } from './user-types';
import { AuthActionTypes, ProfileActionTypes } from './action-types';

const userActions: { [key in keyof typeof UserTypes]: string[] } = {
  freetrial: [
    AuthActionTypes.DELETE_SELF,
    AuthActionTypes.UPDATE_SELF,
    AuthActionTypes.SHOW_SELF,
    ProfileActionTypes.DELETE_PROFILE,
    ProfileActionTypes.SHOW_PROFILE,
    ProfileActionTypes.UPDATE_PROFILE,
  ],
  admin: [
    AuthActionTypes.DELETE_SELF,
    AuthActionTypes.UPDATE_SELF,
    AuthActionTypes.SHOW_SELF,
    AuthActionTypes.DELETE_USER,
    AuthActionTypes.SHOW_USER,
    AuthActionTypes.UPDATE_USER,
    AuthActionTypes.CREATE_USER,
    AuthActionTypes.INDEX_USER,
    ProfileActionTypes.DELETE_PROFILE,
    ProfileActionTypes.INDEX_PROFILE,
    ProfileActionTypes.NEW_PROFILE,
    ProfileActionTypes.SHOW_PROFILE,
    ProfileActionTypes.UPDATE_PROFILE,
  ],
  publisher: [
    AuthActionTypes.DELETE_SELF,
    AuthActionTypes.UPDATE_SELF,
    AuthActionTypes.SHOW_SELF,
    AuthActionTypes.NEW_SUBUSER,
    AuthActionTypes.INDEX_SUBUSER,
    AuthActionTypes.DELETE_USER,
    AuthActionTypes.SHOW_USER,
    AuthActionTypes.UPDATE_USER,
    ProfileActionTypes.DELETE_PROFILE,
    ProfileActionTypes.SHOW_PROFILE,
    ProfileActionTypes.UPDATE_PROFILE,

  ],
  employee: [
    AuthActionTypes.UPDATE_SELF,
    AuthActionTypes.SHOW_SELF,
    ProfileActionTypes.DELETE_PROFILE,
    ProfileActionTypes.SHOW_PROFILE,
    ProfileActionTypes.UPDATE_PROFILE,
  ],
  author: [
    AuthActionTypes.DELETE_SELF,
    AuthActionTypes.UPDATE_SELF,
    AuthActionTypes.SHOW_SELF,
    ProfileActionTypes.DELETE_PROFILE,
    ProfileActionTypes.SHOW_PROFILE,
    ProfileActionTypes.UPDATE_PROFILE,

  ],
  enterprise: [
    AuthActionTypes.DELETE_SELF,
    AuthActionTypes.UPDATE_SELF,
    AuthActionTypes.SHOW_SELF,
    AuthActionTypes.NEW_SUBUSER,
    AuthActionTypes.INDEX_SUBUSER,
    AuthActionTypes.DELETE_USER,
    AuthActionTypes.SHOW_USER,
    AuthActionTypes.UPDATE_USER,
    ProfileActionTypes.DELETE_PROFILE,
    ProfileActionTypes.NEW_PROFILE,
    ProfileActionTypes.SHOW_PROFILE,
    ProfileActionTypes.UPDATE_PROFILE,
  ],
  teacher: [
    AuthActionTypes.DELETE_SELF,
    AuthActionTypes.UPDATE_SELF,
    AuthActionTypes.SHOW_SELF,
    AuthActionTypes.NEW_SUBUSER,
    AuthActionTypes.INDEX_SUBUSER,
    AuthActionTypes.DELETE_USER,
    AuthActionTypes.SHOW_USER,
    AuthActionTypes.UPDATE_USER,
    ProfileActionTypes.DELETE_PROFILE,
    ProfileActionTypes.NEW_PROFILE,
    ProfileActionTypes.SHOW_PROFILE,
    ProfileActionTypes.UPDATE_PROFILE,
  ],
  student: [
    AuthActionTypes.UPDATE_SELF,
    AuthActionTypes.SHOW_SELF,
    ProfileActionTypes.SHOW_PROFILE,
    ProfileActionTypes.UPDATE_PROFILE,

  ],
  user: [
    AuthActionTypes.DELETE_SELF,
    AuthActionTypes.UPDATE_SELF,
    AuthActionTypes.SHOW_SELF,
    ProfileActionTypes.DELETE_PROFILE,
    ProfileActionTypes.SHOW_PROFILE,
    ProfileActionTypes.UPDATE_PROFILE,
  ],
};

export {
  UserTypes,
  AuthActionTypes,
  ProfileActionTypes,
  userActions as actions
};