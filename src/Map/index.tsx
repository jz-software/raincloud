import { useEffect, useRef } from "react";
import './index.css';

interface Props {
    coordinates: [number, number];
}

interface customWindow extends Window {
    mapboxgl?: any;
  }
declare const window: customWindow;

const Map: React.FC<Props> = ({ coordinates }) => {
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
                <p>test</p>
            </div>
        </div>
    )
}

export default Map;
