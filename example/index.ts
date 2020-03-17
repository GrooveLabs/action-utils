import { createActions, standardActions } from "../build";

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
