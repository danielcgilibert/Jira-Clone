import { Box } from '@mui/system'
import Head from 'next/head'
import { FC } from 'react'
import { NavBar, SideBar } from '../ui'
interface Props {
  title?: string
  children?: React.ReactNode
}

export const Layout: FC<Props> = ({ title = 'Jira-clone', children }) => {
  return (
    <Box sx={{ flexFlow: 1 }}>
      <Head>
        <title>{title}</title>
      </Head>

      <NavBar />
      <SideBar />

      <Box sx={{ padding: '10px 20px' }}>{children}</Box>
    </Box>
  )
}
