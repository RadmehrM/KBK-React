import "./Location.css"
import Map, {Marker} from 'react-map-gl';
import PopoutMarker from '../parts/PopoutMarker.js';
import { useLayoutEffect, useRef, useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';

/*
Notes:
    - Might be better to allow map to change aspect ratio at certain width breakpoint (mobiles)
    - Add the api key as an environment varaible in the hosting service for protection
*/

function Location() {
    // dynamic height resizing for map - maintains ratio based on current map width
    const mapRef = useRef(null);

    useLayoutEffect(() => {
        function updateSize() {
            if (mapRef.current) {
                mapRef.current.style.height = `${mapRef.current.offsetWidth * 0.546}px`;
            }
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    
    // dynamic marker loading for map - loads if marker coords within map bounds
    const markers = [
        {
            longitude: -81.27361,
            latitude: 43.009953,
            text:'Western University',
            image:'school.png',
        },
        // {
        //     longitude: -81.28361,
        //     latitude: 43.809953,
        //     text:'Western University',
        //     image:'school.png',
        // }
    ]

    const [visibleMarkers, setVisibleMarkers] = useState();

    const mboxRef = useRef();

    const filterMarkers = () => {
        const {_ne: {lng: ne_lng, lat: ne_lat}, _sw: {lng: sw_lng, lat: sw_lat}} = mboxRef.current.getMap().getBounds();

        setVisibleMarkers(markers.filter((marker) => (
           marker.latitude > sw_lat && marker.latitude < ne_lat && marker.longitude < ne_lng && marker.longitude > sw_lng
        )))
    }

    // map overflow handeling to clean up markers when not hovered
    const [mapOverflow, setMapOverflow] = useState('hidden');
    
    const handleMapOverflow = (data) => {
        setMapOverflow(data);
    }

    // rendered component
    return (
        <div id="container">
            <div id="header">
                <img id="headerImage" src={require('../images/banner.png')} alt='banner' width='371'></img>
                <p id="headerText">Locations</p>
            </div>
            <div id="body">
                <p>
                    Over the past year, we have successfully expanded our services beyond London and the Toronto Region. 
                    We have established operations in additional areas, including Montreal, Guelph, St. Catharines, and Boston, US. 
                    In each of these regions, we have dedicated mini teams working diligently to collect and distribute sports equipment. 
                    By having a presence in these locations, we aim to contribute to the local communities and meet the growing demand for sports equipment in those areas. 
                    Our expansion reflects our commitment to providing accessible and high-quality sporting goods to a wider audience.
                </p>
            </div>
            <div id="map" ref={mapRef} style={{overflow: mapOverflow}}>    
                <Map
                    ref={mboxRef}
                    onLoad={filterMarkers}
                    onResize={filterMarkers}
                    onMove={filterMarkers}
                    mapboxAccessToken={process.env.REACT_APP_MAP_KEY}
                    initialViewState={{
                        longitude: -81.27361,
                        latitude: 43.009953,
                        zoom: 7
                    }}
                    mapStyle="mapbox://styles/mapbox/streets-v9"
                    style={{overflow: mapOverflow}}
                >
                    {visibleMarkers && visibleMarkers.map((marker) => {
                        return (
                            <Marker key={marker} longitude={marker.longitude} latitude={marker.latitude} anchor="bottom" >
                                <PopoutMarker
                                    text={marker.text}
                                    image={marker.image}
                                    link={'temp'}
                                    handleMapOverflow={handleMapOverflow}
                                />
                            </Marker>
                        )
                    })}
                </Map>
            </div>
        </div>
    );
}

export default Location;