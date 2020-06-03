import { Request, Response } from 'express';
import RequestValidator from '../../../utils/RequestValidator';
import Requests from './requests';
import ResponseBase from '../../../types/ResponseBase';
import Responses from './responses';

class AuthController {
  public static login = async (req: Request, res: Response): Promise<ResponseBase> => {
    try {
      await RequestValidator(Requests.LoginRequest, req.query);
    } catch (error) {
      console.log('1');
      return new Responses.RequestValidationError();
    }

    res.status(200).json({});
    return new Responses.RequestValidationError();
  };

  public static register = async (req: Request, res: Response): Promise<ResponseBase> => {
    try {
      await RequestValidator(Requests.AddUserRequest, req.query);
    } catch (error) {
      return new Responses.RequestValidationError();
    }

    res.status(200).json({});
    return new Responses.RequestValidationError();
  };
}

export default AuthController;
