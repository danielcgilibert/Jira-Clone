import CircleIcon from '@mui/icons-material/Circle'
import { Card, CardContent, CardHeader, Grid } from '@mui/material'
import { FC } from 'react'
import { EntryStatus } from '../../interfaces'
import { EntryList } from './EntryList'
interface Props {
  status: EntryStatus
  iconColor: string
}
export const CategoryEntry: FC<Props> = ({ status, iconColor = '#47BFE1' }) => {
  return (
    <Grid item xs={12} sm={4}>
      <Card
        sx={{
          height: 'calc(100vh - 100px)',
          background: 'none',
          boxShadow: 'none',
        }}>
        <CardHeader
          avatar={<CircleIcon htmlColor={iconColor} />}
          title={status.toUpperCase()}
          titleTypographyProps={{ fontSize: '1.5rem' }}
        />
        <CardContent>
          <EntryList status={status} />
        </CardContent>
      </Card>
    </Grid>
  )
}
