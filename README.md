# action-utils

A set of helper functions that are meant to help declare redux actions in a object-like way while still allowing for well-named actions.

### `createActions(actions:Object)`
Takes in a plain javascript object and returns back the same object shape, but with every leaf in the tree prefixed with all its parents. For example:
```javascript
createActions({
  FOO: keyMirror(['BAR']),
})
```
will be transformed to:
```javascript
{
  FOO: {
    BAR: 'FOO/BAR',
  }
}
```

This allows for the actions to be nicely namespaced as both javascript objects and uniquely prefixed strings. 

### `keyMirror(keys:Array<String>)`
Takes in a list of strings and returns a plain Javascript object with the values mirroring the keys. For example:
```javascript
keyMirror(['FOO', 'BAR'])
```

will be transformed to:
```javascript
{ FOO: 'FOO', BAR: 'BAR' }
```

### `standardActions()`

This is an opinionated usage of keyMirror that provides some default action names to represent lifecycles (BEGIN, PROGRESS, SUCCESS, FAILURE). This is very useful for any kind of action that involves an API call.


## Usage

```javascript
import { createActions, keyMirror, standardActions } from 'action-utils';

export const actionTypes = createActions({
  PEOPLE: {
    FETCH_PEOPLE: standardActions(),
    ...keyMirror([
      'SELECT_PEOPLE',
      'UNSELECT_PEOPLE',
      'SET_ACTIVE_PERSON_ID',
      'UNSET_ACTIVE_PERSON_ID',
      'MOVE_TO_PAGE',
    ]),
  },
}).PEOPLE;
```

### Usage In Typescript
```typescript

import { createActions, keyMirror, standardActions } from 'action-utils';
const types = {
  PEOPLE: {
    FETCH_PEOPLE: standardActions(),
    SELECT_PEOPLE: 'SELECT_PEOPLE',
    UNSELECT_PEOPLE: 'UNSELECT_PEOPLE',
    SET_ACTIVE_PERSON_ID: 'SET_ACTIVE_PERSON_ID',
    UNSET_ACTIVE_PERSON_ID: 'UNSET_ACTIVE_PERSON_ID',
    MOVE_TO_PAGE: 'MOVE_TO_PAGE',
  },
}

// Pass through the generic type for some nice type auto-completions
export const actionTypes = createActions<typeof types>(types).PEOPLE;
```
