import { User } from "../models/user.model";

export interface LoginResponseDto {
  status: 'success';
  data: {
    tokens: {
      accessToken: string;
      refreshToken: string;
    };
    user: User;
  };
}
