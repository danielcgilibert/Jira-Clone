import { createContext } from 'react'
import { Entry } from '../../interfaces'

interface ContextProps {
  entries: Entry[]
  selectedEntry: string
  addNewEntry: (description: string) => void
  updateEntry: (entry: Entry) => void
  selectEntry: (idEntry: string) => void
}

export const EntriesContext = createContext({} as ContextProps)
