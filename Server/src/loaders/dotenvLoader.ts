import DotEnv from 'dotenv';

class DotEnvLoader {
  public static load = () => {
    DotEnv.config();
    return true;
  };
}

export default DotEnvLoader;
