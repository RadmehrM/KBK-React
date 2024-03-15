import React from 'react';
import pic1 from '../images/Gallery/pic1.jpg';
import pic2 from '../images/Gallery/pic2.jpg';
import pic3 from '../images/Gallery/pic3.jpg';
import pic4 from '../images/Gallery/pic4.jpg';
import pic5 from '../images/Gallery/pic5.jpg';
import pic6 from '../images/Gallery/pic6.jpg';
import pic7 from '../images/Gallery/pic7.jpg';

import '../styles/GalleryPage.css';

const GalleryPage = () => {
  const photos = [pic1, pic2, pic3, pic4, pic5, pic6, pic7];

  return (
    <div className='gallery-container'>
      <div id="header">
        <img
          id="headerImage"
          src={require("../images/banner.png")}
          alt="banner"
          width="371"
        ></img>
        <p id="headerText">Gallery</p>
      </div>

      <div className="photo-collage">
            {photos.map((photo, index) => (
              <img key={index} src={photo} alt={`Photo ${index}`} className={`photo-${index + 1}`} />
            ))}
      </div>
    </div>
    
  );
};

export default GalleryPage;