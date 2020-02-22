import { createActions, standardActions } from "../src";

const types = {
  FOO: {
    BAR: 'BAR',
    BAZ: standardActions(),
  }
};

const actionTypes = createActions<typeof types>(types);

console.log(actionTypes);
