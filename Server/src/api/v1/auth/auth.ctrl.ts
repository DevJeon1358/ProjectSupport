import { Request, Response } from 'express';
import Requests from './requests';

export const login = async (req: Request, res: Response) => {
  const loginRequest = new Requests.LoginRequest();
  loginRequest.wrap(req.body);

  const errors = await loginRequest.validate();
  if (errors.length > 0) {
    res.status(400).json({
      status: 400,
      mesasge: '요청 검증 오류',
      errors,
    });

    return null;
  }
};

export const register = async (req: Request, res: Response) => {

};
