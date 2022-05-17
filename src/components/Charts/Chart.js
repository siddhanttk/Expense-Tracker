import ChartBar from './ChartBar'
import './Chart.css'
function Chart(props) {

    const dataPointValues = props.datapoint.map(datapoint =>(datapoint.value))
    const totalMax = Math.max(...dataPointValues);
    return (
        <div className='chart'>
            {props.datapoint.map(datapoint => (
                <ChartBar
                    key={datapoint.label}
                    value={datapoint.value}
                    maxValue={totalMax}
                    label={datapoint.label}
                />
            ))}
        </div>
    )
}

export default Chart;