import { EntriesState } from './EntriesProvider'

type EntriesActionType = { type: '[Entries] - change test' }

export const entriesReducer = (
  state: EntriesState,
  action: EntriesActionType
): EntriesState => {
  switch (action.type) {
    case '[Entries] - change test':
      return {
        ...state,
      }

    default:
      return state
  }
}
