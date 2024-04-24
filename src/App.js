import React from "react";
import "./App.css";
import { HashRouter, Routes, Route, Outlet } from "react-router-dom"; // 注意这里的导入
import Timeline from "./components/Timeline";
import Carousel from "./components/Carousel";
import PhotoGallery from "./components/PhotoGallery";

function App() {
  return (
    <HashRouter>
      {" "}
      <div className="App">
        <header className="App-header"></header>
        <Routes>
          {" "}
          <Route path="/" element={<Layout />} />
          <Route path="/carousel" element={<Carousel />} />
          <Route path="/photogallery" element={<PhotoGallery />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

function Layout() {
  return (
    <div>
      <Timeline />
      <Outlet />
    </div>
  );
}

export default App;
