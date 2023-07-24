import React from "react";
import "./HomeGallery.css";
// import Modal from "./components/Modal";
import images from "../../constants/images";
import Gallery from "../gallery/Gallery";
import { useState } from "react";
import GalleryModal from "../gallerymodal/GalleryModal";

const HomeGallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    // <section className="sec-gallery">
    //   <div className="gallery-container">
    //     <div className="gallery-heading-sec">
    //       <h5 className="gallery-heading">Our Gallery</h5>
    //       <h4 className="gallery-subheading">CAPTURED MOMENTS IN WATERBOOM</h4>
    //       <p className="gallery-txt">
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //         eiusmod tempor incididunt ut labore et dolore magna aliqua
    //       </p>
    //     </div>

    //     <div className="card-gallery_wrapper">
    //       <div className="card-gallery">
    //         <img src={images.heroimg33} alt="gallery picture" />
    //       </div>
    //       <div className="card-gallery">
    //         <img src={images.homegallery5} alt="gallery picture" />
    //       </div>
    //       <div className="card-gallery">
    //         <img src={images.homegallery1} alt="gallery picture" />
    //       </div>
    //       <div className="card-gallery">
    //         <img src={images.heroimg44} alt="gallery picture" />
    //       </div>
    //       <div className="card-gallery">
    //         <img src={images.homegallery4} alt="gallery picture" />
    //       </div>

    //       <div className="card-gallery">
    //         <img src={images.heroimg55} alt="gallery picture" />
    //       </div>

    //       {/* <div className="card">
    //         <img
    //           src="https://images.unsplash.com/photo-1648737963503-1a26da876aca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMjR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    //           alt=""
    //         />
    //       </div> */}
    //       <div className="card-gallery">
    //         <img src={images.homegallery4} alt="gallery picture" />
    //       </div>
    //       <div className="card-gallery">
    //         <img src={images.heroimg3} alt="gallery picture" />
    //       </div>
    //       <div className="card-gallery">
    //         <img src={images.heroimg1} alt="gallery picture" />
    //       </div>
    //       <div className="card-gallery">
    //         <img src={images.homegallery6} alt="gallery picture" />
    //       </div>
    //       <div className="card-gallery">
    //         <img src={images.homegallery2} alt="gallery picture" />
    //       </div>

    //       {/* <div className="card">
    //         <img
    //           src="https://images.unsplash.com/photo-1654023316132-3665072d427b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
    //           alt=""
    //         />
    //       </div> */}

    //       <div className="card-gallery">
    //         <img src={images.homegallery1} alt="gallery picture" />
    //       </div>
    //       <div className="card-gallery">
    //         <img src={images.heroimg22} alt="gallery picture" />
    //       </div>
    //       <div className="card-gallery">
    //         <img src={images.homegallery5} alt="gallery picture" />
    //       </div>
    //       <div className="card-gallery">
    //         <img src={images.homegallery4} alt="" />
    //       </div>
    //       {/* <div className="card">
    //         <img
    //           src="https://images.unsplash.com/photo-1653242816429-fd9393b49bb4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    //           alt=""
    //         />
    //       </div> */}

    //       <div className="card-gallery">
    //         <img src={images.homegallery3} alt="gallery picture" />
    //       </div>
    //       <div className="card-gallery">
    //         <img src={images.heroimg4} alt="gallery picture" />
    //       </div>
    //       <div className="card-gallery">
    //         <img src={images.homegallery2} alt="gallery picture" />
    //       </div>
    //       <div className="card-gallery">
    //         <img src={images.heroimg66} alt="gallery picture" />
    //       </div>
    //       <div className="card-gallery">
    //         <img src={images.homegallery8} alt="gallery picture" />
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <>
      <Gallery setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <GalleryModal
          selectedImg={selectedImg}
          setSelectedImg={setSelectedImg}
        />
      )}
    </>
  );
};

export default HomeGallery;
