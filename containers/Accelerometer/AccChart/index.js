import { makeStyles } from '@material-ui/core/styles'
import MagicAccAlert from 'parts/Card/MagicAccAlert'
import { memo, useState, } from 'react'
import { Card, CardContent } from '@material-ui/core'
import { Pagination } from '@material-ui/lab'
import { useSelector } from 'react-redux'
import { Line } from 'react-chartjs-2'
import range from 'utils/helpers/range'

const useStyles = makeStyles(() => ({
  paginationContainer: {
    display: 'flex',
    justifyContent: 'center'
  }
}))

const hackNumbers = (value) => value < 10 ? value : (value * 10 / 65526) // toDo: remove once android/ios clients are fixed

const AccChart = ({ selectedItem }) => {
  const classes = useStyles()
  const [page, setPage] = useState(1)

  const { accelerometerData: { results, total } } = useSelector(state => state.accelerometer)

  const result = results[page - 1]

  if (!result && page !== 1) {
    setPage(1)
  }

  // const nFrames = result?.frames.length
  const accData = result?.frames?.map(i => i.data).flat()

  let data = {}
  if (accData) {
    data = {
      labels: range(0, accData.length - 1, 50),
      datasets: [{
        label: 'x',
        data: accData.map(i => hackNumbers(i[0])),
        fill: false,
        borderColor: 'rgb(188,19,19)',
        tension: 0.1
      }, {
        label: 'y',
        data: accData.map(i => hackNumbers(i[1])),
        fill: false,
        borderColor: 'rgb(87,192,75)',
        tension: 0.1
      }, {
        label: 'z',
        data: accData.map(i => hackNumbers(i[2])),
        fill: false,
        borderColor: 'rgb(9,88,224)',
        tension: 0.1
      },
      ]
    }
  }

  const handleChange = (event, value) => {
    setPage(value)
  }

  return (
    <Card>
      <CardContent>
        {selectedItem ?
          <>
            <MagicAccAlert
              item={selectedItem}
            />
            <Line data={data}/>
            <div className={classes.paginationContainer}>
              <Pagination count={total} page={page} onChange={handleChange} variant="outlined" color="secondary"/>
            </div>
          </> :
          <>
            Please select alert first
          </>
        }
      </CardContent>
    </Card>
  )
}

export default memo(AccChart)
