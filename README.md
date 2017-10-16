# action-utils
helpers for creating well-named redux actions in a declarative way

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
