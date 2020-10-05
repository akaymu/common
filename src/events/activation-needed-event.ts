import { Subjects } from './subjects';

export interface ActivationNeededEvent {
  subject: Subjects.ActivationNeeded;
  data: {
    id: string;
    username: string;
  };
};