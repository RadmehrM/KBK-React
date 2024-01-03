import "./Location.css"
import GoogleMap from 'google-maps-react-markers';
import PopoutMarker from '../parts/PopoutMarker.js';
import { useLayoutEffect, useRef } from 'react';

function Location() {
    const map = useRef(null);

    // default props for google map
    const defaultProps = {
        options: {
            clickableIcons: false,
            disableDefaultUI: true,
            zoomControl: true
        },
        center: {
            lat: 43.009953,
            lng: -81.27361
        },
        zoom: 9,
        /* Disable the map until back, work on the layout with comments and styles
        solve how to use maps api without backend */
        // key: process.env.REACT_APP_GOOGLE_MAPS_KEY
    };

    // dynamic height resizing for map - maintains ratio based on current map width
    useLayoutEffect(() => {
        function updateSize() {
            if (map.current) {
                map.current.style.height = `${map.current.offsetWidth * 0.546}px`;
            }
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
      }, []);
    
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
            <div id="map" ref={map}>
                <GoogleMap
                    apiKey={defaultProps.key}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                    options={defaultProps.options}
                >
                    <PopoutMarker
                        lat={43.009953}
                        lng={-81.27361}
                        text={'Western University'}
                        image={'school.png'}
                    />
                </GoogleMap>
            </div>
        </div>
    );
}

export default Location;