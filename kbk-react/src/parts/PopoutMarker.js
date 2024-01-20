import "./PopoutMarker.css"
import { useRef, useEffect, useState } from "react";
import { FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";

/*
Notes:
    - set up link with learnmore button
    - Adjust image width to scale with thin display
    - Clean text formatting inside of detailed
*/

function PopoutMarker({text, image, link, handleMapOverflow}) {
    const [hover, setHover] = useState(false);
    
    // adds learnmore and hover listeners to marker with clean up
    const learnmoreRef = useRef(null);
    const markerRef = useRef(null);

    useEffect(() => {
        function onMouseOver(){
            handleMapOverflow('visible');
            setHover(true)
        }
        function onMouseOut(){
            setHover(false)
            handleMapOverflow('hidden');
        }

        if (markerRef.current) {
            let markerCurrent = markerRef.current;

            markerCurrent.addEventListener('mouseover', onMouseOver);
            markerCurrent.addEventListener('mouseout', onMouseOut);
        
            return () => {
                markerCurrent.removeEventListener('mouseover', onMouseOver);
                markerCurrent.removeEventListener('mouseout', onMouseOut);
            }
        }
      }, [markerRef, handleMapOverflow])
     
    return (
            <div id="container-marker" ref={markerRef}>
                {hover && 
                    <div id="detailed">
                        <img src={require('../images/' + image)} alt={image} width='300'></img>
                        <p>{text}</p>
                        <div ref={learnmoreRef} id="learnmore">
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