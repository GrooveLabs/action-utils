interface StringMap { [key: string]: string | StringMap }

function createActionsHelper(actionKey: string, actions: string | StringMap): string | StringMap {
  if (typeof actions === 'string') {
    if (actionKey) {
      return `${actionKey}/${actions}`;
    }

    return actions;
  }
  return Object.entries(actions).reduce((previous: StringMap, entry: [string, string | StringMap]) => {
    const [key, value] = entry;
    if (key === value) return { ...previous, [key]: createActionsHelper(actionKey, value) };
    let newKey = key;
    if (actionKey) {
      newKey = `${actionKey}/${key}`;
    }
    return { ...previous, [key]: createActionsHelper(newKey, value) };
  }, {});
}

export function createActions(actions: StringMap): string | StringMap {
  return createActionsHelper(null, actions);
}

export function keyMirror(keys: string[]): StringMap {
  return keys.reduce((previous: StringMap, key: string) => ({ ...previous, [key]: key }), {});
}

export function standardActions(): StringMap {
  return keyMirror([
    'BEGIN',
    'PROGRESS',
    'SUCCESS',
    'FAILURE',
    'CANCEL',
  ]);
}
