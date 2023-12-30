import GoogleMap from 'google-maps-react-markers';
import PopoutMarker from '../parts/PopoutMarker.js';

function Location() {
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
        key: process.env.REACT_APP_GOOGLE_MAPS_KEY
    };
     
    return (
        <div style={{padding: '40px 0px 90px 0px', rowGap: '14px', display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center', background: 'white'}}>
            <div style={{position: 'relative', height: 140}}>
                <img src={require('../images/banner.png')} alt='banner' width='300' style={{position: 'absolute', top: '50%', left: '50%', transform: 'translateX(-50%) translateY(-50%)', Index: 2}}></img>
                {/* add "Locations text directly into the image and crop image" */}
                <p style={{color: 'black', fontSize: '35px', position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%) translateY(-50%)', zIndex: 1}}>Locations</p>
            </div>
            <div style={{ width: '80vw' }}>
                <p style={{color: 'black', fontSize: '24px'}}>
                    Over the past year, we have successfully expanded our services beyond London and the Toronto Region. 
                    We have established operations in additional areas, including Montreal, Guelph, St. Catharines, and Boston, US. 
                    In each of these regions, we have dedicated mini teams working diligently to collect and distribute sports equipment. 
                    By having a presence in these locations, we aim to contribute to the local communities and meet the growing demand for sports equipment in those areas. 
                    Our expansion reflects our commitment to providing accessible and high-quality sporting goods to a wider audience.
                </p>
            </div>
            <div style={{marginTop: '40px', height: '70vh', width: '65vw', alignItems: 'center', justifyContent: 'center', border: 'solid', borderWidth: 1, borderColor: 'black', padding: '30px'}}>
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