'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.createActions = createActions;
exports.keyMirror = keyMirror;
exports.standardActions = standardActions;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

function createActionsHelper(actionKey, actions) {
  if (typeof actions === 'string') {
    if (actionKey) {
      return actionKey + '/' + actions;
    }

    return actions;
  }
  return Object.entries(actions).reduce(function (previous, entry) {
    var _entry = _slicedToArray(entry, 2),
        key = _entry[0],
        value = _entry[1];

    if (key === value) return _extends({}, previous, _defineProperty({}, key, createActionsHelper(actionKey, value)));
    var newKey = key;
    if (actionKey) {
      newKey = actionKey + '/' + key;
    }
    return _extends({}, previous, _defineProperty({}, key, createActionsHelper(newKey, value)));
  }, {});
}

function createActions(actions) {
  return createActionsHelper(null, actions);
}

function keyMirror(keys) {
  return keys.reduce(function (previous, key) {
    return _extends({}, previous, _defineProperty({}, key, key));
  }, {});
}

function standardActions() {
  return keyMirror(['BEGIN', 'PROGRESS', 'SUCCESS', 'FAILURE', 'CANCEL']);
}
