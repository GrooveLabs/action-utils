interface StringMap { [key: string]: string | StringMap }

function createActionsHelper(actionKey: string, actions: string | StringMap): string | StringMap {
  if (typeof actions === 'string') {
    if (actionKey) {
      return `${actionKey}/${actions}`;
    }

    return actions;
  }
  return Object.entries(actions).reduce((previous, [key, value]) => {
    if (key === value) return { ...previous, [key]: createActionsHelper(actionKey, value) };
    let newKey = key;
    if (actionKey) {
      newKey = `${actionKey}/${key}`;
    }
    return { ...previous, [key]: createActionsHelper(newKey, value) };
  }, {} as StringMap);
}

export function createActions<T>(actions: StringMap): T {
  return createActionsHelper(null, actions) as unknown as T;
}

export function keyMirror(keys: string[]): StringMap {
  return keys.reduce((previous: StringMap, key: string) => ({ ...previous, [key]: key }), {});
}

export type StandardAction = {
  BEGIN: string;
  PROGRESS: string;
  SUCCESS: string;
  FAILURE: string;
  CANCEL: string;
}

export function standardActions(): StandardAction {
  return keyMirror([
    'BEGIN',
    'PROGRESS',
    'SUCCESS',
    'FAILURE',
    'CANCEL',
  ]) as StandardAction;
}
