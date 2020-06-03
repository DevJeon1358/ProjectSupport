import RequestBase from '../types/RequestBase';

const validator = async <T extends typeof RequestBase> (
  TargetModel: T,
  TargetObject: Object,
): Promise<boolean | Error> => {
  const targetModel = new TargetModel();
  targetModel.wrap(TargetObject);

  const validationResult = await targetModel.validate();
  if (validationResult.length > 0) {
    throw new Error(`Request Model Validation Failded: \n${validationResult.join('\n')}`);
  }

  return true;
};

export default validator;
