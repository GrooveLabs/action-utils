interface StringMap {
    [key: string]: string | StringMap;
}
declare function createActions<T>(actions: StringMap): T;
declare function keyMirror(keys: string[]): StringMap;
declare type StandardAction = {
    BEGIN: string;
    PROGRESS: string;
    SUCCESS: string;
    FAILURE: string;
    CANCEL: string;
};
declare function standardActions(): StandardAction;
declare const _default: {
    createActions: typeof createActions;
    keyMirror: typeof keyMirror;
    standardActions: typeof standardActions;
};
export = _default;
