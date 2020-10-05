import { Subjects } from './subjects';

export interface UserUpdatedEvent {
  subject: Subjects.UserUpdated;
  data: {
    id: string;
    username: string;
    isActivated: boolean;
    userType: string;
    superUser?: string;
    subUsers?: string[];
    version: number;
  };
};