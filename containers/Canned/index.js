
import { memo } from 'react'
import { Grid } from '@material-ui/core'

import StatsCard from 'parts/StatsCard'
import CreateCannedAlert from './CreateCannedAlert'
import CannedList from './CannedList'

const Canned = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} lg={8}>
        <CreateCannedAlert />
      </Grid>
      <Grid item xs={12} lg={4}>
        <StatsCard />
      </Grid>
      <Grid item xs={12}>
        <CannedList />
      </Grid>
    </Grid>
  )
}

export default memo(Canned)