function createActionsHelper(actionKey, actions) {
  if (typeof actions === 'string') {
    if (actionKey) {
      return `${actionKey}/${actions}`;
    }

    return actions;
  }
  return Object.entries(actions).reduce((previous, entry) => {
    const [key, value] = entry;
    if (key === value) return { ...previous, [key]: createActionsHelper(actionKey, value) };
    let newKey = key;
    if (actionKey) {
      newKey = `${actionKey}/${key}`;
    }
    return { ...previous, [key]: createActionsHelper(newKey, value) };
  }, {});
}

export function createActions(actions) {
  return createActionsHelper(null, actions);
}

export function keyMirror(keys) {
  return keys.reduce((previous, key) => ({ ...previous, [key]: key }), {});
}

export function standardActions() {
  return keyMirror([
    'BEGIN',
    'PROGRESS',
    'SUCCESS',
    'FAILURE',
    'CANCEL',
  ]);
}
