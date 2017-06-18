import * as _commands from './commands';
import * as _tasks from './tasks';

export const description = 'Commands to manage MongoDB';
export let commands = _commands;
export let tasks = _tasks;
export const hooks = {
  'post.default.setup'(api) {
    const config = api.getConfig();
    if (config.mongo) {
      return api.runTask('mongo.setup').then(() => api.runTask('mongo.start'));
    }
  }
};
