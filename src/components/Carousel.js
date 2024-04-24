import React from "react";
import "./Carousel.css"; // Assuming you have extracted CSS into a separate file
import { useNavigate, Route, Routes } from "react-router-dom";
import PhotoGallery from "./PhotoGallery";

const image = require("../images/earth2.jpg");
const image2 = require("../images/earth.jpg");
const image3 = require("../images/IMG_2183.JPG");
const image4 = require("../images/IMG_2207.JPG");
const image5 = require("../images/IMG_2198.JPG");
const image6 = require("../images/IMG_2214.JPG");

const Carousel = () => {
  const items = [
    {
      id: 1,
      imgSrc: image,
      label: "Tauranga",
    },
    {
      id: 2,
      imgSrc: image2,
      label: "Taopo",
    },
    {
      id: 3,
      imgSrc: image3,
      label: "Wellington",
    },
    {
      id: 4,
      imgSrc: image4,
      label: "Auckland",
    },
    {
      id: 5,
      imgSrc: image5,
      label: "Hamilton",
    },
    {
      id: 6,
      imgSrc: image6,
      label: "Raglan",
    },
  ];
  const navigate = useNavigate();
  const handleImgClick = () => {
    navigate("/photogallery"); // 点击后跳转到PhotoGallery页面
  };

  return (
    <div className="carousel">
      {items.map((item) => (
        <div key={item.id} className="item">
          <p className="text-overlay">{item.label}</p>
          <img
            src={item.imgSrc}
            alt={item.label}
            onClick={() => handleImgClick()}
          />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
