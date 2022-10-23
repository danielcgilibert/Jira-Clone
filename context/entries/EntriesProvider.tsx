import { FC, PropsWithChildren, useEffect, useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { entriesApi } from '../../api'
import { Entry } from '../../interfaces'
import { EntriesContext } from './EntriesContext'
import { entriesReducer } from './entriesReducer'

export interface EntriesState {
  entries: Entry[]
}

const ENTRIES_INITIAL_STATE: EntriesState = {
  entries: [],
}

export const EntriesProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE)
  const addNewEntry = (description: string) => {
    const newEntry: Entry = {
      _id: uuidv4(),
      description,
      createdAt: Date.now(),
      status: 'pending',
    }

    dispatch({ type: '[Entry] Add-Entry', payload: newEntry })
  }

  const updateEntry = (entry: Entry) => {
    dispatch({ type: '[Entry] Updated-Entry', payload: entry })
  }

  const refreshEntries = async () => {
    const { data } = await entriesApi.get<Entry[]>('/entries')
    dispatch({ type: '[Entry] Refresh-Data', payload: data })
  }

  useEffect(() => {
    refreshEntries()
  }, [])

  return (
    <EntriesContext.Provider value={{ ...state, addNewEntry, updateEntry }}>
      {children}
    </EntriesContext.Provider>
  )
}
