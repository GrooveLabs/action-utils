import { createActions, standardActions } from "../src";

const types = {
  FOO: {
    BAR: '',
    BAZ: standardActions(),
    FIZZ: {
      BUZZ: 'BUZZ',
    },
  },
};

const actionTypes = createActions<typeof types>(types);

console.log(actionTypes);
