export interface JwtPayload {
  id: number;
  username: string;
  iat: number;
  exp: number;
}

declare module "express" {
  interface Request {
    user?: JwtPayload;
  }
}
