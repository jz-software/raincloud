import './DayBlock.css'

interface Props {
    DayData: any;
}

const DayBlock: React.FC<Props> = ({ DayData }) => {
    return (
        <div className="DayBlock">
            <div className="left">
                <i className="far fa-sun"></i>
            </div>
            <div className="right">
                <h3>{DayData.dayOfTheWeek}</h3>
                <p>{DayData.temp.day.toFixed(0)}°C</p>
            </div>
        </div>
    )
}

export default DayBlock;