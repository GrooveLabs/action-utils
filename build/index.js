var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function createActionsHelper(actionKey, actions) {
        if (typeof actions === 'string') {
            if (actionKey) {
                return actionKey + "/" + actions;
            }
            return actions;
        }
        return Object.entries(actions).reduce(function (previous, _a) {
            var _b, _c;
            var key = _a[0], value = _a[1];
            if (key === value || value === '')
                return __assign(__assign({}, previous), (_b = {}, _b[key] = createActionsHelper(actionKey, key), _b));
            var newKey = key;
            if (actionKey) {
                newKey = actionKey + "/" + key;
            }
            return __assign(__assign({}, previous), (_c = {}, _c[key] = createActionsHelper(newKey, value), _c));
        }, {});
    }
    function createActions(actions) {
        return createActionsHelper(null, actions);
    }
    exports.createActions = createActions;
    function keyMirror(keys) {
        return keys.reduce(function (previous, key) {
            var _a;
            return (__assign(__assign({}, previous), (_a = {}, _a[key] = key, _a)));
        }, {});
    }
    exports.keyMirror = keyMirror;
    function standardActions() {
        return keyMirror([
            'BEGIN',
            'PROGRESS',
            'SUCCESS',
            'FAILURE',
            'CANCEL',
        ]);
    }
    exports.standardActions = standardActions;
});
//# sourceMappingURL=index.js.map