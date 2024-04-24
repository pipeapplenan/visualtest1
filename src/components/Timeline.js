import React, { useState } from "react";
import "./Timeline.css";
import TagCloud from "./TagCloud";

const Timeline = () => {
  const [timestamps, setTimestamps] = useState([
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
  ]);

  const [startYear, setStartYear] = useState(2010);
  const [tagCount, setTagCount] = useState(5); // 初始标签数量为 5

  const handleLeftArrowClick = () => {
    setStartYear((prevYear) => prevYear - 1);
    setTagCount(5); // 每次切换年份时重置标签数量
    setTimestamps((prevTimestamps) => [
      `${startYear - 1}`,
      ...prevTimestamps.slice(0, -1),
    ]);
  };

  const handleRightArrowClick = () => {
    setStartYear((prevYear) => prevYear + 1);
    setTagCount(5); // 每次切换年份时重置标签数量
    setTimestamps((prevTimestamps) => [
      ...prevTimestamps.slice(1),
      `${startYear + 5}`,
    ]);
  };
  const handleTimestampClick = () => {
    // 随机生成 5 到 10 个标签
    const newTagCount = Math.floor(Math.random() * 6) + 5;
    setTagCount(newTagCount);
  };

  return (
    <div className="timeline-container">
      <div className="arrow-left" onClick={handleLeftArrowClick}></div>
      <div className="timeline-line"></div>
      <div className="arrow-right" onClick={handleRightArrowClick}></div>
      <div className="timestamps">
        {timestamps.map((timestamp, index) => (
          <button
            key={index}
            className="timestamp-button"
            onClick={handleTimestampClick}
          >
            {timestamp}
          </button>
        ))}
      </div>

      <TagCloud count={tagCount} />
    </div>
  );
};

export default Timeline;
