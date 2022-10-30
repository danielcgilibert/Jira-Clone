import { createContext } from 'react'

interface ContextProps {
  sideMenuOpen: boolean
  isAddingEntry: boolean
  isDragging: boolean
  isOpenModal: boolean
  openSideMenu: () => void
  closeSideMenu: () => void
  setIsAddingEntry: (isAdding: boolean) => void
  setIsDragging: (isAdding: boolean) => void
  setIsOpenModal: (isAdding: boolean) => void
}

export const UIContext = createContext({} as ContextProps)
