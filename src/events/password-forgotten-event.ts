import { Subjects } from './subjects';

export interface PasswordForgottenEvent {
  subject: Subjects.PasswordForgotten;
  data: {
    id: string;
    username: string;
  };
};