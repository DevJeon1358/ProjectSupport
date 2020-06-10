import { Context } from 'koa';
import utils from '../utils';

class errorHandlerClass {
  private isDebug: Boolean = false;

  constructor(debug?: Boolean) {
    this.isDebug = debug;
  }

  private middleware = async (ctx: Context, next: Function) => {
    try {
      if (this.isDebug === true) {
        utils.colorConsole.gray(`[Request] Got a request in ${ctx.request.path}`);
      }

      next();
    } catch (error) {
      utils.colorConsole.red(`[Error] Response Status with 500 in ${ctx.request.path},\n${error}`);

      ctx.status = 500;
      ctx.body = {
        status: 500,
        message: 'Internal Server Error',
      };
    }
  };

  public getMiddleware = () => this.middleware;
}

export default errorHandlerClass;
