import { FC, PropsWithChildren, useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Entry } from '../../interfaces'
import { EntriesContext } from './EntriesContext'
import { entriesReducer } from './entriesReducer'

export interface EntriesState {
  entries: Entry[]
}

const ENTRIES_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description: 'asdasdasdasd adadasdas dasdasdasd asdasdasda dasdwqewqdas',
      status: 'pending',
      createdAt: Date.now(),
    },
    {
      _id: uuidv4(),
      description: 'asdasdas 123123 qweqweasd askdqpow kqwekpo12op',
      status: 'in-progress',
      createdAt: Date.now() - 50010,
    },

    {
      _id: uuidv4(),
      description: 'a adadasdas d a qw',
      status: 'finished',
      createdAt: Date.now() - 10000000,
    },
  ],
}

export const EntriesProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE)
  return (
    <EntriesContext.Provider value={{ ...state }}>
      {children}
    </EntriesContext.Provider>
  )
}
