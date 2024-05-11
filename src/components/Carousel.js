import React from "react";
import "./Carousel.css"; // Assuming you have extracted CSS into a separate file
import { useNavigate } from "react-router-dom";
import { div } from "three/examples/jsm/nodes/Nodes.js";

const image = require("../images/tauranga.jpg");
const image2 = require("../images/taupo.jpg");
const image3 = require("../images/archeteck11.jpg");
const image4 = require("../images/archeteck3.jpg");
const image5 = require("../images/hamiltonlake.jpg");
const image6 = require("../images/raglan.jpg");

const Carousel = () => {
  const items = [
    {
      id: 1,
      imgSrc: image,
      label: "Tauranga(120)",
    },
    {
      id: 2,
      imgSrc: image2,
      label: "Taopo(344)",
    },
    {
      id: 3,
      imgSrc: image3,
      label: "Wellington(233)",
    },
    {
      id: 4,
      imgSrc: image4,
      label: "Auckland(122)",
    },
    {
      id: 5,
      imgSrc: image5,
      label: "Hamilton(455)",
    },
    {
      id: 6,
      imgSrc: image6,
      label: "Raglan(214)",
    },
  ];
  const navigate = useNavigate();
  const handleImgClick = () => {
    navigate("/photogallery"); // 点击后跳转到PhotoGallery页面
  };
  const handleBackClick = () => {
    navigate(-1); // 返回上一级
  };

  return (
    <div>
      <div className="backbutton-layout">
        <button className="back-button" onClick={handleBackClick}>
          Return to previous page
        </button>
      </div>
      <div className="carousel-container">
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
      </div>
    </div>
  );
};

export default Carousel;
