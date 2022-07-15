import React from "react";
import Navbar from "./Navbar";
import "../css/Gallery.css";
import image1 from "../img/image1.jpg";
import image2 from "../img/image2.jpg";
import image3 from "../img/image3.jpg";
import image4 from "../img/image4.jpg";
import image5 from "../img/image5.jpg";
import image6 from "../img/image6.jpg";
import video1 from "../video/gympromo.mp4";
 
function Gallery() {
  return (
    <div className="gallery">
      <div className="gallery__header">
        <Navbar />
        <h1>Gallery</h1>
      </div>

      <div className="gallery__navigation">
        {/* <video loop autoPlay>
          <source
            src={video1}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video> */}
        <iframe class="responsive-iframe" src={video1}></iframe>
      </div>

      <div className="gallery__images">
        <div className="rowImg">
          <div className="col-3">
            <img src={image1} alt="" />
          </div>
          <div className="col-3">
            <img src={image2} alt="" />
          </div>
          <div className="col-3">
            <img src={image3} alt="" />
          </div>
        </div>
        <div className="rowImg">
          <div className="col-3">
            <img src={image4} alt="" />
          </div>
          <div className="col-3">
            <img src={image5} alt="" />
          </div>
          <div className="col-3">
            <img src={image6} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
