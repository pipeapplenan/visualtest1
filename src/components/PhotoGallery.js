import React, { useState } from "react";
import "./PhotoGallery.css";
import image1 from "../images/animal1.jpg";
import image2 from "../images/animal2.jpg";
import image3 from "../images/animal3.jpg";
import image4 from "../images/animal4.jpg";
import image5 from "../images/animal5.jpg";
import image6 from "../images/archeteck1.jpg";
import image7 from "../images/archeteck2.jpg";
import image8 from "../images/archeteck3.jpg";
import image9 from "../images/archeteck4.jpg";
import image10 from "../images/archeteck5.jpg";
import image11 from "../images/archeteck6.jpg";
import image12 from "../images/archeteck7jpg.jpg";
import image13 from "../images/archeteck8.jpg";
import image14 from "../images/archeteck9.jpg";
import image15 from "../images/archeteck10.jpg";
import image16 from "../images/archeteck11.jpg";
import image17 from "../images/architeck3.jpg";
import image18 from "../images/food1.jpg";
import image19 from "../images/food2.jpg";
import image20 from "../images/food4.jpg";
import image21 from "../images/food5.jpg";
import image22 from "../images/food8.jpg";
import image23 from "../images/food9.jpg";
import image24 from "../images/food10.jpg";
import image25 from "../images/food11.jpg";
import image26 from "../images/food12.jpg";
import image27 from "../images/scene1.jpg";
import image28 from "../images/scene2.jpg";
import image29 from "../images/scene3.jpg";
import image30 from "../images/scene4.jpg";
import image31 from "../images/people1.jpg";
import image32 from "../images/people2.jpg";
import image33 from "../images/people3.jpg";
import image34 from "../images/people4.jpg";
import image35 from "../images/tauranga.jpg";
import image36 from "../images/tauranga1.jpg";

const PhotoGallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const openModal = (src) => {
    setSelectedImg(src);
  };

  const closeModal = () => {
    setSelectedImg(null);
  };

  const categories = [
    {
      name: "People",
      images: [
        image31,
        image32,
        image33,
        image34,
        image31,
        image32,
        image33,
        image34,
        image31,
        image32,
        image33,
        image34,
        image31,
        image32,
        image33,
        image34,
        image31,
        image32,
        image33,
        image34,
        image31,
        image32,
        image33,
        image34,
        image31,
        image32,
        image33,
        image34,
        // Add more image paths as needed
      ],
    },
    {
      name: "Food",
      images: [
        image18,
        image26,
        image19,
        image20,
        image21,
        image22,
        image23,
        image24,
        image25,
        image18,
        image26,
        image19,
        image20,
        image21,
        image22,
        image23,
        image24,
        image25,
        image18,
        image26,
        image19,
        image20,
        image21,
        image22,
        image23,
        image24,
        image25,
        // Add more image paths as needed
      ],
    },
    {
      name: "Landscapes",
      images: [
        image27,
        image28,
        image29,
        image30,
        image35,
        image36,
        image27,
        image28,
        image29,
        image30,
        image35,
        image36,
        image27,
        image28,
        image29,
        image30,
        image35,
        image36,
        image27,
        image28,
        image29,
        image30,
        image35,
        image36,
        // Add more image paths as needed
      ],
    },
    {
      name: "Animals",
      images: [
        image1,
        image2,
        image3,
        image5,
        image4,
        image1,
        image2,
        image3,
        image5,
        image4,
        image1,
        image2,
        image3,
        image5,
        image4,
        image1,
        image2,
        image3,
        image5,
        image4,
        // Add more image paths as needed
      ],
    },
    {
      name: "Architecture",
      images: [
        image6,
        image7,
        image8,
        image9,
        image10,
        image11,
        image12,
        image13,
        image14,
        image15,
        image16,
        image17,
        image6,
        image7,
        image8,
        image9,
        image10,
        image11,
        image12,
        image13,
        image14,
        image15,
        image16,
        image17,
        image6,
        image7,
        image8,
        image9,
        image10,
        image11,
        image12,
        image13,
        image14,
        image15,
        image16,
        image17,
        // Add more image paths as needed
      ],
    },
  ];

  return (
    <div className="table-container">
      <table>
        {categories.map((category) => (
          <React.Fragment key={category.name}>
            <tr>
              <th>{category.name}</th>
            </tr>
            <tr>
              <td>
                {category.images.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={category.name}
                    onClick={() => openModal(src)}
                  />
                ))}
              </td>
            </tr>
          </React.Fragment>
        ))}
      </table>
      {selectedImg && (
        <div className="modal" onClick={closeModal}>
          <img src={selectedImg} alt="Enlarged" className="enlarged-img" />
        </div>
      )}

      <style jsx>
        {`
          .modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .enlarged-img {
            max-width: 90%;
            max-height: 50%;
          }
        `}
      </style>
    </div>
  );
};

export default PhotoGallery;
