import "./Location.css"
import GoogleMap from 'google-maps-react-markers';
import PopoutMarker from '../parts/PopoutMarker.js';
import React, { useLayoutEffect, useRef } from 'react';

/*
Notes:
    - Add the api key as an environment varaible in the hosting service for protection
    - Disable the map until back, work on the layout with comments and styles
    - Since ellipses are absolutely positioned, their current position is different
    compared to the expected one. Once the header and footers are added in this should be fixed.
*/

function Location() {
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
        // key: process.env.REACT_APP_GOOGLE_MAPS_KEY
    };

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
    
    return (
        <div id="container">
            <div className="ellipse" id="ellipse-11"></div>
            <div className="ellipse" id="ellipse-12"></div>
            <div className="ellipse" id="ellipse-13"></div>
            <div className="ellipse" id="ellipse-14"></div>
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
            <div id="map" ref={mapRef}>
                
                {/* Testing PopoutMarker without map */}
                <PopoutMarker
                    lat={43.009953}
                    lng={-81.27361}
                    text={'Western University'}
                    image={'school.png'}
                />


                {/* <GoogleMap
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
                </GoogleMap> */}
            </div>
        </div>
    );
}

export default Location;