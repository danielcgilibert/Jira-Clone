import { FC, PropsWithChildren, useEffect, useReducer } from 'react'
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
  const addNewEntry = async (description: string) => {
    const { data } = await entriesApi.post<Entry>('/entries', { description })
    dispatch({ type: '[Entry] Add-Entry', payload: data })
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
