import { Typography } from '@mui/material'
import type { NextPage } from 'next'
import { Layout } from '../components/layouts'

const HomePage: NextPage = () => {
  return (
    <Layout title="Jira-Clone">
      <Typography variant="h1" color="primary">
        Jira Clone
      </Typography>
    </Layout>
  )
}

export default HomePage
