import { ValidationError, validate } from 'class-validator';

class Requests {
  public wrap(body: Object):void {
    Object.keys(body).forEach((e) => {
      this[e] = body[e];
    });
  }

  public validate(): Promise<ValidationError[]> {
    return validate(this);
  }
}

export default Requests;
