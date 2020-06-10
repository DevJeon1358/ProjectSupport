import Koa from 'koa';
import Router from 'koa-router';
import Body from 'koa-body';
import Http from 'http';
import cors from 'koa-cors';
import api from '../api';
import middlewares from '../middlewares';

class ExpressLoader {
  public static load = async () => {
    const app = new Koa();
    const router = new Router();
    const server = Http.createServer(app.callback());

    const port = process.env.PORT || 5000;

    const errorHandler = new middlewares.ErrorHandlerMiddleware(true);
    const responser = new middlewares.Responser();
    const bodyParser = Body({ multipart: true });

    // Init Middlewares
    app.use(cors());
    app.use(bodyParser);
    app.use(errorHandler.getMiddleware());
    app.use(responser.getMiddleware());

    // API Middlewares
    router.use('/api', api.routes());
    app.use(router.routes());

    // Init server
    server.listen(port, () => {
      console.log(`Server is listening on port, ${port}`);
    });

    return true;
  };
}

export default ExpressLoader;
