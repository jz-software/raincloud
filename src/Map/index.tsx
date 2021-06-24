import { useEffect, useRef } from "react";
import './index.css';
import DayBlock from './DayBlock';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

interface Props {
    coordinates: [number, number];
    data: any;
    isLoading: boolean;
}

interface customWindow extends Window {
    mapboxgl?: any;
  }
declare const window: customWindow;

const Map: React.FC<Props> = ({ coordinates, data, isLoading }) => {
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
                <div className={`${isLoading ? 'hide' : 'show'}`}>
                    {data.map((e: any) => (
                        <>
                        <DayBlock DayData={e} />
                        </>
                    ))}
                </div>
                <div className={`loading-div ${isLoading ? 'show' : 'hide'}`}>
                    <SkeletonTheme color="#cdd1c4" highlightColor="#ffffff">
                    <p style={{ fontSize: 30, lineHeight: 1.5 }}>
                        <Skeleton count={5} />
                    </p>
                    </SkeletonTheme>
                </div>
            </div>
        </div>
    )
}

export default Map;
