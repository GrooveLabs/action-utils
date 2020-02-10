import { createActions } from "../src";

const actions = createActions({
  FOO: {
    BAR: {
      BAZ: 'BAZ',
    },
  },
});

console.log(actions);
