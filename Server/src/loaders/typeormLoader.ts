import { createConnection, ConnectionOptions } from 'typeorm';
import databaseConfig from '../config/database.json';

const dbConfig = databaseConfig as ConnectionOptions;

class typeORMLoader {
  public static load = async () => {
    createConnection(dbConfig);
    return true;
  };
}

export default typeORMLoader;
