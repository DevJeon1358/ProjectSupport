import { IsString, Length } from 'class-validator';
import RequestBase from './RequestBase';

class registerRequest extends RequestBase {
  @Length(4, 12)
  public id: String;

  @IsString()
  public pw: String;
}

export default registerRequest;
