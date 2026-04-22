import { User } from "../models/user.model";

export interface LoadMeResponseDto {
  status: 'success';
  data: {
    user: User;
  };
}
