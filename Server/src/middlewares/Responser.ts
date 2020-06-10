import { Context } from 'koa';
import ResponseBase from '../types/ResponseBase';

class Responser {
  private middleware = async (ctx: Context, next: Function) => {
    const result: ResponseBase = await next();
    ctx.status = result.status;
    ctx.body = {
      status: result.status,
      message: result.message,
    };
  };

  public getMiddleware = () => this.middleware;
}

export default Responser;
