import { Context } from 'koa';
import RequestValidator from '../../../utils/RequestValidator';
import Requests from './requests';
import ResponseBase from '../../../types/ResponseBase';
import Responses from './responses';

class AuthController {
  public static login = async (ctx: Context): Promise<ResponseBase> => {
    try {
      await RequestValidator(Requests.LoginRequest, ctx.request.query);
    } catch (error) {
      return new Responses.RequestValidationError();
    }

    ctx.status = 200;
    ctx.body = {
      status: 200,
    };

    return new Responses.RequestValidationError();
  };

  public static register = async (ctx: Context): Promise<ResponseBase> => {
    try {
      await RequestValidator(Requests.AddUserRequest, ctx.request.query);
    } catch (error) {
      return new Responses.RequestValidationError();
    }

    ctx.status = 200;
    ctx.body = {
      status: 200,
    };

    return new Responses.RequestValidationError();
  };
}

export default AuthController;
