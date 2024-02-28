import "../styles/Location.css";
import { useLayoutEffect, useRef, useState } from "react";

/* Notes:
- Popup with school image should stay in same relative position when shrunk (this can be completed when making mobile friendly)

*/

function Location() {
  // dynamic height resizing for map/markers - maintains ratio based on current map width
  const mapRef = useRef(null);
  const [markerDimension, setMarkerDimension] = useState({
    width: 33,
    height: 33 * 1.429,
  })

  const [popup, setPopup] = useState(null);

  useLayoutEffect(() => {
    function updateSize() {
      if (mapRef.current) {
        mapRef.current.style.height = `${mapRef.current.offsetWidth * 0.546}px`;
        setMarkerDimension({
          width: mapRef.current.offsetWidth * 0.025,
          height: mapRef.current.offsetWidth * 0.025 * 1.429
        })
      }
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

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
        <div id="map-image" onClick={() => setPopup(null)}>
          
          {/* toronto */}
          <div
            className="marker"
            id="toronto"
          >
            <img
              src={require("../images/marker.png")}
              alt=""
              style={{...markerDimension, transform: 'translateX(-50%)'}}
              onMouseOver={() => {setPopup('toronto')}}
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
              onMouseOver={() => {setPopup('london')}}
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
              onMouseOver={() => {setPopup('stcatherines')}}
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
              onMouseOver={() => {setPopup('guelph')}}
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
              onMouseOver={() => {setPopup('kingston')}}
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
      </div>
    </div>
  );
}

export default Location;