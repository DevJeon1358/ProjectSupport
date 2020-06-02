import { Request, Response } from 'express';
import Requests from './requests';

class AuthController {
  public static login = async (req: Request, res: Response) => {
    try {
      Requests.LoginRequest.validate(req.query);
    } catch (error) {
      res.status(400).json({
        status: 400,
        mesasge: '요청 검증 오류',
      });

      return null;
    }
  };

  public static register = async (req: Request, res: Response) => {

  };
}

export default AuthController;
