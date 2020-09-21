import { Subjects } from './subjects';

export interface UserDeletedEvent {
  subject: Subjects.UserDeleted;
  data: {
    id: string;
    email: string;
    version: number;
  };
};