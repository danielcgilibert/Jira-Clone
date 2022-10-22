import { createContext } from 'react'

interface ContextProps {
  sideMenuOpen: boolean
  isAddingEntry: boolean
  isDragging: boolean
  openSideMenu: () => void
  closeSideMenu: () => void
  setIsAddingEntry: (isAdding: boolean) => void
  setIsDragging: (isAdding: boolean) => void
}

export const UIContext = createContext({} as ContextProps)
