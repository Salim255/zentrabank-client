import { User } from "../models/user.model";

export interface RegisterResponseDto {
  status: 'success';
  data: {
    tokens: {
      accessToken: string;
      refreshToken: string;
    };
    user: User;
  };
}
