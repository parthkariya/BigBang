import React from "react";
import "./GalleryModal.css";
// import { motion } from "framer-motion";

function GalleryModal({ selectedImg, setSelectedImg }) {
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null);
    }
  };

  return (
    <div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="backdrop"
      onClick={handleClick}
    >
      <img
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        src={selectedImg}
        alt="enlarged pic"
        style={{ backgroundColor: "#fff" }}
      />
    </div>
  );
}

export default GalleryModal;
