import "../styles/Location.css";
import { useLayoutEffect, useRef, useState } from "react";
import { MapInteractionCSS } from "react-map-interaction";

/* Notes:
- Popup with school image should stay in same relative position when shrunk (this can be completed when making mobile friendly)

*/

function Location() {
  const MOBILE_WIDTH = 900;

  let translation = {
    x: -400,
    y: -130
  }
  if (window.innerWidth > MOBILE_WIDTH) {
    translation = {
      x: 0,
      y: 0
    }
  }

  // dynamic height resizing for map/markers - maintains ratio based on current map width
  const mapRef = useRef(null);
  const [markerDimension, setMarkerDimension] = useState({
    width: 33,
    height: 33 * 1.429
  })

  const [popup, setPopup] = useState(null);

  function handleWindowSizeChange() {
    if (window.innerWidth > MOBILE_WIDTH) {
      if (mapRef.current) {
        mapRef.current.style.height = `${mapRef.current.offsetWidth * 0.546}px`;
      }
    } else {
      if (mapRef.current) {
        mapRef.current.style.height = `${mapRef.current.offsetWidth * 1.2}px`;
      }
    }

    let wVal = mapRef.current.offsetHeight * 0.06
    wVal = (wVal <= 32) ? wVal : 32
    setMarkerDimension({
      width: wVal,
      height: wVal * 1.429
    })
  }

  useLayoutEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    handleWindowSizeChange();
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange)
    }
  }, [])

  // rendered component
  return (
    <div id="container">
      <div id="header">
        <img
          id="headerImage"
          src={require("../images/banner.png")}
          alt="banner"
          width="371"
        ></img>
        <p id="headerText">Locations</p>
      </div>
      <div id="body">
        <p className="location-p">
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
      <div id="map" ref={mapRef}>
        <MapInteractionCSS
          disableZoom={true}
          defaultValue={{
            scale: 1,
            translation: {...translation}
          }}
          minScale={1}
        >
          <div id="map-image">

            {/* toronto */}
            <img
              onPointerDown={() => {setPopup(null)}}
              src={require("../images/map.png")}
              alt="Map"
              style={{position: 'absolute', transform: 'translateX(-50%)'}}/>
            <div
              className="marker"
              id="toronto"
            >
              <img
                src={require("../images/marker.png")}
                alt=""
                style={{...markerDimension, transform: 'translateX(-50%)'}}
                onPointerEnter={() => {setPopup('toronto')}}
              />
              {popup === 'toronto' &&
                <div className="popup">
                  <img
                    src={require('../images/school.png')}
                    className="school-image"
                    alt="map"
                  />
                  <span className="school-title">Toronto</span>
                  <span className="learn-more-link">Learn more -{">"}</span>
                  <div className="polygon"></div>
                </div>
              }
            </div>

            {/* london */}
            <div
              className="marker"
              id="london"
            >
              <img
                src={require("../images/marker.png")}
                alt=""
                style={{...markerDimension, transform: 'translateX(-50%)'}}
                onPointerEnter={() => {setPopup('london')}}
              />
              {popup === 'london' &&
                <div className="popup">
                  <img
                    src={require('../images/school.png')}
                    className="school-image"
                    alt="map"
                  />
                  <span className="school-title">London</span>
                  <span className="learn-more-link">Learn more -{">"}</span>
                  <div className="polygon"></div>
                </div>
              }
            </div>

            {/* stcatherines */}
            <div
              className="marker"
              id="stcatherines"
            >
              <img
                src={require("../images/marker.png")}
                alt=""
                style={{...markerDimension, transform: 'translateX(-50%)'}}
                onPointerEnter={() => {setPopup('stcatherines')}}
              />
              {popup === 'stcatherines' &&
                <div className="popup">
                  <img
                    src={require('../images/school.png')}
                    className="school-image"
                    alt="map"
                  />
                  <span className="school-title">St Catherines</span>
                  <span className="learn-more-link">Learn more -{">"}</span>
                  <div className="polygon"></div>
                </div>
              }
            </div>

            {/* guelph */}
            <div
              className="marker"
              id="guelph"
            >
              <img
                src={require("../images/marker.png")}
                alt=""
                style={{...markerDimension, transform: 'translateX(-50%)'}}
                onPointerEnter={() => {setPopup('guelph')}}
              />
              {popup === 'guelph' &&
                <div className="popup">
                  <img
                    src={require('../images/school.png')}
                    className="school-image"
                    alt="map"
                  />
                  <span className="school-title">Guelph</span>
                  <span className="learn-more-link">Learn more -{">"}</span>
                  <div className="polygon"></div>
                </div>
              }
            </div>   

            {/* kingston */}
            <div
              className="marker"
              id="kingston"
            >
              <img
                src={require("../images/marker.png")}
                alt=""
                style={{...markerDimension, transform: 'translateX(-50%)'}}
                onPointerEnter={() => {setPopup('kingston')}}
              />
              {popup === 'kingston' &&
                <div className="popup">
                  <img
                    src={require('../images/school.png')}
                    className="school-image"
                    alt="map"
                  />
                  <span className="school-title">Kingston</span>
                  <span className="learn-more-link">Learn more -{">"}</span>
                  <div className="polygon"></div>
                </div>
              }
            </div>     
            
          </div>

        </MapInteractionCSS>

      </div>
    </div>
  );
}

export default Location;