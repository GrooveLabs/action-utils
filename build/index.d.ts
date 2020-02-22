declare module '@groove-labs/action-utils' {
  interface StringMap { [key: string]: string | StringMap }

  export type StandardAction = {
    BEGIN: string;
    PROGRESS: string;
    SUCCESS: string;
    FAILURE: string;
    CANCEL: string;
  }
  export function createActions<T>(actions: StringMap): T;
  export function keyMirror(keys: string[]): StringMap;


  export function standardActions(): StandardAction;
}
