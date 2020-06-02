import { ValidationError, validate } from 'class-validator';

class RequestDataWrapper {
  public wrap(body: Object):void {
    Object.keys(body).forEach((e) => {
      if (!this[e]) {
        throw new Error(`Could not find key: ${e}`);
      }

      this[e] = body[e];
    });
  }

  public validate(): Promise<ValidationError[]> {
    return validate(this);
  }
}

class Requests {
  public static async validate(validationObject: Object): Promise<boolean | Error> {
    const targetModel = new RequestDataWrapper();
    targetModel.wrap(validationObject);
    const validationResult = await targetModel.validate();
    if (validationResult.length > 0) {
      throw new Error(`Validation Failed: ${validationResult}`);
    }

    return true;
  }
}

export default Requests;
