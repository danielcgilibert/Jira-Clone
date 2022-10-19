import MenuIcon from '@mui/icons-material/Menu'
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import { FC, useContext } from 'react'
import { UIContext } from '../../context/ui'
export const NavBar: FC = () => {
  const { openSideMenu } = useContext(UIContext)
  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton onClick={openSideMenu} size="large" edge="start">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">JiraClone</Typography>
      </Toolbar>
    </AppBar>
  )
}
