import { Request, Response } from 'express';
import ResponseBase from '../types/ResponseBase';
import utils from '../utils';

class errorHandlerClass {
  private isDebug: Boolean = false;

  constructor(debug?: Boolean) {
    this.isDebug = debug;
  }

  private middleware = async (req: Request, res: Response, next: Function) => {
    try {
      if (this.isDebug === true) {
        utils.colorConsole.gray(`[Request] Got a request in ${req.path}`);
      }

      await next();
      console.log(2);
    } catch (error) {
      utils.colorConsole.red(`[Error] Response Status with 500 in ${req.path},\n${error}`);

      res.status(500).json({
        status: 500,
        message: '서버 오류',
      });
    }
  };

  public getMiddleware = () => this.middleware;
}

export default errorHandlerClass;
