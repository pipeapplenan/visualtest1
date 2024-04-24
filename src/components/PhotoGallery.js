import React from "react";
import "./PhotoGallery.css";
import image1 from "../images/earth.jpg";
import image2 from "../images/earth2.jpg";
import image3 from "../images/IMG_2183.JPG";
import image4 from "../images/IMG_2207.JPG";
import image5 from "../images/IMG_2198.JPG";
import image6 from "../images/IMG_2214.JPG";

const PhotoGallery = () => {
  const categories = [
    {
      name: "People",
      images: [
        image1,
        image2,
        image3,
        image1,
        image4,
        image3,
        image1,
        image2,
        image3,
        image1,
        image2,
        image3,
        image1,
        image2,
        image3,
        // Add more image paths as needed
      ],
    },
    {
      name: "Food",
      images: [
        image1,
        image2,
        image3,
        image1,
        image2,
        image5,
        image1,
        image2,
        image3,
        image1,
        image2,
        image3,
        image1,
        image2,
        image3,
        // Add more image paths as needed
      ],
    },
    {
      name: "Landscapes",
      images: [
        image1,
        image2,
        image3,
        image6,
        image2,
        image3,
        image1,
        image2,
        image3,
        image1,
        image2,
        image3,
        image1,
        image2,
        image3,
        // Add more image paths as needed
      ],
    },
  ];

  return (
    <table>
      {categories.map((category) => (
        <React.Fragment key={category.name}>
          <tr>
            <th>{category.name}</th>
          </tr>
          <tr>
            <td>
              {category.images.map((src, index) => (
                <img key={index} src={src} alt={category.name} />
              ))}
            </td>
          </tr>
        </React.Fragment>
      ))}
    </table>
  );
};

export default PhotoGallery;
