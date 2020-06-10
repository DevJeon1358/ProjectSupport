import Router from 'koa-router';
import authRouter from './auth';

const v1Router = new Router();
v1Router.use('/auth', authRouter.routes());

export default v1Router;
