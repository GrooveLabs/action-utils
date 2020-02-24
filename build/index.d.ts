interface StringMap {
    [key: string]: string | StringMap;
}
export declare function createActions<T>(actions: StringMap): T;
export declare function keyMirror(keys: string[]): StringMap;
export declare type StandardAction = {
    BEGIN: string;
    PROGRESS: string;
    SUCCESS: string;
    FAILURE: string;
    CANCEL: string;
};
export declare function standardActions(): StandardAction;
export {};
