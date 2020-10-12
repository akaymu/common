import { Subjects } from './subjects';

export interface UserCreatedEvent {
  subject: Subjects.UserCreated;
  data: {
    id: string;
    username: string;
    isActivated: boolean;
    userType: string;
    superUser: string;
    subUsers: string[];
    version: number;
  };
};