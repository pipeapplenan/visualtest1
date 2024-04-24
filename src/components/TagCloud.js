import React, { useState, useEffect } from "react";
import "./TagCloud.css";
import { useNavigate } from "react-router-dom";

const countries = [
  "USA",
  "Canada",
  "UK",
  "Germany",
  "France",
  "Italy",
  "Japan",
  "China",
  "Australia",
  "Brazil",
  "Spain",
  "Mexico",
  "Russia",
  "India",
  "South Korea",
  "South Africa",
  "Netherlands",
  "Belgium",
  "New Zealand",
  "Sweden",
  "Norway",
  "Poland",
  "Argentina",
  "Chile",
  "Peru",
  "Egypt",
  "Nigeria",
  "Kenya",
  "UAE",
  "Saudi Arabia",
  // Add more countries as needed
];

const colors = [
  "#FF0000",
  "#00FF00",
  "#0000FF",
  "#FFFF00",
  "#FF00FF",
  "#00FFFF",
  "#C0C0C0",
  "#808080",
  "#800000",
  "#008000",
  // Add more colors as needed
];

const getRandomItem = (array) =>
  array[Math.floor(Math.random() * array.length)];

const generateRandomTags = (count) => {
  const tags = [];
  let actualCount = Math.min(count, countries.length);
  for (let i = 0; i < actualCount; i++) {
    const country = getRandomItem(countries);
    const color = getRandomItem(colors);
    const size = Math.random() * 2 + 1; // 1 to 3 rem
    const shouldBreak = Math.random() > 0.5; // 50% 的概率在这个标签后面换行
    tags.push({ country, color, size, shouldBreak });
  }
  return tags;
};

const TagCloud = ({ count }) => {
  const [tags, setTags] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const newTags = generateRandomTags(count);
    setTags(newTags);
  }, [count]);

  const handleTagClick = () => {
    navigate("/carousel"); // 点击后跳转到Circle页面
  };

  return (
    <div className="tag-cloud-container">
      <div className="tags-wrapper">
        {tags.map((tag, index) => (
          <React.Fragment key={index}>
            <span
              className="tag"
              style={{
                color: tag.color,
                fontSize: `${tag.size}rem`,
                margin: "5px",
              }}
              onClick={() => handleTagClick()}
            >
              {tag.country}
            </span>
            {tag.shouldBreak && <br />}{" "}
            {/* 如果 shouldBreak 为 true，则在这个标签后面换行 */}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
export default TagCloud;
