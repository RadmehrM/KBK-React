/*
Notes:
    - 
*/

import "./Location.css";
import Map, {Marker} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import PopoutMarker from '../parts/PopoutMarker.js';
import { useLayoutEffect, useRef, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

// *load markers here*
const markers = [ // all KBK markers
  {
    longitude: -81.27361, // western original coords
    latitude: 43.009953,
    text:'a',
    image:'school.png',
    link: 'link a'
  },
  {
    longitude: -81.28361,
    latitude: 43.809953,
    text:'b',
    image:'school.png',
    link: 'link b'
  },
  {
    longitude: -80.1361,
    latitude: 43.809953,
    text:'c',
    image:'school.png',
    link: 'link c'
  }
]

// Location Component - contains header, body, and map
function Location() {

  // dynamic height resizing for map - maintains ratio based on current map width
  const mapRef = useRef(null); // map div reference

  useLayoutEffect(() => { // resizes map on window resize
    function updateSize() {
      if (mapRef.current) {
        mapRef.current.style.height = `${mapRef.current.offsetWidth * 0.546}px`;
      }
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);


  // dynamic marker loading for map - loads markers with lat and lng within the map bounds
  const [visibleMarkers, setVisibleMarkers] = useState(); // state for markers currently visible

  const mboxRef = useRef(); // mapbox component reference

  const filterMarkers = () => { // filters out markers that are not within map bounds
      const {_ne: {lng: ne_lng, lat: ne_lat}, _sw: {lng: sw_lng, lat: sw_lat}} = mboxRef.current.getMap().getBounds(); // top-left and bottom-right map coordinates

      setVisibleMarkers(markers.filter((marker) => (
          marker.latitude > sw_lat && marker.latitude < ne_lat && marker.longitude < ne_lng && marker.longitude > sw_lng
      )))
  }

  // map overflow handeling - cleans up markers around the border
  const [mapOverflow, setMapOverflow] = useState('hidden'); // map overflow state

  // detailed popout handeling - manages the visibility of the current marker popout
  const [popout, setPopout] = useState(null); // popout state

  const handlePopoutSelect = (marker) => { // sets map overflow and popout state
    if (marker) {
      setMapOverflow('visible');
    } else {
      setMapOverflow('hidden');
    }
    setPopout(marker);
  }

  // rendered component
  return (
    <div id="container">
      {/* ellispse backdround design elements */}
      <div className="ellipse" id="ellipse-11"></div>
      <div className="ellipse" id="ellipse-12"></div>
      <div className="ellipse" id="ellipse-13"></div>
      <div className="ellipse" id="ellipse-14"></div>
      
      {/* location header */}
      <div id="header">
        <img
          id="headerImage"
          src={require("../images/banner.png")}
          alt="banner"
          width="371"
        ></img>
        <p id="headerText">Locations</p>
      </div>

      {/* body text */}
      <div id="body">
        <p>
          Over the past year, we have successfully expanded our services beyond
          London and the Toronto Region. We have established operations in
          additional areas, including Montreal, Guelph, St. Catharines, and
          Boston, US. In each of these regions, we have dedicated mini teams
          working diligently to collect and distribute sports equipment. By
          having a presence in these locations, we aim to contribute to the
          local communities and meet the growing demand for sports equipment in
          those areas. Our expansion reflects our commitment to providing
          accessible and high-quality sporting goods to a wider audience.
        </p>
      </div>

      {/* map with markers and popout */}
      <div id="map" ref={mapRef} style={{overflow: mapOverflow}}>    
        {/* map */}
        <Map
          ref={mboxRef}
          onLoad={filterMarkers}
          onMove={filterMarkers}
          dragRotate={false}
          mapboxAccessToken={process.env.REACT_APP_MAP_KEY}
          initialViewState={{
            longitude: -81.27361,
            latitude: 43.009953,
            zoom: 7
          }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
          style={{overflow: mapOverflow}}
        >
          {/* markers within bounds */}
          {visibleMarkers && visibleMarkers.map((marker) => {
            return (
              <Marker style={{zIndex: 1}} key={marker.text} longitude={marker.longitude} latitude={marker.latitude} anchor="bottom" >
                <FaMapMarkerAlt onMouseOut={() => handlePopoutSelect(null)} onMouseOver={() => handlePopoutSelect(marker)} id="pin"/>
              </Marker>
            )
          })}

          {/* detailed popout */}
          {popout &&
            <Marker style={{zIndex: 2}} longitude={popout.longitude} latitude={popout.latitude} anchor="bottom">
              <PopoutMarker
                text={popout.text}
                image={popout.image}
                link={popout.link}
                onMouseOver={() => handlePopoutSelect(popout)}
                onMouseOut={() => handlePopoutSelect(null)}
              />
            </Marker>
          }
        </Map>
      </div>
    </div>
  );
}

export default Location;