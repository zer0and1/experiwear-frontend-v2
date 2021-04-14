import MagicAccAlert from 'parts/Card/MagicAccAlert'
import { memo, } from 'react'
import { Card, CardContent } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { Line } from 'react-chartjs-2'
import range from 'utils/helpers/range'

const hackNumbers = (value) => value < 10 ? value : (value * 10 / 65526) // toDo: remove once android/ios clients are fixed

const AccChart = ({ selectedItem }) => {

  console.log(selectedItem)
  const { accelerometerData: { results, total } } = useSelector(state => state.accelerometer)

  const accFrame = results[0]?.frames[0]

  let data = {}
  if (accFrame) {
    const accFrameData = accFrame.data
    data = {
      labels: range(0, 33 - 1, 50),
      datasets: [{
        label: 'x axis',
        data: accFrameData.map(i => hackNumbers(i[0])),
        fill: false,
        borderColor: 'rgb(188,19,19)',
        tension: 0.1
      }, {
        label: 'y axis',
        data: accFrameData.map(i => hackNumbers(i[1])),
        fill: false,
        borderColor: 'rgb(87,192,75)',
        tension: 0.1
      }, {
        label: 'z axis',
        data: accFrameData.map(i => hackNumbers(i[2])),
        fill: false,
        borderColor: 'rgb(9,88,224)',
        tension: 0.1
      },
      ]
    }
  }

  console.log(`total acc chars: ${total}`)
  return (
    <Card>
      <CardContent>
        {selectedItem ?
          <>
            <MagicAccAlert
              item={selectedItem}
            />
            <Line data={data}/>
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
