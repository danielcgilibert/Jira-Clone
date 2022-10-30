import { UIState } from './'

type UIActionType =
  | { type: 'UI - Open Sidebar' }
  | { type: 'UI - Close Sidebar' }
  | { type: 'UI - Set isAddingEntry'; payload: boolean }
  | { type: 'UI - isDragging'; payload: boolean }
  | { type: 'UI - isOpenModal'; payload: boolean }

export const uiReducer = (state: UIState, action: UIActionType): UIState => {
  switch (action.type) {
    case 'UI - Open Sidebar':
      return {
        ...state,
        sideMenuOpen: true,
      }

    case 'UI - Close Sidebar':
      return {
        ...state,
        sideMenuOpen: false,
      }

    case 'UI - Set isAddingEntry':
      return {
        ...state,
        isAddingEntry: action.payload,
      }

    case 'UI - isDragging':
      return {
        ...state,
        isDragging: action.payload,
      }

    case 'UI - isOpenModal':
      return {
        ...state,
        isOpenModal: action.payload,
      }

    default:
      return state
  }
}
