import React from "react";
import "./Gallery.css";
// import useFirestore from "../hooks/useFirestore";
// import { motion, MotionConfig } from "framer-motion";
import images from "../../constants/images";

function Gallery({ setSelectedImg }) {
  const GalleryImage = [
    { id: 1, imageUrl: images.heroimg33 },
    { id: 2, imageUrl: images.homegallery5 },
    { id: 3, imageUrl: images.homegallery1 },
    { id: 4, imageUrl: images.heroimg44 },
    { id: 5, imageUrl: images.homegallery4 },
    { id: 6, imageUrl: images.heroimg55 },
    { id: 7, imageUrl: images.heroimg3 },
    { id: 8, imageUrl: images.heroimg1 },
    { id: 9, imageUrl: images.homegallery6 },
    { id: 10, imageUrl: images.homegallery2 },
    { id: 11, imageUrl: images.heroimg22 },
    { id: 12, imageUrl: images.homegallery3 },
    { id: 13, imageUrl: images.heroimg4 },
    { id: 14, imageUrl: images.heroimg66 },
    { id: 15, imageUrl: images.homegallery8 },
    { id: 16, imageUrl: images.homegallery5 },
  ];

  return (
    <>
      <section className="sec-gallery">
        <div className="gallery-heading-sec">
          <h5 className="gallery-heading">Our Gallery</h5>
          <h4 className="gallery-subheading">CAPTURED MOMENTS IN WATERBOOM</h4>
          <p className="gallery-txt">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>

        <div className="img-grid">
          {GalleryImage &&
            GalleryImage.map((doc) => (
              <div
                layout
                whileHover={{ opacity: 1 }}
                className="img-wrap"
                key={doc.id}
                onClick={() => setSelectedImg(doc.imageUrl)}
              >
                <img
                  src={doc.imageUrl}
                  alt="uploadded pic"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                />
              </div>
            ))}
        </div>
      </section>
    </>
  );
}

export default Gallery;
