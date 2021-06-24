import './ExtendedBlock.css';

interface Props {
    show: boolean;
    info: any;
    onBackClick: () => void;
}

function formatTimestamp(timestamp: number) {
    return new Date(timestamp * 1000).toTimeString().split(' ')[0].split(':').slice(0, 2).join(':');
}

const ExtendedBlock: React.FC<Props> = ({ show, info, onBackClick }) => {
    return (
        <div className={`ExtendedBlock ${show ? 'show' : 'hide'}`}>
            <i onClick={onBackClick} className="far fa-caret-square-left back-button" />
            <p>
                <i className="fas fa-sun" /> Sunrise: {formatTimestamp(info.sunrise)}
                {" | "}
                <i className="fas fa-moon" /> Sunset: {formatTimestamp(info.sunset)}
            </p>
            <p><i className="fas fa-wind" /> Wind: {info.wind_speed}m/s</p>
        </div>
    )
}

export default ExtendedBlock;