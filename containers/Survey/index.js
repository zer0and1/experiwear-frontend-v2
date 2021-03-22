
import { memo } from 'react'
import { Grid } from '@material-ui/core'

import StatsCard from 'parts/StatsCard'
import CreateSurveyAlert from './CreateSurveyAlert'
import SurveyList from './SurveyList'

const Survey = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} lg={8}>
        <CreateSurveyAlert />
      </Grid>
      <Grid item xs={12} lg={4}>
        <StatsCard />
      </Grid>
      <Grid item xs={12}>
        <SurveyList />
      </Grid>
    </Grid>
  )
}

export default memo(Survey)