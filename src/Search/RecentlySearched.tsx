import './RecentlySearched.css';

interface Props {
    items: string[];
    onClickEvent: (query: string) => void;
}

const RecentlySearched: React.FC<Props> = ({ items, onClickEvent }) => {
    return (
        <div className="RecentlySearched">
            {items.map(e => (
                <p onClick={() => onClickEvent(e)}>{e}</p>
            ))}
        </div>
    )
}

export default RecentlySearched;