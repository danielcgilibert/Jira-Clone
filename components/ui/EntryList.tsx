import { List } from '@mui/material'
import { DragEvent, FC, useContext, useMemo } from 'react'
import { EntriesContext } from '../../context/entries'
import { UIContext } from '../../context/ui'
import { EntryStatus } from '../../interfaces'
import { EntryCard } from './EntryCard'
import styles from './EntryList.module.css'
interface Props {
  status: EntryStatus
}

export const EntryList: FC<Props> = ({ status }) => {
  const { entries, updateEntry } = useContext(EntriesContext)
  const { isDragging, setIsDragging } = useContext(UIContext)

  const entriesByStatus = useMemo(
    () => entries.filter(entry => entry.status === status),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [entries]
  )
  const onDropEntry = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    const id = event.dataTransfer.getData('text')
    const entry = entries.find(e => e._id === id)!
    entry.status = status
    updateEntry(entry)
    setIsDragging(false)
  }
  const allowOnDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault()
  }

  return (
    <div
      onDrop={onDropEntry}
      onDragOver={allowOnDrop}
      className={isDragging ? styles.dragging : ''}>
      <List
        sx={{
          opacity: isDragging ? 0.2 : 1,
          transition: 'all 0.3s',
          height: 'calc(100vh - 250px)',
          overflow: 'scroll',
          backgroundColor: 'transparent',
          padding: '1px 5px',
        }}>
        {entriesByStatus.map(entry => (
          <EntryCard key={entry._id} entry={entry} />
        ))}
      </List>
    </div>
  )
}
