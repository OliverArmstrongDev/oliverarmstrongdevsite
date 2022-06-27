import React from 'react';

//image imports
import capsLog from "../../assets/images/CaptainsLog.png";
import frozen from "../../assets/images/frozenSite.png";
import freebird from "../../assets/images/FreebirdSite.jpg";
import adjusttoLife from "../../assets/images/ATL.png";
import greyBurn from "../../assets/images/GreyburnSite.png";
import robotize from "../../assets/images/robotizeSite.jpg";


//styles
import "./Gallery.css"

const Gallery = () => {
  return (
    <div className='gallery-section'>
    
        <div className="gallery-content">
            <div className='gallery-title-area'>
                <h1 className='green'>My Portfolio</h1>
                <h1 className='horizontal-text'>Some hand picked projects...</h1>
                <h2>Some of these are personal projects and others are for clients.<br></br>
               This website is also part of my portfolio. It's built using React, JavaScript and CSS.</h2>
            </div>
           <div className='image-gallery'>
            <a rel="noreferrer"  target={"_blank"} href='https://captainslog.oliverarmstrongdev.com'><img className='gallery-img' alt='gallery item' src={capsLog}/></a>
            <a ><img className='gallery-img' alt='gallery item' src={greyBurn}/></a>
            <a rel="noreferrer"  target={"_blank"} href='https://freebirdweddingfilms.com.au'><img className='gallery-img' alt='gallery item' src={freebird}/></a>
            <a rel="noreferrer"  target={"_blank"} href='https://frozen.oliverarmstrongdev.com/'><img className='gallery-img' alt='gallery item' src={frozen}/></a>
            <a rel="noreferrer"  target={"_blank"} href='https://adjusttolife.com.au'><img className='gallery-img' alt='gallery item' src={adjusttoLife}/></a>
            <a rel="noreferrer"  target={"_blank"} href='https://robotize.oliverarmstrongdev.com/'><img className='gallery-img' alt='gallery item' src={robotize}/></a>
           </div>
           <div className='shape-overlay'></div>
    </div>

</div>
  )
}

export default Gallery