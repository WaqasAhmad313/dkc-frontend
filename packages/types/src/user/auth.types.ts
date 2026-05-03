export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}

export interface AuthSession {
  user: import('./user.types').User;
  tokens: AuthTokens;
}
