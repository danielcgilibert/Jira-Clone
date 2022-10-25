import { Grid } from '@mui/material'
import type { NextPage } from 'next'
import { Layout } from '../components/layouts'
import { CategoryEntry } from '../components/ui/CategoryEntry'
const HomePage: NextPage = () => {
  return (
    <Layout title="Home - Jira">
      <Grid container spacing={2}>
        <CategoryEntry status="pending" iconColor={'#47BFE1'} />
        <CategoryEntry status="in-progress" iconColor={'#8471F4'} />
        <CategoryEntry status="finished" iconColor={'#66E2B1'} />
      </Grid>
    </Layout>
  )
}

export default HomePage
