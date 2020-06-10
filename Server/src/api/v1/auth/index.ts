import Router from 'koa-router';
import authCtrl from './auth.ctrl';

const authRouter = new Router();
authRouter.get('/', authCtrl.login);

export default authRouter;
