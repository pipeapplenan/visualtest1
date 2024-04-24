import React from "react";
import "./App.css";
import { HashRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Timeline from "./components/Timeline";
import Carousel from "./components/Carousel";
import PhotoGallery from "./components/PhotoGallery";

function App() {
  return (
    <Router basename={process.env.REACT_APP_BASENAME}>
      <div className="App">
        <header className="App-header"></header>
        <Routes>
          <Route path="/" element={<Layout />} />
          /* <Route path="/carousel" element={<Carousel />} />
          <Route path="/photogallery" element={<PhotoGallery />} /> */
        </Routes>
      </div>
    </Router>
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
