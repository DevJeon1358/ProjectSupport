import ResponseBase from '../../../../types/ResponseBase';

class RequestValidationError extends ResponseBase {
  constructor() {
    super(400, '검증 오류');
  }
}

export default RequestValidationError;
