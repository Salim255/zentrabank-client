import { User } from "../models/user.model";

export interface LoadMeDto {
  status: 'success';
  data: {
    user: User;
  };
}
