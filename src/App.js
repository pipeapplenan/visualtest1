import React from "react";
import "./App.css";
import {
  HashRouter,
  Routes,
  Route,
  Outlet,
  useLocation,
} from "react-router-dom"; // 注意这里的导入
import Timeline from "./components/Timeline";
import Carousel from "./components/Carousel";
import PhotoGallery from "./components/PhotoGallery";

function App() {
  return (
    <HashRouter>
      {" "}
      <div className="App">
        <Header />
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
function Header() {
  const location = useLocation(); // 使用 useLocation 钩子获取当前路由信息
  const headerClass =
    location.pathname === "/photogallery"
      ? "App-header App-header-small"
      : "App-header";
  return <header className={headerClass}></header>;
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
