import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const somethingHappened = actionCreator<{ foo: string }>(
  'SOMETHING_HAPPENED'
);
export const anotherthingHappened = actionCreator<{ foo: string }>(
  'ANOTHER_THING_HAPPENED'
);
