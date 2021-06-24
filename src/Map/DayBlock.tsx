import './DayBlock.css'

interface Props {
    DayData: any;
    onClickEvent: () => void;
}

const DayBlock: React.FC<Props> = ({ DayData, onClickEvent }) => {
    return (
        <div className="DayBlock">
            <div className="left" onClick={onClickEvent}>
                <i className="far fa-sun"></i>
            </div>
            <div className="right">
                <h3 onClick={onClickEvent}>{DayData.dayOfTheWeek}</h3>
                <p>{DayData.temp.day.toFixed(0)}°C</p>
            </div>
        </div>
    )
}

export default DayBlock;