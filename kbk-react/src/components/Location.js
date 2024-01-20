import "./Location.css";
import { useLayoutEffect, useRef } from "react";
import mapImage from "../images/map.png";

/*
Notes:
    - replace map with images
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
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // rendered component
  return (
    <div id="container">
      <div className="ellipse" id="ellipse-11"></div>
      <div className="ellipse" id="ellipse-12"></div>
      <div className="ellipse" id="ellipse-13"></div>
      <div className="ellipse" id="ellipse-14"></div>
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
      <div id="map" ref={mapRef}>
        <div id="map-image"></div>
      </div>
    </div>
  );
}

export default Location;
