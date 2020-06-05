import ActionUtils from '.';

describe('ActionUtils', () => {
  describe('createActions', () => {
    it('returns the expected value', () => {
      const types = {
        FOO: {
          BAR: '',
          BAZ: ActionUtils.standardActions(),
          FIZZ: {
            BUZZ: 'BUZZ',
          },
        },
      };

      const actionTypes = ActionUtils.createActions<typeof types>(types);
      expect(actionTypes).toStrictEqual({
        FOO:
        {
          BAR: 'FOO/BAR',
          BAZ: {
            BEGIN: 'FOO/BAZ/BEGIN',
            PROGRESS: 'FOO/BAZ/PROGRESS',
            SUCCESS: 'FOO/BAZ/SUCCESS',
            FAILURE: 'FOO/BAZ/FAILURE',
            CANCEL: 'FOO/BAZ/CANCEL',
          },
          FIZZ: {
            BUZZ: 'FOO/FIZZ/BUZZ',
          },
        },
      });
    });
  });

  describe('standardActions', () => {
    it('returns the expected value', () => {
      expect(ActionUtils.standardActions()).toStrictEqual({
        BEGIN: 'BEGIN',
        CANCEL: 'CANCEL',
        FAILURE: 'FAILURE',
        PROGRESS: 'PROGRESS',
        SUCCESS: 'SUCCESS',
      });
    });
  });

  describe('keyMirror', () => {
    it('returns the expected value', () => {
      expect(ActionUtils.keyMirror(['FOO', 'BAR', 'FIZZ', 'BUZZ'])).toStrictEqual({
        FOO: 'FOO',
        BAR: 'BAR',
        FIZZ: 'FIZZ',
        BUZZ: 'BUZZ',
      });
    });
  });
});
