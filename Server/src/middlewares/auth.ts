import { Context } from 'koa';

const middleware = async (ctx: Context, next: Function) => {
  const tokenHeader = ctx.request.headers['x-access-token'];
  if (!tokenHeader) {
    ctx.status = 403;
    ctx.body = {
      status: 403,
      message: 'Authorization Header is required',
    };

    return null;
  }

  await next();
  return null;
};

export default middleware;
