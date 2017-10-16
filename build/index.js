var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function createActionsHelper(actionKey, actions) {
  if (typeof actions === 'string') {
    if (actionKey) {
      return `${actionKey}/${actions}`;
    }

    return actions;
  }
  return Object.entries(actions).reduce((previous, entry) => {
    const [key, value] = entry;
    if (key === value) return _extends({}, previous, { [key]: createActionsHelper(actionKey, value) });
    let newKey = key;
    if (actionKey) {
      newKey = `${actionKey}/${key}`;
    }
    return _extends({}, previous, { [key]: createActionsHelper(newKey, value) });
  }, {});
}

export function createActions(actions) {
  return createActionsHelper(null, actions);
}

export function keyMirror(keys) {
  return keys.reduce((previous, key) => _extends({}, previous, { [key]: key }), {});
}

export function standardActions() {
  return keyMirror(['BEGIN', 'PROGRESS', 'SUCCESS', 'FAILURE']);
}