import { memo, } from 'react'
import { Card, CardContent } from '@material-ui/core'
import { useSelector } from 'react-redux'

const AccChart = ({ selectedItem, setSelectedItem }) => {

  const { accelerometerData: { results, total } } = useSelector(state => state.accelerometer)

  return (
    <Card>
      <CardContent>
        {JSON.stringify(selectedItem)}
        <pre>
          {JSON.stringify(results.length)}
        </pre>
      </CardContent>
    </Card>
  )
}

export default memo(AccChart)
