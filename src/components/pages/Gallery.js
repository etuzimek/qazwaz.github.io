import React from "react";
import "./Gallery.css";

function Gallery() {
  return (
    <>
      <div className="gallery">
        <input
          className="gallery-input"
          type="radio"
          name="Photos"
          id="check4"
          defaultChecked
        ></input>
        <input
          className="gallery-input"
          type="radio"
          name="Photos"
          id="check3"
          defaultChecked
        ></input>
        <input
          className="gallery-input"
          type="radio"
          name="Photos"
          id="check2"
          defaultChecked
        ></input>
        <input
          className="gallery-input"
          type="radio"
          name="Photos"
          id="check1"
          defaultChecked
        ></input>

        <div className="container">
          <h1>GALERIA ZDJEC</h1>
          <div className="top-content">
            <label htmlFor="check1">All photos</label>
            <label htmlFor="check2">Apartament</label>
            <label htmlFor="check3">Plaza</label>
            <label htmlFor="check4">Okolica</label>
          </div>

          <div className="photo-gallery">
            <div className="pic okolica">
              <img src="../images/atrakcje1.jpg" alt="all"></img>
            </div>
            <div className="pic apartament">
              <img src="../images/apartament1.jpg" alt="all"></img>
            </div>
            <div className="pic beach">
              <img src="../images/beach1.jpg" alt="all"></img>
            </div>
            <div className="pic okolica">
              <img src="../images/atrakcje2.jpg" alt="all"></img>
            </div>
            <div className="pic apartament">
              <img src="../images/apartament2.jpg" alt="all"></img>
            </div>
            <div className="pic beach">
              <img src="../images/beach2.jpg" alt="all"></img>
            </div>
            <div className="pic okolica">
              <img src="../images/molo.jpg" alt="all"></img>
            </div>
            <div className="pic apartament">
              <img src="../images/apartament3.jpg" alt="all"></img>
            </div>
            <div className="pic beach">
              <img src="../images/beach3.jpg" alt="all"></img>
            </div>
            <div className="pic okolica">
              <img src="../images/papugarnia.png" alt="all"></img>
            </div>
            <div className="pic apartament">
              <img src="../images/apartament4.jpg" alt="all"></img>
            </div>
            <div className="pic beach">
              <img src="../images/beach4.jpg" alt="all"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;
