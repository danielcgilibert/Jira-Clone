import { FC, PropsWithChildren, useReducer } from 'react'
import { UIContext, uiReducer } from './'

export interface UIState {
  sideMenuOpen: boolean
  isAddingEntry: boolean
  isDragging: boolean
  isOpenModal: boolean
}

const UI_INITIAL_STATE: UIState = {
  sideMenuOpen: false,
  isAddingEntry: false,
  isDragging: false,
  isOpenModal: false,
}

export const UIProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

  const openSideMenu = () => dispatch({ type: 'UI - Open Sidebar' })

  const closeSideMenu = () => dispatch({ type: 'UI - Close Sidebar' })

  const setIsAddingEntry = (isAdding: boolean) =>
    dispatch({ type: 'UI - Set isAddingEntry', payload: isAdding })

  const setIsDragging = (isDragging: boolean) =>
    dispatch({ type: 'UI - isDragging', payload: isDragging })

  const setIsOpenModal = (isOpenModal: boolean) =>
    dispatch({ type: 'UI - isOpenModal', payload: isOpenModal })

  return (
    <UIContext.Provider
      value={{
        ...state,
        openSideMenu,
        closeSideMenu,
        setIsAddingEntry,
        setIsDragging,
        setIsOpenModal,
      }}>
      {children}
    </UIContext.Provider>
  )
}
