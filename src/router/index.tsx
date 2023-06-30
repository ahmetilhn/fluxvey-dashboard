import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Surveys from "../pages/Surveys";

const RouteLayer = () => {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Surveys />} path="/surveys" />
    </Routes>
  );
};

export default RouteLayer;
