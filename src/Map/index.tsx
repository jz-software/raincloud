import { useEffect, useRef } from "react";
import './index.css';
import DayBlock from './DayBlock';

interface Props {
    coordinates: [number, number];
    data: any;
}

interface customWindow extends Window {
    mapboxgl?: any;
  }
declare const window: customWindow;

const Map: React.FC<Props> = ({ coordinates, data }) => {
    const mapContainer = useRef(null);
    const map = useRef<any>(null);
    const mapboxgl = window.mapboxgl;
    
    useEffect(() => {
        if(map.current) return;
        mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
        const opts: any = {
            container: mapContainer.current,
            style: 'mapbox://styles/jmaxzever/ckq8h2jms14h417qkksbsyipy',
            center: [0, 0],
            boxZoom: true
        }
        map.current = new mapboxgl.Map(opts);
    }, [])
    useEffect(() => {
        map.current?.flyTo({ center: coordinates, zoom: 9 });
    }, [coordinates])
    return (
        <div className="Map">
            <div ref={mapContainer} className="map-container" />
            <div className="side-container">
                {data.map((e: any) => (
                    <>
                    <DayBlock DayData={e} />
                    </>
                ))}
            </div>
        </div>
    )
}

export default Map;
