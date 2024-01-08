import "./PopoutMarker.css"
import { useRef, useEffect, useState } from "react";
import { FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";

/*
Notes:
    - Adjust image width to scale with thin display
    - Allow popout overflow from the map
    - Clean text formatting inside of detailed
*/

function PopoutMarker({text, image}) {
    const [hover, setHover] = useState(false);
    
    // adds hover listeners to marker with clean up
    const markerRef = useRef(null);

    function onMouseOver(){setHover(true)}
    function onMouseOut(){setHover(false)}

    useEffect(() => {
        if (markerRef.current) {
            let markerCurrent = markerRef.current;

            markerCurrent.addEventListener('mouseover', onMouseOver)
            markerCurrent.addEventListener('mouseout', onMouseOut);
        
            return () => {
                markerCurrent.removeEventListener('mouseover', onMouseOver);
                markerCurrent.removeEventListener('mouseout', onMouseOut);
            }
        }
      }, [markerRef])
     
    return (
            <div id="container-marker" ref={markerRef}>
                {hover && 
                    <div id="detailed">
                        <img src={require('../images/' + image)} alt={image} width='300'></img>
                        <p>{text}</p>
                        <div id="learnmore">
                            <p>Learn more</p>
                            <FaArrowRight/>
                        </div>
                    </div>
                }
                <FaMapMarkerAlt id="pin"/>
            </div>
    );
}

export default PopoutMarker;