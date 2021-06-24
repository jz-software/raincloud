import { formatTimestamp } from './ExtendedBlock';
import './HourlyBlock.css';

interface Props {
    info: any;
}

const HorlyBlock: React.FC<Props> = ({ info }) => {
    return (
        <div className="HourlyBlock">
            <div>
                <p>{formatTimestamp(info.dt)}</p>
                <i className="fas fa-sun weather-icon" />
                <p><i className="fas fa-tint" /> {info.humidity}%</p>
            </div>
        </div>
    )
}

export default HorlyBlock;