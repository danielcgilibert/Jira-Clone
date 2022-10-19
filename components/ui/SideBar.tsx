import AllInboxIcon from '@mui/icons-material/AllInbox'
import InboxIcon from '@mui/icons-material/Inbox'
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material'
import { Box } from '@mui/system'
import { FC, useContext } from 'react'
import { UIContext } from '../../context/ui'
const MenuItems: string[] = ['Inbox', 'Starred', 'Send Email', 'Drafts']
export const SideBar: FC = () => {
  const { sideMenuOpen, closeSideMenu } = useContext(UIContext)

  return (
    <Drawer anchor="left" open={sideMenuOpen} onClose={closeSideMenu}>
      <Box sx={{ width: 250 }}>
        <Box sx={{ padding: '5px 10px' }}>
          <Typography variant="h4"> Menú</Typography>
        </Box>
        <List>
          {MenuItems.map((text, index) => (
            <ListItem button key={text}>
              {index % 2 === 0 ? <InboxIcon /> : <AllInboxIcon />}
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />

        <List>
          {MenuItems.map((text, index) => (
            <ListItem button key={text}>
              {index % 2 === 0 ? <InboxIcon /> : <AllInboxIcon />}
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  )
}
