import { useState } from "react";
import { FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";

function PopoutMarker({text, image}) {
    const [hover, setHover] = useState(false);
     
    return (
            <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{position: 'relative'}}>
                {hover && 
                    <div style={{position: 'absolute', zIndex: 2, background: 'white', top: -230, left: -120}}>
                        <img src={require('../images/' + image)} alt={image} width='300'></img>
                        <p style={{color: 'black', fontSize: '24px'}}>{text}</p>
                        <div style={{display: 'inline-flex', columnGap: '10px', alignItems: 'center', color: 'grey', fontSize: '18px'}}>
                            <p>Learn more</p>
                            <FaArrowRight/>
                        </div>
                    </div>
                
                }
                <FaMapMarkerAlt style={{position: 'absolute', zIndex: 1}} size={36} color="red"/>
            </div>
    );
}

export default PopoutMarker;