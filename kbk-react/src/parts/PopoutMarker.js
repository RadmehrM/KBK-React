/*
Notes:
    - Adjust image width to scale with thin display
*/

import "./PopoutMarker.css"
import { FaArrowRight } from "react-icons/fa";

// Popout Component - contains detailed information for hovered markers
function PopoutMarker({text, image, link, onMouseOver, onMouseOut}) {

    // handles link routing
    function onClickLink(){
        console.log(link); // <- to be replaced
    }
    
    // rendered component
    return (
            <div id="container-marker" onMouseOut={onMouseOut} onMouseOver={onMouseOver}>
                <div id="detailed">
                    <img src={require('../images/' + image)} alt={image} width='300'></img>
                    <p>{text}</p>
                    <div onClick={onClickLink} id="learnmore">
                        <p>Learn more</p>
                        <FaArrowRight/>
                    </div>
                </div>
            </div>
    );
}

export default PopoutMarker;