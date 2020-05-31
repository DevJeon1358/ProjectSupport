import { IsString, Length, IsInt } from 'class-validator';
import RequestBase from './RequestBase';

class registerRequest extends RequestBase {
  @Length(4, 12)
  public id: String;

  @IsString()
  public pw: String;

  @IsInt()
  public targetSupportDesk: Number;
}

export default registerRequest;
