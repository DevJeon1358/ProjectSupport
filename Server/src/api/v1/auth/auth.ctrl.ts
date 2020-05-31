import { Request, Response } from 'express';
import { ValidationError, validate } from 'class-validator';
import Requests from './requests';


export const login = async (req: Request, res: Response) => {
  const loginRequest = new Requests.LoginRequest();
  loginRequest.wrap(req.body);

  const errors: ValidationError[] = await validate(loginRequest);
};

export const register = async (req: Request, res: Response) => {

};

