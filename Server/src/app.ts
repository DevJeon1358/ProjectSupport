import Loaders from './loaders';
import utils from './utils';

Object.keys(Loaders).forEach((e) => {
  if (typeof Loaders[e].load === 'function') {
    utils.colorConsole.gray(`[LOADER] ${e}: Loading`);

    try {
      Loaders[e].load();
      utils.colorConsole.green(`[LOADER] ${e}: Load Success!`);
    } catch (error) {
      utils.colorConsole.red(`[LOADER] ${e}: Load Failed:\n${error}`);
    }
  } else {
    utils.colorConsole.yellow(`[LOADER] ${e}: Load Method not found`);
  }
});
