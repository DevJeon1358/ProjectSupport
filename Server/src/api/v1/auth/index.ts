import { Router } from 'express';
import authCtrl from './auth.ctrl';

const authRouter = Router();
authRouter.get('/', authCtrl.login);

export default authRouter;
